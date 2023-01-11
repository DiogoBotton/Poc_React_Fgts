import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import img from '../../assets/images/img-fgts-1.png';
import Set from '../../assets/images/set.png';
import logo from '../../assets/images/logos/logo_inbursa_branco.png';
import './Accession.css';
import './Accession-mobile.css';

export default function Accession() {
    return (
        <Grid className='Accession-background'>
            <Grid container>
                <Grid item xs={12} sm={4} >
                    <Box className='box-Accession-position-left'>
                        <Typography className='title-section-Accession' variant="p" component="p">
                            COMO REALIZAR A ADESÃO AO SAQUE ANIVERSÁRIO
                        </Typography>
                        <Typography className='subTitle-Accession' variant="p" component="p">
                            Faça adesão nos canais informados e autorize o <strong className='bold-text'>Banco Inbursa</strong> a visualizar o saldo das contas
                        </Typography>

                        <ul className='list-Accession'>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Acesse o aplicativo do FGTS em seu aparelho celular
                                    (<a href='/'>Clique aqui para ir ao site</a>);
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Selecione opção <strong className='bold-text'>Entrar no aplicativo</strong>
                                    e acesse com o seu CPF e sua senha
                                    do <strong className='bold-text'>gov.br</strong> e prossiga;
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Selecione opção do <strong className='bold-text'>saque aniversário do fgts</strong>
                                    e, na tela seguinte:
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Leia e aceite os termos de condições e selecione
                                    <strong className='bold-text'>optar pelo saque aniversário</strong>
                                </Typography>
                            </li>
                        </ul>

                        <Typography variant="p" component="p" className='set-img'>
                            <Box className='box-size-center'>
                                <img src={logo} className='img-size-end-white-Accession' alt="Logo" />
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Box className='box-size-center'>
                        <img className='ftgs-img-size-Accession' src={img} alt="Logo Inbursa Branco" />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}