import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Link } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { themes } from '../../utils/styleUtils';

export default function HomeFAQAccordion() {
    return (
        <Box m={2}>
            <Box sx={{ bgcolor: themes.colors.lightGrayBackground }} maxWidth={897} margin="auto">
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Quem somos?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            O Banco Inbursa Brasil faz parte do “Grupo Financiero Inbursa”, um conglomerado financeiro mexicano que está entre os maiores bancos do México
                            com uma plataforma completa de produtos e serviços. No Brasil, o Inbursa tem como premissa a oferta de crédito para pessoas físicas e jurídicas. O Banco Inbursa firmou parceria com o Grupo América Móvil, detentores das marcas Claro, NET e Embratel.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">O que é Antecipação do Saque Aniversário?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            Nova modalidade de crédito destinada a pessoas físicas que optaram pelo Saque Aniversário do FGTS.
                            O empréstimo consiste em uma antecipação do valor do saque disponibilizada no mês do aniversário, limitado a cinco anos de antecipação.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Como antecipar o Saque Aniversário?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            Para ter acesso ao Saque Aniversário é necessário fazer a opção da modalidade no App FGTS, Internet Banking Caixa ou no site fgts.caixa.gov.br.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Quais opções de antecipação do Saque Aniversário?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            -Valor mínimo de R$ 500,00 e máximo de R$ 20.000,00.
                        </Typography>
                        <Typography>
                            -Antecipação de até 7 anos.
                        </Typography>
                        <Typography>
                            -São elegíveis todos os clientes que autorizaram o Banco Inbursa para consulta dos seus saldos de Fundo de Garantia; <br />
                            *Os valores variam de acordo com o saldo disponível no FGTS
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Como assinar o contrato/dúvidas com a assinatura?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            A assinatura do nosso contrato é de forma eletrônica. Você receberá um token no e-mail cadastrado ou via SMS no celular cadastrado. Basta inserir o token recebido no campo solicitado e pronto!
                            Se você não receber o token poderá solicitar um novo através do botão de “reenviar token”.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Em quanto tempo receberei um retorno do Banco Inbursa?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography>
                            Após contratação no portal FGTS, O Banco Inbursa enviará um e-mail com o status do pedido em até 24 (vinte e quatro) horas.
                            Se aprovado, o cliente receberá o valor do empréstimo em até 2 (dois) dias corridos na conta corrente informada em seu cadastro.
                            Importante: a conta corrente informada durante o cadastro deverá ser de titularidade do colaborador.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">O que é Custo Efetivo Total?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography pb={2}>
                            Custo Efetivo Total (CET) é a taxa que considera todos os encargos e despesas incidentes nas operações de crédito e de arrendamento mercantil
                            financeiro, contratadas ou ofertadas a pessoas físicas, microempresas ou empresas de pequeno porte. O principal custo da operação de crédito é
                            a taxa de juros cobrada pela instituição financeira. No entanto, quando são acrescidos os tributos, tarifas, seguros, custos relacionados ao
                            registro de contrato e outras despesas cobradas na operação, a taxa real da operação aumenta.
                            A essa taxa – calculada levando-se em consideração todos os custos incluídos na operação de crédito – damos o nome de Custo Efetivo Total (CET).
                        </Typography>
                        <Typography>
                            Mais informações sobre CET: <Link href="http://www.bcb.gov.br/pre/bc_atende/port/custo.asp" target="_blank">Clique aqui</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">SCR, o que é?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography pb={2}>
                            O Sistema de Informações de Crédito do Banco Central – SCR é um instrumento de registro e consulta de informações sobre as operações de crédito,
                            avais e fianças prestados e limites de crédito concedidos por instituições financeiras a pessoas físicas e jurídicas no país.
                            Foi criado pelo Conselho Monetário Nacional e é administrado pelo Banco Central do Brasil, a quem cumpre armazenar as informações encaminhadas e
                            também disciplinar o processo de correção e atualização da base de dados pelas instituições financeiras participantes.
                        </Typography>
                        <Typography>
                            Mais informações sobre SCR acesse: <Link href="http://www.bcb.gov.br/fis/crc/port/introducao.asp" target="_blank">Clique aqui</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: 0 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="subtitle1" className="faq-title-text">Atenção! Tentativa de fraude!</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <Typography pb={2}>
                            O Banco Inbursa alerta sobre tentativa de golpe em que pessoas ou falsas instituições financeiras, utilizando o nome de instituições autorizadas
                            pelo Banco Central ou de representantes delas, ou citando nomes de servidores e normativos desta autarquia, exigem a realização de pagamentos
                            prévios (depósitos, boletos, etc.), como condição para a liberação de empréstimos. Trata-se de tentativa de fraude, pois as instituições financeiras
                            autorizadas a funcionar não exigem pagamentos prévios, especialmente em favor de terceiros, para a concessão de empréstimos.
                        </Typography>
                        <Typography>
                            Para mais informações, acesse: <Link href="https://www.bcb.gov.br/pt-br/#!/c/notas/15352" target="_blank">Clique aqui</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}