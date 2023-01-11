import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, Typography, Box, Grid, Input, Divider } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { maskCpf } from '../../utils/maskUtils';
import { validateCpf, validateEmptyFields } from '../../utils/validateUtils';
import { themes } from '../../utils/styleUtils';

import VectorIcon from '../../assets/images/icons/vector.svg';
import './login.css';
import './login-mobile.css';
import Logo from '../../components/Logo/Logo';

export default function Login() {
    const sitekey = process.env.REACT_APP_KEY_RECAPTCHA;
    let navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const [cpf, setCpf] = useState("");
    const [isCisco, setIsCisco] = useState(false);

    useEffect(() => {
        let cpfStorage = localStorage.getItem('cpf-login');
        cpfStorage != null ? setCpf(cpfStorage) : setCpf("");

        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 992);
        }, false);
    }, []);

    const ValidateFieldsAndSave = () => {
        if (!validateEmptyFields(cpf))
            return alert('Obrigatório preencher o campo de CPF.');

        if (!validateCpf(cpf))
            return alert('CPF Inválido.');

        localStorage.setItem('cpf-login', cpf);

        return true;
    }

    return (
        <Box>
            <Logo />
            <Box>
                <Container>
                    <Grid container direction={isMobile ? "column" : "row"} >
                        <Grid item xs={12} sm={12}>
                            <Box pb={2} className='proposed-flex-item'>
                                <img className='proposed-img-center proposed-logo-text' src={VectorIcon} alt="Icone de aviso" />
                                <Typography className='title' textAlign="center" variant="p" component="p">
                                    Atenção! Cuidado com fraudes! Não aceitamos solicitações déposito antecipado de empréstimo
                                    ou devolução de valores.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-evenly" alignItems="center">
                        <Grid item sm={5} textAlign='center'>
                            <Box className='proposed-padding-text' textAlign="center">
                                <Typography className='text-proposed' variant="span" component="span">
                                    Criaremos uma proposta
                                </Typography>
                                <br />
                                <Typography className='text-proposed proposed-size-bold' variant="span" component="span">
                                    exclusiva para você!
                                </Typography>
                                <Typography className='proposed-size-subtext-simulation' pt={3} pb={1} variant="p" component="p">
                                    Faça sua simulação sem compromisso
                                </Typography>
                                <Box pb={1}>
                                    <Divider sx={{ bgcolor: themes.colors.divider }} flexItem />
                                </Box>
                                <Typography className='proposed-size-subtext-information' variant="span" component="span">
                                    Não se preocupe, todas as suas<br />
                                    informações estão seguras
                                </Typography>
                            </Box>
                        </Grid>
                        {!isMobile && <Divider orientation="vertical" sx={{ bgcolor: themes.colors.divider }} flexItem />}
                        <Grid item sm={5}>
                            <Box className='proposed-document' >
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Informe seu CPF*
                                </Typography>
                                <Input type='text' className='proposed-input' placeholder="Seu CPF" disableUnderline value={cpf} onChange={(x) => { setCpf(maskCpf(x.target.value)) }} inputProps={{ maxLength: 14 }} />
                                <Box pt={4}>
                                    <ReCAPTCHA
                                        sitekey={sitekey}
                                        onChange={(resp) => {
                                            console.log('reCAPTCHA_token', resp);
                                        }}
                                        onErrored={(e) => {
                                            console.log('reCAPTCHA_error', e)
                                        }}
                                        onExpired={(ex) => {
                                            console.log('reCAPTCHA_expired', ex)
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={6} sm={6} p={1} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        navigate(-1);
                    }}>Anterior</Button>
                </Grid>
                <Grid item xs={6} sm={6} p={1} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            if (isCisco) navigate('/email-verification')
                            else navigate('/contratar')
                        }
                    }}>Próximo</Button>
                </Grid>
            </Grid>
        </Box>
    )
}