import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import ConditionImg from '../../assets/images/conditionsImg.png';
import './Home.css';
import IconCheck from '../../assets/images/icons/checkIcon.svg';

export default function HomeCondicoes() {
    return (
        <Box margin="auto">
            <Grid container justifyContent="space-evenly" alignItems="center" columns={16} wrap="wrap-reverse">
                <Grid>
                    <img src={ConditionImg} alt="Condições" style={{ maxWidth: "100%", height: "auto" }} />
                </Grid>
                <Grid>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCheck} alt="Icone check" width={29} />
                            </ListItemIcon>
                            <Typography className="subtitle-home">
                                Ser maior de 18 anos ou emancipado
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCheck} alt="Icone check" width={29} />
                            </ListItemIcon>
                            <Typography className="subtitle-home">
                                Ter situação regular com a Receita Federal
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCheck} alt="Icone check" width={29} />
                            </ListItemIcon>
                            <Typography className="subtitle-home">
                                Possuir conta corrente ou poupança
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCheck} alt="Icone check" width={29} />
                            </ListItemIcon>
                            <Typography className="subtitle-home">
                                Ter saldo do FGTS em conta ativa ou inativa
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <img src={IconCheck} alt="Icone check" width={29} />
                            </ListItemIcon>
                            <Typography className="subtitle-home">
                                Ser optante da modalidade Saque-Aniversário do FGTS
                            </Typography>
                        </ListItem>
                    </List>

                </Grid>

            </Grid>
        </Box>
    )
}