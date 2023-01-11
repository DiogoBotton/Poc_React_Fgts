import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { themes } from '../../utils/styleUtils';
import HeaderImage from '../../assets/images/header-image.png';
import './Home.css';

export default function HomeHeader() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 992);
        }, false);
    }, []);

    return (
        <Box style={{ backgroundColor: themes.colors.lightGrayBackground, borderRadius: "5em" }}>
            <Grid container spacing={2} columns={12}>
                <Grid container item sm={6} display="flex" justifyContent="center" alignItems="center" direction="column" textAlign="center">
                    <Typography variant="subtitle1" color={themes.colors.primaryBlue} pb={1}>
                        #saqueaniversarionaInbursa
                    </Typography>
                    <Typography className="title-home strong title-home-header" pb={1}>
                        Antecipação Saque Aniversário FGTS
                    </Typography>
                    <Typography variant="caption" color={themes.colors.text} fontSize={16} pb={1}>
                        Antecipe até 7 parcelas anuais do seu saque aniversário.
                        Simule e descubra quanto você pode liberar imediatamente do seu FGTS.
                    </Typography>
                    {!isMobile && <Button className="button-header-home" href="/login">SIMULAR AGORA!</Button>}
                </Grid>
                <Grid item sm={6}>
                    <img src={HeaderImage} alt="Mulher segurando um celular" style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
            </Grid>
        </Box>
    );
}