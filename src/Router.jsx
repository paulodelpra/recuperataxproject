import React from 'react'
import Login from './components/login/Login'
import CadastroEmpresa from './components/CadastroEmpresa/CadastroEmpresa'
import ListarPlanilha from './components/ListarPlanilha/ListarPlanilha'
import ListarEmpresa from './components/ListarEmpresa/ListarEmpresa'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/cadastrarempresa" element={<CadastroEmpresa/>}></Route>
                <Route path="/listarplanilha" element={<ListarPlanilha/>}></Route>
                <Route path="/listarempresa" element={<ListarEmpresa/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;