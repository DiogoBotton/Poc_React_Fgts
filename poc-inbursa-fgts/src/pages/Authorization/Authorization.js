import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import img from '../../assets/images/img-fgts-2.png';
import Set from '../../assets/images/set.png';
import logo from '../../assets/images/logos/logo_inbursa_branco.png';
import './Authorization.css';
import './authorization-mobile.css';
export default function Authorization() {
    return (
        <Grid className='authorization-background'>
            <Grid container justifyContent="space-evenly">
                <Grid item sm={4}>
                    <Box className='box-authorization-position-left'>
                        <Typography className='title-section-authorization' variant="p" component="p">
                            COMO AUTORIZAR O BANCO INBURSA Á CONSULTAR O SEU SALDO
                        </Typography>
                        <ul className='list-authorization'>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Selecione a opção <strong>Autorizar o banco a consultarem seu FGTS;
                                    </strong>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Na tela seguinte, selecione<br />
                                    <strong>Empréstimo Saque-Aniversário</strong> e prossiga.
                                </Typography>
                            </li>
                        </ul>

                        <Typography variant="p" component="p" className='set-img'>
                            <Box className='box-size-center'>
                                <img src={logo} className='img-size-end-white' alt="Logo" />
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={7}>
                    <Box className='box-size-center'>
                        <img className='ftgs-img-size-authorization' src={img} alt="Logo Inbursa Branco" />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}