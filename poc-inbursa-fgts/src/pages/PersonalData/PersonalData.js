import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button, Autocomplete, TextField } from '@mui/material';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { disabledBorderInTextField } from '../../utils/styleUtils';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './PersonalData.css';
import { maskCelular, maskTelefone } from '../../utils/maskUtils';

export default function PersonalData() {
    const options = [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }];
    const [pais, setPais] = useState(options[0]);
    const [uf, setUf] = useState(options[0]);
    const [cidade, setCidade] = useState(options[0]);
    const [sexo, setSexo] = useState(options[0]);
    const [estadoCivil, setEstadoCivil] = useState(options[0]);
    let navigate = useNavigate();

    const validationSchema = yup.object({
        nome: yup.string('Insira seu nome').required('Nome é obrigatório'),
        nascimento: yup.string('Insira sua data de nascimento').required('Data de nascimento é obrigatório'),
        email: yup.string('Insira seu e-mail').email('Insira um e-mail válido').required('E-mail é obrigatório'),
        celular: yup.string('Insira seu número de celular').required('Telefone celular é obrigatório'),
        confirmaCelular: yup.string('Insira a confirmação do seu número de celular').oneOf([yup.ref('celular'), null], 'Os números de celular devem corresponder').required('Confirmar telefone celular é obrigatório'),
    });

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            nome: localStorage.getItem('nome') !== null ? localStorage.getItem('nome') : '',
            nascimento: localStorage.getItem('nascimento') !== null ? localStorage.getItem('nascimento') : '',
            email: localStorage.getItem('email') !== null ? localStorage.getItem('email') : '',
            celular: localStorage.getItem('celular') !== null ? localStorage.getItem('celular') : '',
            confirmaCelular: '',
            telefone: localStorage.getItem('telefone') !== null ? localStorage.getItem('telefone') : '',
        },
        onSubmit: (values) => {
            ValidateFieldsAndSave(values);
        },
    });

    const ValidateFieldsAndSave = (form) => {
        localStorage.setItem('nome', form.nome);
        localStorage.setItem('nascimento', form.nascimento);
        localStorage.setItem('email', form.email);
        localStorage.setItem('celular', form.celular);
        localStorage.setItem('telefone', form.telefone);
        console.log(form)

        navigate('/documento');
    }

    return (
        <Box>
            <Logo />
            <form onSubmit={formik.handleSubmit}>
                <Container>
                    <Box textAlign="left" pb={5}>
                        <Typography className="title-large text-large-left" variant="span" component="span">
                            Informe seus Dados Pessoais
                        </Typography>
                    </Box>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Nome*
                                </Typography>
                                <TextField
                                    id="nome"
                                    name="nome"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.nome}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                                    helperText={formik.touched.nome && formik.errors.nome}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container p={2}>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Data de nascimento*
                                </Typography>
                                <TextField
                                    id="nascimento"
                                    name="nascimento"
                                    type="date"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.nascimento}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nascimento && Boolean(formik.errors.nascimento)}
                                    helperText={formik.touched.nascimento && formik.errors.nascimento}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Estado Civil*
                                </Typography>
                                <Autocomplete
                                    value={estadoCivil}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => option.value === value.value}
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                        setEstadoCivil(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        console.log(newInputValue);
                                    }}
                                    options={options}
                                    renderInput={(params) => <TextField sx={disabledBorderInTextField} variant="standard" className='proposed-input-custom' {...params} />}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={8} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    E-mail pessoal*
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
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Sexo*
                                </Typography>
                                <Autocomplete
                                    value={sexo}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => option.value === value.value}
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                        setSexo(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        console.log(newInputValue);
                                    }}
                                    options={options}
                                    renderInput={(params) => <TextField sx={disabledBorderInTextField} variant="standard" className='proposed-input-custom' {...params} />}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Telefone celular*
                                </Typography>
                                <TextField
                                    id="celular"
                                    name="celular"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={maskCelular(formik.values.celular)}
                                    onChange={formik.handleChange}
                                    error={formik.touched.celular && Boolean(formik.errors.celular)}
                                    helperText={formik.touched.celular && formik.errors.celular}
                                    inputProps={{ maxLength: 17 }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Confirme o telefone celular*
                                </Typography>
                                <TextField
                                    id="confirmaCelular"
                                    name="confirmaCelular"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={maskCelular(formik.values.confirmaCelular)}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirmaCelular && Boolean(formik.errors.confirmaCelular)}
                                    helperText={formik.touched.confirmaCelular && formik.errors.confirmaCelular}
                                    inputProps={{ maxLength: 17 }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Telefone residencial
                                </Typography>
                                <TextField
                                    id="telefone"
                                    name="telefone"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={maskTelefone(formik.values.telefone)}
                                    onChange={formik.handleChange}
                                    error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                                    helperText={formik.touched.telefone && formik.errors.telefone}
                                    inputProps={{ maxLength: 16 }}
                                />
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid container p={2}>
                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Box textAlign="left" pb={1}>
                                <Typography className="title-large-sub" variant="span" component="span">
                                    Naturalidade
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid container p={2}>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    País*
                                </Typography>
                                <Autocomplete
                                    value={pais}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => option.value === value.value}
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                        setPais(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        console.log(newInputValue);
                                    }}
                                    options={options}
                                    renderInput={(params) => <TextField sx={disabledBorderInTextField} variant="standard" className='proposed-input-custom' {...params} />}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    UF*
                                </Typography>
                                <Autocomplete
                                    value={uf}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => option.value === value.value}
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                        setUf(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        console.log(newInputValue);
                                    }}
                                    options={options}
                                    renderInput={(params) => <TextField sx={disabledBorderInTextField} variant="standard" className='proposed-input-custom' {...params} />}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container p={2}>
                        <Grid item xs={12} sm={8} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                    Cidade*
                                </Typography>
                                <Autocomplete
                                    value={cidade}
                                    getOptionLabel={(option) => option.name}
                                    isOptionEqualToValue={(option, value) => option.value === value.value}
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                        setCidade(newValue);
                                    }}
                                    onInputChange={(event, newInputValue) => {
                                        console.log(newInputValue);
                                    }}
                                    options={options}
                                    renderInput={(params) => <TextField sx={disabledBorderInTextField} variant="standard" className='proposed-input-custom' {...params} />}
                                />
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
                        <Button className='proposed-button' type="submit" onClick={() => {
                           
                        }}>
                            Contratar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}