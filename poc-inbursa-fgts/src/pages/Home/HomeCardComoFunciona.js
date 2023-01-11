import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { themes } from '../../utils/styleUtils';
import Icon1 from '../../assets/images/icons/icon4.svg';
import Icon2 from '../../assets/images/icons/icon5.svg';
import Icon3 from '../../assets/images/icons/icon6.svg';

export default function HomeCardComoFuncionaHeader() {
    return (
        <Box display="flex" justifyContent="center" pt={5} pb={5}>
            <Grid container justifyContent="space-evenly">
                <Grid pb={2}>
                    <Card sx={{ maxWidth: 286, height: 239 }}>
                        <CardActionArea disabled>
                            <CardMedia
                                sx={{ display: "unset", width: 95, pt: 2 }}
                                component="img"
                                image={Icon1}
                                alt="Icone"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color={themes.colors.primaryBlue} fontSize={18} fontWeight={700}>
                                    Taxas a partir de 1,99% a.m.
                                </Typography>
                                <Typography variant="caption" color={themes.colors.text}>
                                    Crédito pessoal com as melhores condições no mercado.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid pb={2}>
                    <Card sx={{ maxWidth: 286, height: 239 }}>
                        <CardActionArea disabled>
                            <CardMedia
                                sx={{ display: "unset", width: 95, pt: 2 }}
                                component="img"
                                image={Icon2}
                                alt="Icone"
                            />
                            <CardContent display="flex">
                                <Typography gutterBottom variant="h6" component="div" color={themes.colors.primaryBlue} fontSize={18} fontWeight={700}>
                                    Contrate a partir de R$ 500,00
                                </Typography>
                                <Typography variant="caption" color={themes.colors.text}>
                                    Contratação 100% digital e dinheiro rápido na conta.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid pb={2}>
                    <Card sx={{ maxWidth: 286, height: 239 }}>
                        <CardActionArea disabled>
                            <CardMedia
                                sx={{ display: "unset", width: 95, pt: 2 }}
                                component="img"
                                image={Icon3}
                                alt="Icone"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color={themes.colors.primaryBlue} fontSize={18} fontWeight={700}>
                                    Menos dívidas
                                </Typography>
                                <Typography variant="caption" color={themes.colors.text}>
                                    Zero parcelas mensais, o desconto é feito anualmente no FGTS.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}