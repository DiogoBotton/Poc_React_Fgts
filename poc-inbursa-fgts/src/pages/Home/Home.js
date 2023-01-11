import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { themes } from '../../utils/styleUtils';
import './Home.css';

//Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomeHeader from "./HomeHeader";
import HomeCardVantagens from "./HomeCardVantagens";
import HomeSobreAntecipacao from './HomeSobreAntecipacao';
import HomeFAQAccordion from './HomeFAQAccordion';
import HomeCondicoes from './HomeCondicoes';
import HomeCardComoFunciona from './HomeCardComoFunciona';

import HomeComoContratar from '../Home/HomeComoContratar';

export default function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 992);
        }, false);
    }, []);

    return (
        <div>
            <Header />
            <HomeHeader />
            <Box textAlign="center" pb={1} pt={8}>
                <Typography className="title-home strong">
                    Vantagens de antecipar
                </Typography>
                <Typography variant="subtitle1" color={themes.colors.primaryBlue} pb={1}>
                    Saiba as vantagens da antecipação do saque aniversário com o Banco Inbursa.
                </Typography>

                <HomeCardVantagens />
            </Box>

            <HomeSobreAntecipacao />

            <Box textAlign="center" pb={1} pt={8}>
                <Typography className="title-home strong">
                    Perguntas frequentes
                </Typography>
                <Typography variant="subtitle1" color={themes.colors.primaryBlue} pb={1}>
                    Veja algumas das perguntas mais frequentes para o saque aniversário
                </Typography>

                <HomeFAQAccordion />
            </Box>

            <Box className="bg-img-home">
                <Box className="bg-img-color" textAlign="center">
                    <Button className="button-contained-white button-contained-white-bar" href="/login">{isMobile ? "Quero antecipar!" : "Quero antecipar meu saque aniversário"}</Button>
                </Box>
            </Box>

            <Box maxWidth="80%" margin="auto" textAlign="center" pb={1} pt={5}>
                <Typography className="title-home strong">
                    Como funciona a Antecipação do Saque Aniversário FGTS?
                </Typography>
                <Typography variant="subtitle1" color={themes.colors.text} pb={1} pt={2}>
                    Toda pessoa que trabalha ou já trabalhou com carteira assinada pode aderir à modalidade de Saque Aniversário FGTS.
                    Nessa opção, no mês do seu aniversário, você vai receber uma parcela do seu FGTS, em conformidade com o valor estabelecido na Lei 8.036/1990.
                </Typography>
            </Box>

            <Box textAlign="center" pb={1} pt={5}>
                <Typography className="subtitle-home strong">
                    Entenda como funciona:
                </Typography>

                <HomeCardComoFunciona />
            </Box>
            
            <HomeComoContratar />

            <Box textAlign="center" pb={5} pt={5}>
                <Typography className="title-home strong" maxWidth="80%" margin="auto">
                    Saiba todas as condições para contratar a Antecipação do saque aniversário FGTS
                </Typography>
                <Typography variant="subtitle1" color={themes.colors.primaryBlue} pb={1}>
                    Antecipação do saque aniversário FGTS
                </Typography>

                <HomeCondicoes />
            </Box>

            <Footer />
        </div>
    )
}