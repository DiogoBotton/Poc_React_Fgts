import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Grid, Button, TextField } from '@mui/material';
import { disabledBorderInTextField } from '../../utils/styleUtils';
import { useFormik } from 'formik';
import * as yup from 'yup';

import VectorIcon from '../../assets/images/icons/vector.svg';
import Logo from '../../components/Logo/Logo';

export default function CreditBank() {
    let navigate = useNavigate();
    useEffect(() => {

    }, []);

    const validationSchema = yup.object({
        nomeConfirmed: yup.string('Insira seu endereço').required('Nome é obrigatório'),
        cpfConfirmed: yup.string('Insira seu cpf').required('CPF é obrigatório'),
        nascimentoConfirmed: yup.string('Insira sua Data de nascimento').required('Data de nascimento é obrigatório')
    });

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            nomeConfirmed: localStorage.getItem('nomeConfirmed') !== null ? localStorage.getItem('nomeConfirmed') : '',
            cpfConfirmed: localStorage.getItem('cpfConfirmed') !== null ? localStorage.getItem('cpfConfirmed') : '',
            nascimentoConfirmed: localStorage.getItem('nascimentoConfirmed') !== null ? localStorage.getItem('nascimentoConfirmed') : '',
        },
        onSubmit: (values) => {
            ValidateFieldsAndSave(values);
        },
    });

    const ValidateFieldsAndSave = (form) => {
        localStorage.setItem('nomeConfirmed', form.nomeConfirmed);
        localStorage.setItem('cpfConfirmed', form.cpfConfirmed);
        localStorage.setItem('nascimentoConfirmed', form.nascimentoConfirmed);
        console.log(form);

        navigate('/finalizado')
    }

    return (
        <Box>
            <Logo />
            <form onSubmit={formik.handleSubmit}>
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
                                        Confirme seus dados
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} p={1} textAlign="center">
                                <Box textAlign="left">
                                    <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                        Nome*
                                    </Typography>
                                    <TextField
                                        id="nomeConfirmed"
                                        name="nomeConfirmed"
                                        className='proposed-input-custom'
                                        variant="standard"
                                        sx={disabledBorderInTextField}
                                        value={formik.values.nomeConfirmed}
                                        onChange={formik.handleChange}
                                        error={formik.touched.nomeConfirmed && Boolean(formik.errors.nomeConfirmed)}
                                        helperText={formik.touched.nomeConfirmed && formik.errors.nomeConfirmed}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} p={1} textAlign="center">
                                <Box textAlign="left">
                                    <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                        CPF*
                                    </Typography>
                                    <TextField
                                        id="cpfConfirmed"
                                        name="cpfConfirmed"
                                        className='proposed-input-custom'
                                        variant="standard"
                                        sx={disabledBorderInTextField}
                                        value={formik.values.cpfConfirmed}
                                        onChange={formik.handleChange}
                                        inputProps={{ maxLength: 14 }}
                                        error={formik.touched.cpfConfirmed && Boolean(formik.errors.cpfConfirmed)}
                                        helperText={formik.touched.cpfConfirmed && formik.errors.cpfConfirmed}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={6} p={1} textAlign="center">
                                <Box textAlign="left">
                                    <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                        Data de nascimento (DD/MM/AAAA)
                                    </Typography>
                                    <TextField
                                        id="nascimentoConfirmed"
                                        name="nascimentoConfirmed"
                                        className='proposed-input-custom'
                                        variant="standard"
                                        type="date"
                                        sx={disabledBorderInTextField}
                                        value={formik.values.nascimentoConfirmed}
                                        onChange={formik.handleChange}
                                        error={formik.touched.nascimentoConfirmed && Boolean(formik.errors.nascimentoConfirmed)}
                                        helperText={formik.touched.nascimentoConfirmed && formik.errors.nascimentoConfirmed}
                                    />
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
                        <Button className='proposed-button' type='submit'>Confirmar</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}