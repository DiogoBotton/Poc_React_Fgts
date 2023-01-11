import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button, Typography, Box, Grid } from '@mui/material';
import VectorIcon from '../../assets/images/icons/vector.svg';
import Logo from '../../components/Logo/Logo';

import './Proposed.css';

export default function Proposta() {
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
                                    ATENÇÃO! Cuidado com fraudes! Não solicitamos depósito antecipado de empréstimo ou devolução de valores.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box pb={2} className='proposed-flex-item'>
                                <Typography className='resume-proposed' textAlign="center" variant="p" component="p">
                                   Resumo da Proposta
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                   

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={3}>
                            <Box className='border-custom-proposed' textAlign="center">
                                <Typography variant="p" component="p">
                                    Valor liberado
                                </Typography>
                                <Typography variant="p" component="p">
                                    R$ 4.300,75
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box className='border-custom-proposed' textAlign="center">
                                <Typography variant="p" component="p">
                                    Saque Antecipados
                                </Typography>
                                <Typography variant="p" component="p">
                                    3 anos
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                   
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-custom-proposed-flex-saque' >
                                <Typography variant="p" component="p">
                                    Saque Antecipados: 
                                </Typography>
                                <Typography variant="p" component="p" className='box-text'>
                                    28/07/2021
                                </Typography>
                            </Box>
                        </Grid>     
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-custom-proposed-flex' >
                                <Typography variant="p" component="p">
                                    Taxa de Juros
                                </Typography>
                                <Typography variant="p" component="p">
                                    1,49% a.m
                                </Typography>
                            </Box>
                        </Grid>     
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-custom-proposed-flex' >
                                <Typography variant="p" component="p">
                                    CET
                                </Typography>
                                <Typography variant="p" component="p">
                                    21,42%
                                </Typography>
                            </Box>
                        </Grid>     
                    </Grid>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Box className='border-custom-proposed-flex' >
                                <Typography variant="p" component="p">
                                    Total com IOF
                                </Typography>
                                <Typography variant="p" component="p">
                                    R$ 5.843,95
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
                            navigate('/credito-banco')
                        }
                    }}>Contratar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}