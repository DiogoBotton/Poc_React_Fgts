import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button } from '@mui/material';
import { validateEmptyFields } from '../../utils/validateUtils';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

import VectorIcon from '../../assets/images/icons/vector.svg';
import SelfieBanco from '../../assets/images/selfie.png';

import './Selfie.css';
import './Selfie-mobile.css';

export default function Selfie() {
    let navigate = useNavigate();
    const [selfie, setSelfie] = useState('');

    const ValidateFieldsAndSave = () => {

        const Selfie = selfie;
        const form = { Selfie: Selfie };

        if (Selfie == '' || Selfie == undefined) {
            return alert('Tire uma foto do seu rosto.');
        }
        if (!validateEmptyFields(form))
            return alert('Obrigatório preencher todos os campos.');

        return true;
    }

    const FotoSelfie = (event) => {
        var file = event.target.files[0];
        setSelfie(URL.createObjectURL(file));
    }


    return (
        <Box>
            <Logo />
            <Container>
                <Grid container justifyContent="center" wrap="nowrap">
                    <Grid item xs={12} sm={12} pb={1} textAlign="right">
                        <Box textAlign="center">
                            <Typography className="text-large-document" variant="span" component="span">
                                Agora tire uma selfie!
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Box className='flex-list'>
                            <img className='icon-vector' src={VectorIcon} alt="documento" />
                            <ul className='text-list'>
                                <li>Clique na imagem abaixo para fazer a foto</li>
                                <li>A foto deve estar nitída</li>
                                <li>A foto deve estar em formato JPEG ou PNG</li>
                                <li>A foto deve ter no máximo 8MB</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container justifyContent="space-between" wrap="nowrap">
                    <Grid item xs={12} sm={12} textAlign="center">
                        <Box>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="button-file-frente"
                                type="file"
                                onChange={FotoSelfie}
                            />
                        </Box>
                        <Box p={1}>
                            <label htmlFor="button-file-frente">
                                <Button variant="raised" component="span" >
                                    <img src={selfie ? selfie : SelfieBanco} alt="CNH" width={300}/>
                                </Button>
                            </label>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={12} sm={6} p={3} textAlign="right">
                    <Button className='proposed-button' onClick={() => { navigate(-1); }}>Anterior</Button>
                </Grid>
                <Grid item xs={12} sm={6} p={3} textAlign="left">
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            navigate('/endereco');
                        }
                    }}>Próximo</Button>
                </Grid>
            </Grid>
        </Box>
    )
}