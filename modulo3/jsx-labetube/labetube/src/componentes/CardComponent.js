import React from "react";



  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

function CardComponent(props)  {
    return (
        <div className={props.class} onClick={reproduzVideo}>
            <img src={props.video} alt="img"/>
            <h4>{props.titulo}</h4>
        </div>
    );
}



export default CardComponent