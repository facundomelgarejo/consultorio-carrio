import React, {useState} from "react";
import Header from "../../Commons/Header/Header";
import Button from "../../Commons/Button/button";
import '../Home/Home.css';


const Home = () => {
    return(
    <div>
        <Header />
        <div className="conteiner-buttons">
            <div className="conteiner-buttons-up">
            <button className="buttons">Buscar Paciente</button>
            </div>

            <div className="conteiner-buttons-down">
            <button className="buttons">Lista Pacientes</button>
            <button className="buttons">Agenda</button>
            </div>
        </div>
    </div>
    )
}

export default Home;
