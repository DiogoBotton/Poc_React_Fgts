import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import './contract.css';
import './contract-mobile.css';

import img1 from '../../assets/images/image21.png';

export default function Contract() {
    return (
        <Grid className='contract-background'>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Box>
                        <Typography className='title-section' textAlign="center" variant="p" component="p">
                            Como contratar
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className='subTitle' textAlign="center" variant="p" component="p">
                            Veja como contratar a antecipação do saque aniversário FGTS
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className='grid-fgts' justifyContent="space-evenly">
                <Grid item>
                    <img src={img1} alt="Img Contract" style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid item sm={4}>
                    <Box className='box-fgts'>
                        <Typography className='option-fgts' textAlign="center" variant="p" component="p">
                            1. No app do FGTS, escolha o Saque Aniversário do FGTS
                        </Typography>
                        <Typography className='option-fgts-sub' textAlign="center" variant="p" component="p">
                            Confira as informações sobre a modalidade e garanta
                            sua opção no Saque Aniversário, aceitando os termos e condições
                        </Typography>
                        <Typography className='download' textAlign="center" variant="p" component="p">
                            Baixe app do FGTS
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}