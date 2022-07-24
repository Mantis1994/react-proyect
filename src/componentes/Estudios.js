import React from "react";
import { DiHtml5,DiJavascript1,DiCss3 } from "react-icons/di";
import "../css/Estudios.css";








const Estudios = () =>{
    return(
        <div className="contenedor-principal-estudio">
                <h1>Estudios</h1>
            <div    className="contendor-estudio">
                <p>Desarrollo web Resposive </p>
                <p className="logo logo1"><DiHtml5 /></p> <p className="logo logo2"><DiCss3 /></p> <p className="logo logo3"><DiJavascript1 /></p>
            </div>
        </div>





    );
}





export default Estudios;