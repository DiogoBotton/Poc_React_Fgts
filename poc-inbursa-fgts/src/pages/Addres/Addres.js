import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button, Autocomplete, TextField, Checkbox } from '@mui/material';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';
import { disabledBorderInTextField } from '../../utils/styleUtils';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { maskCep } from '../../utils/maskUtils';
export default function Addres() {
    const options = [{ id: 1, name: 'Option 1' }, { id: 2, name: 'Option 2' }];
    const [uf, setUf] = useState(localStorage.getItem('uf') !== null ? JSON.parse(localStorage.getItem('uf')) : options[0]);
    const [checkedTerms, setcheckedTerms] = useState(false);
    let navigate = useNavigate();

    const validationSchema = yup.object({
        endereco: yup.string('Insira seu endereço').required('Endereço é obrigatório'),
        numero: yup.string('Insira sua data de número').required('Número é obrigatório'),
        complemento: yup.string('Insira seu complemento').required('Complemento é obrigatório'),
        cep: yup.string('Insira seu cep').required('Cep é obrigatório'),
        bairro: yup.string('Insira seu bairro').required('Bairro é obrigatório'),
        cidade: yup.string('Insira seu cidade').required('Cidade é obrigatório'),
    });

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            endereco: localStorage.getItem('endereco') !== null ? localStorage.getItem('endereco') : '',
            numero: localStorage.getItem('numero') !== null ? localStorage.getItem('numero') : '',
            complemento: localStorage.getItem('complemento') !== null ? localStorage.getItem('complemento') : '',
            cep: localStorage.getItem('cep') !== null ? localStorage.getItem('cep') : '',
            bairro: localStorage.getItem('bairro') !== null ? localStorage.getItem('bairro') : '',
            cidade: localStorage.getItem('cidade') !== null ? localStorage.getItem('cidade') : '',
        },
        onSubmit: (values) => {
            ValidateFieldsAndSave(values);
        },
    });

    const ValidateFieldsAndSave = (form) => {
        localStorage.setItem('endereco', form.endereco);
        localStorage.setItem('numero', form.numero);
        localStorage.setItem('complemento', form.complemento);
        localStorage.setItem('cep', form.cep);
        localStorage.setItem('bairro', form.bairro);
        localStorage.setItem('uf', JSON.stringify(uf));
        localStorage.setItem('cidade', form.cidade);
        console.log(form)

        if (!checkedTerms) {
            return alert("Obrigatório aceitar Termos e Condições!");
        }

        navigate('/dados-profissionais');
    }

    const CheckedTerms = (element) => {
        setcheckedTerms(element.target.checked);
    }

    return (
        <Box>
            <Logo />
            <form onSubmit={formik.handleSubmit}>
                <Container>
                    <Box textAlign="left" pb={5}>
                        <Typography className="title-large text-large-left" variant="span" component="span">
                            Informe seu Endereço
                        </Typography>
                    </Box>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={12} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Endereço*
                                </Typography>
                                <TextField
                                    id="endereco"
                                    name="endereco"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.endereco}
                                    onChange={formik.handleChange}
                                    error={formik.touched.endereco && Boolean(formik.errors.endereco)}
                                    helperText={formik.touched.endereco && formik.errors.endereco}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container p={2}>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Número*
                                </Typography>
                                <TextField
                                    id="numero"
                                    name="numero"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.numero}
                                    onChange={formik.handleChange}
                                    error={formik.touched.numero && Boolean(formik.errors.numero)}
                                    helperText={formik.touched.numero && formik.errors.numero}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Complemento*
                                </Typography>
                                <TextField
                                    id="complemento"
                                    name="complemento"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.complemento}
                                    onChange={formik.handleChange}
                                    error={formik.touched.complemento && Boolean(formik.errors.complemento)}
                                    helperText={formik.touched.complemento && formik.errors.complemento}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    CEP*
                                </Typography>
                                <TextField
                                    id="cep"
                                    name="cep"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={maskCep(formik.values.cep)}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                                    helperText={formik.touched.cep && formik.errors.cep}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Bairro*
                                </Typography>
                                <TextField
                                    id="bairro"
                                    name="bairro"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.bairro}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                                    helperText={formik.touched.bairro && formik.errors.bairro}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container p={2}>
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
                        <Grid item xs={12} sm={4} p={1} textAlign="center">
                            <Box textAlign="left">
                                <Typography pb={1} variant="p" component="p" className='proposed-input-title-custom'>
                                    Cidade*
                                </Typography>
                                <TextField
                                    id="cidade"
                                    name="cidade"
                                    className='proposed-input-custom'
                                    variant="standard"
                                    sx={disabledBorderInTextField}
                                    value={formik.values.cidade}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cidade && Boolean(formik.errors.cidade)}
                                    helperText={formik.touched.cidade && formik.errors.cidade}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container p={2}>
                        <Grid item xs={12} sm={8} p={1} textAlign="center">
                            <Box className='flex-center'>
                                <Checkbox onChange={(x) => CheckedTerms(x)} />
                                <Box className='text-position-saque'>
                                    <Typography className="text-aceite-sub" variant="span" component="span"> Desejo receber minhas correspondências via e-mail</Typography>
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
                        <Button className='proposed-button' type="submit" onClick={() => {}}>
                            Próximo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box >
    )
}