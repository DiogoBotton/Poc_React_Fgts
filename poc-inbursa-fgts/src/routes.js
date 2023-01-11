import React from "react";
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LoginEmailCisco from "./pages/LoginEmailCisco/LoginEmailCisco";
import LoginSalarioBruto from "./pages/LoginSalarioBruto/LoginSalarioBruto";
import SaqueAniversario from "./pages/SaqueAniversario/SaqueAniversario";
import PersonalData from "./pages/PersonalData/PersonalData";
import Documento from "./pages/Documento/Documento";
import Selfie from "./pages/Selfie/Selfie";
import Endereco from "./pages/Addres/Addres";
import Dados from "./pages/Employee/Employee";
import Proposed from "./pages/Proposed/Proposed";
import CreditoBanco from "./pages/CreditBank/CreditBank";
import ConfirmedData from "./pages/ConfirmedData/ConfirmedData";
import Finish from "./pages/Finish/Finish";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/email-verification" element={<LoginEmailCisco />} />
            <Route path="/contratar" element={<LoginSalarioBruto />} />
            <Route path="/saque-aniversario" element={<SaqueAniversario />} />
            <Route path="/dados-pessoais" element={<PersonalData />} />
            <Route path="/documento" element={<Documento />} />
            <Route path="/selfie" element={<Selfie />} />
            <Route path="/endereco" element={<Endereco />} />
            <Route path="/dados-profissionais" element={<Dados />} />
            <Route path="/proposta" element={<Proposed />} />
            <Route path="/credito-banco" element={<CreditoBanco />} />
            <Route path="/confirmar-dados" element={<ConfirmedData />} />
            <Route path="/finalizado" element={<Finish />} />
        </Routes>
    );
}