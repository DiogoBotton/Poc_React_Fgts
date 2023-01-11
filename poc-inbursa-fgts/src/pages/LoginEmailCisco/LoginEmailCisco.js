import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Input, Tab, Container, Grid, Button } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { validateEmptyFields, validCharacters } from '../../utils/validateUtils';
import Logo from '../../components/Logo/Logo';

export default function LoginEmailCisco() {
    const [tabIndex, setTabIndex] = useState("1");
    const [email, setEmail] = useState("");
    const [tk_1, setTk_1] = useState("");
    const [tk_2, setTk_2] = useState("");
    const [tk_3, setTk_3] = useState("");
    const [tk_4, setTk_4] = useState("");
    const [tk_5, setTk_5] = useState("");
    const [tk_6, setTk_6] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        let emailStorage = localStorage.getItem('email-login');
        emailStorage != null ? setEmail(emailStorage) : setEmail("");
    }, []);

    useEffect(() => {
        let token = tk_1 + tk_2 + tk_3 + tk_4 + tk_5 + tk_6;
        if (token && token.length === 6) ValidateToken(token);
    }, [tk_1, tk_2, tk_3, tk_4, tk_5, tk_6]);

    const handleTokenDigit = useCallback((event) => {
        if (event.target.nodeName === 'INPUT') {
            var form = event.target.form;
            var index = Array.prototype.indexOf.call(form, event.target);
            if ((event.key === 'Backspace' || event.key === 'Delete')) {
                if (index > 0)
                    form.elements[index - 1].focus();
            }
            else {
                if (index <= 5 && validCharacters().includes(event.key) && event.target.value) {
                    form.elements[index >= 5 ? index : index + 1].focus();
                }
            }
        }
    }, []);

    const ValidateFieldsAndSave = () => {
        if (!validateEmptyFields(email))
            return alert('Obrigatório preencher o campo e-mail.');

        localStorage.setItem('email-login', email);

        return true;
    }

    const ValidateToken = (token) => {
        console.log(token);
    }

    return (
        <Box>
            <Logo />
            <TabContext value={tabIndex}>
                <TabList sx={{ visibility: 'hidden' }}>
                    <Tab value="1" />
                    <Tab value="2" />
                </TabList>
                <TabPanel value="1">
                    <Container>
                        <Box textAlign="center" pb={5}>
                            <Typography className="title-large" variant="span" component="span">
                                Por favor, informe seu e-mail
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <Typography pb={1} variant="p" component="p" className='proposed-input-title'>
                                Informe seu e-mail*
                            </Typography>
                            <Input type='email' className='proposed-input' placeholder="Seu e-mail" disableUnderline value={email} onChange={(x) => { setEmail(x.target.value) }} />
                        </Box>
                    </Container>
                </TabPanel>
                <TabPanel value="2">
                    <Container>
                        <Box textAlign="center" pb={5}>
                            <Typography className="title-large" variant="span" component="span">
                                Enviamos um token via e-mail:
                            </Typography>
                        </Box>
                        <Box textAlign="center">
                            <form>
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_1} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_1(e.target.value) }} />
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_2} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_2(e.target.value) }} />
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_3} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_3(e.target.value) }} />
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_4} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_4(e.target.value) }} />
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_5} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_5(e.target.value) }} />
                                <Input className="proposed-input-token" disableUnderline inputProps={{ maxLength: 1 }} value={tk_6} onFocus={(e) => e.target.select()} onChange={(e) => { setTk_6(e.target.value) }} />
                            </form>
                        </Box>
                    </Container>
                </TabPanel>
            </TabContext>
            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        window.removeEventListener('keyup', handleTokenDigit);
                        if (tabIndex === "1") navigate(-1);
                        else setTabIndex((parseInt(tabIndex) - 1).toString());
                    }}>Anterior</Button>
                </Grid>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            if (parseInt(tabIndex) < 2) {
                                setTabIndex((parseInt(tabIndex) + 1).toString());
                                window.addEventListener('keyup', handleTokenDigit);
                            }
                            else {
                                window.removeEventListener('keyup', handleTokenDigit);
                                navigate('/contratar');
                            }
                        }
                    }}>Próximo</Button>
                </Grid>
            </Grid>
        </Box>
    )
}