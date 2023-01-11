import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Button } from '@mui/material';
import { validateEmptyFields } from '../../utils/validateUtils';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

import VectorIcon from '../../assets/images/icons/vector.svg';
import ClickDoc from '../../assets/images/click-document.png';
import FrenteImg from '../../assets/images/frente.png';
import VersoImg from '../../assets/images/verso.png';

import './Documento.css';
import './Documento-mobile.css';

export default function Documento() {
    let navigate = useNavigate();

    const [colorRG, setColorRG] = useState(true);
    const [colorCNH, setColorCNH] = useState(false);

    const [frente, setFrente] = useState('');
    const [verso, setVerso] = useState('');

    const ValidateFieldsAndSave = () => {

        const Frente = frente;
        const Verso = verso;
        const Tipo = colorRG ? 'RG' : 'CNH';
        const form = { Frente: Frente, Verso: Verso, Tipo: Tipo };

        if (Frente == '' || Frente == undefined) {
            return alert('Insira a frente do documento.');
        }
        else if (Verso == '' || Verso == undefined) {
            return alert('Insira o verso do documento.');
        }
        else if (Tipo == '' || Tipo == undefined) {
            return alert('Escolha o tipo de documento.');
        }

        if (!validateEmptyFields(form))
            return alert('Obrigatório preencher todos os campos.');

        return true;
    }

    const selected = (index) => {
        if (index === 1) {
            setColorRG(true);
            setColorCNH(false);
        } else if (index === 2) {
            setColorRG(false);
            setColorCNH(true);
        }
    }

    const FotoFrente = (event) => {
        var file = event.target.files[0];
        setFrente(URL.createObjectURL(file));
    }

    const FotoVerso = (event) => {
        var file = event.target.files[0];
        setVerso(URL.createObjectURL(file));
    }

    return (
        <Box>
            <Logo />
            <Container>
                <Grid container justifyContent="center" wrap="nowrap">
                    <Grid item xs={12} sm={12} p={0} textAlign="right">
                        <Box textAlign="center">
                            <Typography className="text-large-document" variant="span" component="span">
                                Informe seu documento
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Box className='flex-list'>
                            <img className='icon-vector' src={VectorIcon} alt="documento" />
                            <ul className='text-list'>
                                <li>A imagem deve ser nitída</li>
                                <li>A imagem deve estar em formato JPEG ou PNG</li>
                                <li>Tire uma foto JPEG ou PNG de até 8MB</li>
                                <li>Caso a foto do documento não esteja nitída,<br /> sua proposta será
                                    recusada e você será informado por e-mail</li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>



                <Box textAlign="center">
                    <Typography className="text-large-document" variant="span" component="span" p={1}>
                        Qual Documento quer usar ?
                    </Typography>
                </Box>

                <Grid container justifyContent="space-between" wrap="nowrap">
                    <Grid item xs={12} sm={6} p={2} textAlign="right">
                        <Button className={colorRG ? 'proposed-button-custom' : 'proposed-button-outline'} onClick={() => { selected(1) }}>RG</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} p={2} textAlign="left">
                        <Button className={colorCNH ? 'proposed-button-custom' : 'proposed-button-outline'} onClick={() => { selected(2) }}>CNH</Button>
                    </Grid>
                </Grid>

                <Box textAlign="center" p={4}>
                    <Typography className="text-large-document-rg-cnh" variant="span" component="span">
                        Faça o upload da sua CNH frente e verso
                    </Typography>
                </Box>

                <Grid container justifyContent="space-between" wrap="nowrap" className='background-green' p={2}>
                    <Grid item xs={12} sm={6} textAlign="right">
                        <label htmlFor="button-file-frente">
                            <Button variant="raised" component="span" >
                                <Box p={2}>
                                    <img src={frente ? frente : FrenteImg} alt="Documento" className='img-size-document' width={200} />
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="button-file-frente"
                                        type="file"
                                        onChange={FotoFrente}
                                    />
                                </Box>
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign="left">
                        <label htmlFor="button-file-verso">
                            <Button variant="raised" component="span" >
                                <Box p={2}>
                                    <img src={verso ? verso : VersoImg} alt="Documento" className='img-size-document' width={200} />
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="button-file-verso"
                                        type="file"
                                        onChange={FotoVerso}
                                    />
                                </Box>
                            </Button>
                        </label>
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
                            navigate('/selfie');
                        }
                    }}>Próximo</Button>
                </Grid>
            </Grid>
        </Box>
    )
}