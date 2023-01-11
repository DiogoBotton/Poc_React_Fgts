import { Box, Grid } from '@mui/material';
import React from 'react';
import inbursaLogo from '../../assets/images/logos/logo_banco.png';
import './Logo.css';

export default function Logo() {
    return (
        <Grid container>
            <Grid item sm={12}>
                <Box>
                    <img className='proposed-img-center proposed-logo' src={inbursaLogo} alt="Logo Inbursa Branco" />
                </Box>
            </Grid>
        </Grid>
    )
}