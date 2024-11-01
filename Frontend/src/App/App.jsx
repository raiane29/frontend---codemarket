import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from "../Components/Home";
import Contato from "../Components/Contato";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PagAddEventos from "../Components/PagAddEventos";

const App = () => {
    return(
        <BrowserRouter>
            <Container>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="PagAddEventos" element={<PagAddEventos/>} />
            </Routes>
            <Footer/>
            </Container>
        </BrowserRouter>
)
}

export default App;