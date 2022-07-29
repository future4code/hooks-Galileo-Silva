import React from "react";

export class MenuComponent extends React.Component {
    render () {
    
    return(
        <ul>
            <a href={this.props.link}><li className="botoes-meunu-vertical">{this.props.nome}</li></a>
        </ul>
    );
  }
}


export default MenuComponent