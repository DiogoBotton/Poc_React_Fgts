import React, { useState } from 'react';
import { Typography, Box, Input, Container, Grid, Button } from '@mui/material';
import { maskCurrency } from '../../utils/maskUtils';
import { validateEmptyFields } from '../../utils/validateUtils';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

export default function LoginSalarioBruto() {
    const [salario, setSalario] = useState("");
    let navigate = useNavigate();

    const ValidateFieldsAndSave = () => {
        const email = localStorage.getItem('email-login');
        const cpf = localStorage.getItem('cpf-login');

        let form = {
            cpf: cpf,
            email: email,
            salarioBruto: salario
        };

        if (!validateEmptyFields(form))
            return alert('Obrigatório preencher todos os campos.');

        return true;
    }

    return (
        <Box>
            <Logo />
            <Container>
                <Box textAlign="center" pb={5}>
                    <Typography className="title-large" variant="span" component="span">
                        Por favor, informe seu Salário Bruto
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                        Digite seu salário bruto*
                    </Typography>
                    <Input type='text' className='proposed-input' placeholder="Seu salário bruto" disableUnderline value={salario} onChange={(x) => { setSalario(maskCurrency(x.target.value)) }} />
                </Box>
            </Container>
            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        navigate(-1);
                    }}>Anterior</Button>
                </Grid>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            navigate('/saque-aniversario');
                        }
                    }}>Contratar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}