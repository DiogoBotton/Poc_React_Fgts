import React, { useEffect, useState } from 'react';
import { Typography, Box, Container, Grid, Button, Checkbox, Pagination } from '@mui/material';
import Logo from '../../components/Logo/Logo';
import { useNavigate } from 'react-router-dom';

import './SaqueAniversario.css'
import img from '../../assets/images/Vector.png';

export default function SaqueAniversario() {
    const [saque, setSaque] = useState([]);
    const [_PAGE_SIZE, SET_PAGE_SIZE] = useState(0);
    const [Choose, SetChoose] = useState([]);
    const [checkedTerms, setcheckedTerms] = useState(false);
    const _DEFAULT_VALUE_PAGE = 4;

    let _InitsizePage = 0;
    let _EndsizePage = _DEFAULT_VALUE_PAGE;
    let navigate = useNavigate();

    const itens = [
        { Id: 1, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 2.080,32' },
        { Id: 2, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 3.080,32' },
        { Id: 3, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 4.080,32' },
        { Id: 4, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 5.080,32' },
        { Id: 5, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 6.080,32' },
        { Id: 6, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 7.080,32' },
        { Id: 7, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 8.080,32' },
        { Id: 8, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 9.080,32' },
        { Id: 9, Date: '01/01/2022', TxValue: 'R$ 2.285, 85 Taxa de 1,49% a.m', Value: 'R$ 9.080,32' }
    ];

    useEffect(() => {
        setSaque(itens.slice(_InitsizePage, _EndsizePage));
        SET_PAGE_SIZE(Math.ceil(itens.length / _DEFAULT_VALUE_PAGE));
    }, []);

    const ValidateFieldsAndSave = () => {
        if (Choose.length <= 0) {
            alert("Obrigatório escolher um modelo de saque aniversário!");
            return false;
        }
        else if (!checkedTerms) {
            alert("Obrigatório aceitar Termos e Condições!");
            return false;
        }
        
        return true;
    }

    function CheckedItem(item) {
        return (
            <Grid item xs={12} sm={3} pl={1} pr={1} textAlign="center">
                <Box className='box-flex background-blue' >
                    <Box className='text-left text-date-blue'>
                        {item.Date}
                    </Box>
                    <Box className='text-left'>
                        <Box className='text-value-blue'>Valor Disponível na Caixa: {item.TxValue}</Box>
                        <Box className='text-sub-value-blue'>Valor Disponível Saque: {item.Value}</Box>
                    </Box>
                    <Box className='text-left'>
                        <img src={img} />
                    </Box>
                </Box>
            </Grid>
        )
    }

    function UnCheckedItem(item) {
        return (
            <Grid item xs={12} sm={3} pl={1} pr={1} textAlign="center">
                <Box className='box-flex background-white' >
                    <Box className='text-left text-date'>
                        {item.Date}
                    </Box>
                    <Box className='text-left'>
                        <Box className='text-value'>Valor Disponível na Caixa: {item.TxValue}</Box>
                        <Box className='text-sub-value'>Valor Disponível Saque: {item.Value}</Box>
                    </Box>
                    <Box className='text-left'>
                        <img src={img} />
                    </Box>
                </Box>
            </Grid>
        )
    }

    const OptionsSelected = (id) => {
        const index = Choose.indexOf(id);

        if (index >= 0) {
            SetChoose(Choose.filter(x => x != id));
        }
        else {
            SetChoose(x => x.concat(id));
        }
    }

    const handleChangePage = (element) => {
        const pageCurrent = parseInt(element.target.textContent);
        const _EndsizePage = _DEFAULT_VALUE_PAGE * pageCurrent;
        const _InitsizePage = (_EndsizePage - _DEFAULT_VALUE_PAGE);
        const slicedArray = itens.slice(_InitsizePage, _EndsizePage);

        setSaque(slicedArray);
    }

    function CurrentSelected(item) {
        const temp = Choose.filter(x => x == item.Id);

        if (temp.length > 0) {
            return (CheckedItem(item));
        } else {
            return (UnCheckedItem(item));
        }
    }

    function CheckedTerms(element) {
        setcheckedTerms(element.target.checked);
    }

    return (
        <Box>
            <Logo />
            <Container>
                <Box textAlign="center" pb={3}>
                    <Typography className="title-large" variant="span" component="span">
                        Faça a simulação do seu Saque Aniversário
                    </Typography>
                </Box>
                <Box textAlign="center" pb={1}>
                    <Typography className="saque-text-selected" variant="span" component="span">
                        Selecione a oferta ideal para você
                    </Typography>
                </Box>
            </Container>

            {
                saque.map((item) =>
                    <Grid container className='flex-center' onClick={() => { OptionsSelected(item.Id) }} key={item.Id}>{CurrentSelected(item)}</Grid>
                )
            }

            <Box className='flex-center' p={5}>
                <Pagination count={(_PAGE_SIZE)} hidePrevButton hideNextButton onClick={handleChangePage} variant="outlined" color="primary" />
            </Box>

            <Box className='flex-center'>
                <Checkbox onChange={(x) => CheckedTerms(x)} />
                <Box className='text-position-saque'>
                    <Typography className="text-aceite" variant="span" component="span">Li e aceito os</Typography>
                    <Typography className="text-aceite-sub" variant="span" component="span"> Termos e Condições</Typography>
                </Box>
            </Box>

            <Grid container justifyContent="space-between" wrap="nowrap" p={5}>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        navigate(-1);
                    }}>Anterior</Button>
                </Grid>
                <Grid item xs={6} sm={6} p={2} textAlign="center">
                    <Button className='proposed-button' onClick={() => {
                        if (ValidateFieldsAndSave()) {
                            navigate('/dados-pessoais');
                        }
                    }}>Contratar</Button>
                </Grid>
            </Grid>
        </Box>
    )
}