import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { themes } from '../../utils/styleUtils';
import IconVantagem1 from '../../assets/images/icons/vantagemIcon1.svg';
import IconVantagem2 from '../../assets/images/icons/vantagemIcon2.svg';
import IconVantagem3 from '../../assets/images/icons/vantagemIcon3.svg';

export default function HomeCardVantagens() {
    return (
        <Box display="flex" justifyContent="center" pt={8} pb={5}>
            <Grid container justifyContent="space-evenly">
                <Grid pb={2}>
                    <Card sx={{ maxWidth: 286, height: 239 }}>
                        <CardActionArea disabled>
                            <CardMedia
                                sx={{ display: "unset", width: 95, pt: 2 }}
                                component="img"
                                image={IconVantagem1}
                                alt="Icone Vantagem"
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
                                image={IconVantagem2}
                                alt="Icone Vantagem"
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
                                image={IconVantagem3}
                                alt="Icone Vantagem"
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