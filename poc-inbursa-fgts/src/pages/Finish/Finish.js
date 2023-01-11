import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Grid, Button } from '@mui/material';
import VectorIcon from '../../assets/images/icons/vector.svg';
import Logo from '../../components/Logo/Logo';
import Finalizado from '../../assets/images/finalizado.png';

import './Finish.css'

export default function CreditBank() {
    let navigate = useNavigate();
    useEffect(() => {

    }, []);

    return (
        <Box>
            <Logo />
            <Box>
                <Container>
                    <Grid container >
                        <Grid item xs={12} sm={12}>
                            <Box pb={2} className='proposed-flex-item'>
                                <img className='proposed-img-center proposed-logo-text' src={VectorIcon} alt="Icone de aviso" />
                                <Typography className='title' textAlign="center" variant="p" component="p">
                                    Utilize o Token que enviamos  para seu celular para assinar o contrato<br />
                                    Ambiente SANDBOX - Sem valor legal
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6} p={1} textAlign="center">
                            <img className='proposed-img-center' src={Finalizado} alt="Icone de aviso" />
                        </Grid>

                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Typography className='finishText' textAlign="center" variant="p" component="p">
                                Pronto!<br/>
                                Documento assinado.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Typography className='finishSubText' textAlign="center" variant="p" component="p">
                                Quando todas as partes assinarem, você receberá<br/>
                                um e-mail com o documento assinado.
                            </Typography>
                        </Grid>

                    </Grid>

                </Container>
            </Box>
            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={6} sm={6} p={1} textAlign="right">
                    <Button className='proposed-button' onClick={() => {
                        navigate(-1);
                    }}>Anterior</Button>
                </Grid>
                <Grid item xs={6} sm={6} p={1} textAlign="left">
                    <Button className='proposed-button' type='submit'
                    onClick={() => {navigate('/');}}>Fechar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}