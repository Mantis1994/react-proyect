import React from "react";
import "../css/Myinfo.css";
import fotoperfil from "../imagenes/lassalle.jpg";




const MyInfo = ({nombre, apellido, email, gmail, edad, numero}) =>{
    return(
        <div className="contenedor-principal-info">
            <img src={fotoperfil} />
            <div className="contenedor-info">
                <p><b>Nombre:</b> {nombre}</p>
                <p><b>Apellido:</b> {apellido}</p>
                <p><b>Edad:</b> {edad}</p>
                <p><b>E-MAIL:</b> {email}</p>
                <p><b>G-MAIL:</b> {gmail}</p>
                <p><b>Telefono:</b> {numero}</p>


            </div>

        </div>



    );



}
export default MyInfo;