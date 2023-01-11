import { Box, Grid, Typography, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import React from 'react';
import { themes } from '../../utils/styleUtils';
import CelularImg from '../../assets/images/cel_fgts.png';
import './Home.css';
import IconCifrao from '../../assets/images/icons/cifraoIcon.svg';
import IconRelogio from '../../assets/images/icons/relogioIcon.svg';
import IconMaos from '../../assets/images/icons/maosIcon.svg';

export default function HomeSobreAntecipacao() {

    return (
        <Box sx={{ bgcolor: themes.colors.lightGrayBackground }} maxWidth="95%" margin="auto">
            <Grid textAlign="center" pb={1} pt={2}>
                <Typography className="title-home strong">
                    O que é Antecipação do Saque Aniversário FGTS?
                </Typography>
            </Grid>
            <Grid container justifyContent="space-evenly" alignItems="center" columns={12}>
                <Grid item sm={6}>
                    <Typography variant="subtitle1" color={themes.colors.text}>
                        Nova modalidade de crédito destinada a pessoas físicas que
                        optaram pelo Saque Aniversário do FGTS.
                        O empréstimo consiste em uma antecipação do valor do saque
                        disponibilizada no mês do aniversário, limitado a 7 anos de antecipação.
                    </Typography>
                    <Typography variant="subtitle1" color={themes.colors.text} pb={2}>
                        É a sua oportunidade de colocar a vida financeira em dia!
                    </Typography>
                    <Typography variant="subtitle1" color={themes.colors.text} pb={2}>
                        Confira as condições:
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCifrao} alt="Icone cifrão" />
                            </ListItemIcon>
                            <Typography className="subtitle-home strong">
                                Taxa a partir de 1,99% a.m.*
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconRelogio} alt="Icone relógio" />
                            </ListItemIcon>
                            <Typography className="subtitle-home strong">
                                Dinheiro rápido na conta
                            </Typography>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconMaos} alt="Icone mãos" />
                            </ListItemIcon>
                            <Typography className="subtitle-home strong">
                                São elegíveis todos os clientes que autorizaram o Banco <br /> Inbursa para consulta dos seus saldos de Fundo de Garantia.
                            </Typography>
                        </ListItem>
                    </List>

                </Grid>
                <Grid>
                    <img src={CelularImg} alt="Celular" style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
            </Grid>
        </Box>
    )
}