import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, Typography, Box, Grid } from '@mui/material';
import VectorIcon from '../../assets/images/icons/vector.svg';
import Logo from '../../components/Logo/Logo';

import './CreditBank.css';

export default function CreditBank() {
    let navigate = useNavigate();
    useEffect(() => {

    }, []);

    const ValidateFieldsAndSave = () => {
        return true;
    }

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
                        <Grid item xs={12} sm={12}>
                            <Box pb={2} className='proposed-flex-item'>
                                <Typography className='resume-proposed' textAlign="center" variant="p" component="p">
                                    Cédula de Crédito Bancário
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={3} className='border-info'>
                            <Box className='' textAlign="center">
                                <Typography variant="p" component="p">
                                    Cédula Nº: 202107261601010
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box className='border-info' textAlign="center">
                                <Typography variant="p" component="p">
                                    DATA DE EMISSÃO: 26/07/2021
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    A VIA ENTREGUE AO EMITENTE NESTE ATO. É A VIA “NÃO NEGOCIÁVEL”
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    FINALIDADE DA OPERAÇÃO: (X) Empréstimo com garantia SAQUE-FGTS () <br />
                                    Refinanciamento () Outros (Descrever):
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    I- EMITENTE
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    ID nº:  <br />11
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    Expedidor:  <br />SSP
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    UF:   <br /> SP
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    Nacionalidade:  <br />BRASIL
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    Local Nascimento: <br />
                                    São Paulo/SP
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={2}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    Endereço:<br />
                                    Rua Rio de Janeiro Nº 315 -
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    CEP:<br />
                                    04145-030
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    Cidade:<br />
                                    São Caetano do Sul
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    UF:<br />
                                    São Paulo/SP
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-info' textAlign="left">
                                <Typography variant="p" component="p">
                                    II CREDOR doravante (“CREDOR”)
                                </Typography>
                            </Box>
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
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            navigate('/confirmar-dados')
                        }
                    }}>Assinar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}