import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import img1 from '../../assets/images/img-fgts-3.png';
import Set from '../../assets/images/set.png';
import logo from '../../assets/images/logos/logo_inbursa_branco.png';
import './Information.css';
import './information-mobile.css';
export default function Information() {
    return (
        <Grid className='adesao-background'>
            <Grid container justifyContent="space-evenly">
                <Grid item sm={4} >
                    <Box className='box-adesao-position-left'>
                        <Typography className='title-section-authorization' variant="p" component="p">
                            COMO AUTORIZAR O BANCO INBURSA Á CONSULTAR O SEU SALDO
                        </Typography>
                        <ul className='list-adesao'>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    Selecione a opção <strong>Empréstimo Saque-Aniversário;</strong>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" component="p" className='set-img'>
                                    <img src={Set} alt="Icon Check" />
                                </Typography>
                                <Typography variant="p" component="p">
                                    E selecione o  <strong>BANCO INBURSA S.A</strong> e finalize.
                                </Typography>
                            </li>
                        </ul>
                        <Typography className='title-section-authorization' variant="p" component="p">
                            E Pronto! Agora é só  contratar o seu empréstimo
                        </Typography>

                        <Typography variant="p" component="p" className='set-img'>
                            <img src={logo} className='img-size-end-white' alt="Logo" />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={7}>
                    <Box className='box-size-center'>
                        <img className='ftgs-img-size' src={img1} alt="Logo Inbursa Branco" />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}