import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Button, Typography, Link, Box, Grid, Divider, IconButton } from '@mui/material';
import {
  Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, YouTube as YoutubeIcon,
  LinkedIn as LinkedinIcon
} from '@mui/icons-material';
import inbursaLogo from '../../assets/images/logos/logo_inbursa_branco.png';
import { themes } from '../../utils/styleUtils';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth <= 992);
    }, false);
  }, []);

  return (
    <footer>
      <Box
        textAlign="center"
        pt={{ xs: 5, sm: 5 }}
        pb={{ xs: 5, sm: 5 }}
        bgcolor={themes.colors.secondaryBlue}
        color="white"
        borderBottom={1}
      >
        <Button className="button-contained-white button-contained-white-footer" href="/login">Quero fazer uma simulação!</Button>
      </Box>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor={themes.colors.primaryBlue}
        color="white"
      >
        <Container maxWidth={false}>
          <Grid container spacing={5} wrap="nowrap" textAlign="center" direction={isMobile ? "column" : "row"}>
            <Grid item xs={12} sm={3}>
              <Box pb={4}>
                <img src={inbursaLogo} alt="Logo Inbursa Branco" style={{ maxWidth: "100%", height: "auto" }} />
              </Box>
              <Box pb={2}>
                <Typography variant="h5" component="h5">
                  Precisa de ajuda?
                </Typography>
              </Box>
              <Button className="button-contained-white">Fale conosco</Button>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center" className="hide-on-mobile">
              <Box pb={2}>
                <Typography variant="h5" component="h5">
                  Produtos Inbursa
                </Typography>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Cartão de Crédito
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Refinanciamento
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Portabilidade
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Saque Aniversário FGTS
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Consignado
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center" className="hide-on-mobile">
              <Box pb={2}>
                <Typography variant="h5" component="h5">
                  Atendimento
                </Typography>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Fale Conosco
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Negocie sua Dívida
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Ouvidoria
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Canal de Denúncias
                </Link>
              </Box>
              <Box pb={2}>
                <Link href="/" color="inherit" underline="none" fontSize={17}>
                  Serviços Online
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box pb={2}>
                <Typography variant="h5" component="h5" noWrap>
                  Siga-nos nas redes sociais
                </Typography>
              </Box>
              <Box display="flex" direction="row" pb={2} justifyContent="center">
                <Grid pr={1}>
                  <IconButton size='small'>
                    <FacebookIcon fontSize='large' sx={{ color: themes.colors.white }} />
                  </IconButton>
                </Grid>
                <Grid pr={1}>
                  <IconButton size='small'>
                    <InstagramIcon fontSize='large' sx={{ color: themes.colors.white }} />
                  </IconButton>
                </Grid>
                <Grid pr={1}>
                  <IconButton size='small'>
                    <TwitterIcon fontSize='large' sx={{ color: themes.colors.white }} />
                  </IconButton>
                </Grid>
                <Grid pr={1}>
                  <IconButton size='small'>
                    <YoutubeIcon fontSize='large' sx={{ color: themes.colors.white }} />
                  </IconButton>
                </Grid>
                <Grid pr={1}>
                  <IconButton size='small'>
                    <LinkedinIcon fontSize='large' sx={{ color: themes.colors.white }} />
                  </IconButton>
                </Grid>
              </Box>
              <Typography variant="h5" component="h5">
                SAC
              </Typography>
              <Typography variant="subtitle1" pb={2}>
                0800 123 456
              </Typography>
              <Typography variant="h5" component="h5">
                Atendimento acessível
              </Typography>
              <Typography variant="caption" pb={2}>
                (Deficiência auditiva e de fala)
              </Typography>
              <Typography variant="subtitle1">
                0800 321 654
              </Typography>
            </Grid>
          </Grid>
          <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <Divider sx={{ bgcolor: "#fff" }} />
            <Box pt={5}>
              <p className="hide-on-mobile">
                Em caso de arrependimento na contratação de uma operação de Crédito Consignado (Empréstimo ou Cartão) você tem até 7 dias corridos para entrar em contato 
                com o Banco Inbursa e efetuar o cancelamento e a devolução dos valores, acrescido de eventuais tributos que incidiram sobre a operação.
              </p>
              <br />
              <b>
                Banco Inbursa Brasil, instituição financeira, inscrita sob o CNPJ nº 04.866.275/0001-63, com sede na Av. Presidente Juscelino Kubitschek, 1327
                Andar 18 Conj 181 Conj 182 - Vila Nova Conceição, São Paulo - SP, 04543-011.
              </b>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}