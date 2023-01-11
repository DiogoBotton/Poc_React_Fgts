import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button, TextField, Checkbox } from '@mui/material';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { disabledBorderInTextField } from '../../utils/styleUtils';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './Employee.css';
import './Employee-mobile.css';

export default function Addres() {
    let navigate = useNavigate();

    const validationSchema = yup.object({
        cargo: yup.string('Insira seu cargo').required('Endereço é obrigatório'),
        telefone: yup.string('Insira seu telefone').required('Telefone é obrigatório'),
        email: yup.string('Insira seu e-mail').email('Insira um e-mail válido').required('E-mail é obrigatório'),
        banco: yup.string('Insira seu banco').required('Banco é obrigatório'),
        agencia: yup.string('Insira sua agencia').required('Agência é obrigatório'),
        conta: yup.string('Insira sua conta').required('Conta é obrigatório'),
        digito: yup.string('Insira o dígito').required('Dígito é obrigatório'),
    });

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            cargo: localStorage.getItem('cargo') !== null ? localStorage.getItem('cargo') : '',
            telefone: localStorage.getItem('telefone') !== null ? localStorage.getItem('telefone') : '',
            email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
            banco: localStorage.getItem('banco') !== null ? localStorage.getItem('banco') : '',
            agencia: localStorage.getItem('agencia') !== null ? localStorage.getItem('agencia') : '',
            conta: localStorage.getItem('conta') !== null ? localStorage.getItem('conta') : '',
            digito: localStorage.getItem('digito') !== null ? localStorage.getItem('digito') : '',
        },
        onSubmit: (values) => {
            ValidateFieldsAndSave(values);
        },
    });

    const ValidateFieldsAndSave = (form) => {
        localStorage.setItem('cargo', form.cargo);
        localStorage.setItem('telefone', form.telefone);
        localStorage.setItem('email', form.email);
        localStorage.setItem('banco', form.banco);
        localStorage.setItem('agencia', form.agencia);
        localStorage.setItem('conta', form.conta);
        localStorage.setItem('digito', form.digito);
        console.log(form)

        navigate('/proposta')
    }

    const [Poupanca, setPoupanca] = useState(false);
    const [CidadaoEUA, setCidadacaoEUA] = useState(false);
    const [Exposto, setExposto] = useState(false);
    const [Pep, setPep] = useState(false);

    const checkedPoupanca = (element) => {
        setPoupanca(element.target.checked);
    }
    const checkedCidadacaoEUA = (element) => {
        setCidadacaoEUA(element.target.checked);
    }

    const checkedExposto = (element) => {
        setExposto(element.target.checked);
    }

    const checkedPep = (element) => {
        setPep(element.target.checked);
    }


    return (
        <Box>
            <Logo />
            <form onSubmit={formik.handleSubmit}>
                <Container>
                    <Box textAlign="left" pb={5}>
                        <Typography className="title-large text-large-left" variant="span" component="span">
                            Informe seu Dados Profissionais e Bancários
                        </Typography>
                    </Box>


                    <Grid container p={2}>
                        <Grid item xs={12} sm={6} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Cargo*
                                </Typography>
                                <TextField
                                    id="cargo"
                                    name="cargo"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.cargo}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cargo && Boolean(formik.errors.cargo)}
                                    helperText={formik.touched.cargo && formik.errors.cargo}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Telefone comercial*
                                </Typography>
                                <TextField
                                    id="telefone"
                                    name="telefone"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.telefone}
                                    onChange={formik.handleChange}
                                    error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                                    helperText={formik.touched.telefone && formik.errors.telefone}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    E-mail profissional*
                                </Typography>
                                <TextField
                                    id="email"
                                    name="email"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Dados Bancários
                                </Typography>
                                Insira uma conta corrente que esteja em seu nome
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Banco*
                                </Typography>
                                <TextField
                                    id="banco"
                                    name="banco"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.banco}
                                    onChange={formik.handleChange}
                                    error={formik.touched.banco && Boolean(formik.errors.banco)}
                                    helperText={formik.touched.banco && formik.errors.banco}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Agência*
                                </Typography>
                                <TextField
                                    id="agencia"
                                    name="agencia"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.agencia}
                                    onChange={formik.handleChange}
                                    error={formik.touched.agencia && Boolean(formik.errors.agencia)}
                                    helperText={formik.touched.agencia && formik.errors.agencia}
                                />
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={3} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Conta*
                                </Typography>
                                <TextField
                                    id="conta"
                                    name="conta"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.conta}
                                    onChange={formik.handleChange}
                                    error={formik.touched.conta && Boolean(formik.errors.conta)}
                                    helperText={formik.touched.conta && formik.errors.conta}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Dígito*
                                </Typography>
                                <TextField
                                    id="digito"
                                    name="digito"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.digito}
                                    onChange={formik.handleChange}
                                    error={formik.touched.digito && Boolean(formik.errors.digito)}
                                    helperText={formik.touched.digito && formik.errors.digito}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} p={0} textAlign="left">
                            <Box className='flex-center-addres'>
                                <Checkbox value={Poupanca} onChange={(x) => checkedPoupanca(x)} sx={{ color: '#17335E',  '&.Mui-checked': { color: '#17335E',}}} />
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-sub" variant="span" component="span"> Minha conta é poupança</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Informações adicionais
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} p={0} textAlign="left">
                            <Box className='flex-center-addres'>
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-checked" variant="p" component="p"> Sou cidadão Norte-Americano(EUA)?</Typography>
                                </Box>
                               <Checkbox value={CidadaoEUA} onChange={(x) => checkedCidadacaoEUA(x)} sx={{ color: '#17335E',  '&.Mui-checked': { color: '#17335E',}}} />
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-sub" variant="span" component="span"> Sim</Typography>
                                </Box>
                            </Box>
                            <Box className='flex-center-addres'>
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-checked" variant="p" component="p"> Tenho relacionamento com pessoa politicamente exposta?</Typography>
                                </Box>
                                <Checkbox value={Exposto} onChange={(x) => checkedExposto(x)} sx={{ color: '#17335E',  '&.Mui-checked': { color: '#17335E',}}} />
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-sub" variant="span" component="span"> Sim</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={0} textAlign="left">
                            <Box className='flex-center-addres'>
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-checked-right" variant="p" component="p"> Sou Pessoa Politicamente Exposta (PEP)?</Typography>
                                </Box>
                                <Checkbox value={Pep} onChange={(x) => checkedPep(x)} sx={{ color: '#17335E',  '&.Mui-checked': { color: '#17335E',}}} />
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-sub" variant="span" component="span"> Sim</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>

                <Grid container p={5}>
                    <Grid item xs={6} sm={6} p={2} textAlign="center">
                        <Button className='proposed-button' onClick={() => {
                            navigate(-1);
                        }}>Anterior</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} p={2} textAlign="center">
                        <Button className='proposed-button' type="submit" onClick={() => { }}>
                            Próximo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}