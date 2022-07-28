import React from "react";

function MenuComponent (props) {
    return(
        <ul>
            <a href={props.link}><li className="botoes-meunu-vertical">{props.nome}</li></a>
        </ul>
    );
}

export default MenuComponent