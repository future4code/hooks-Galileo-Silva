import React from "react";



// function reproduzVideo() {
//     alert("O vídeo está sendo reproduzido")
//   }

export class CardComponent extends React.Component {
    reproduzVideo = () => {
        alert("O vídeo está sendo reproduzido");
    } 
    
    render () {
       
    return (
        <div className={this.props.class} onClick={this.reproduzVideo}>
            <img src={this.props.video} alt="img"/>
            <h4>{this.props.titulo}</h4>
        </div>
    );
  }  
}



export default CardComponent