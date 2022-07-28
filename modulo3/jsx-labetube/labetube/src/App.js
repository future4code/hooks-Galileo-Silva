import logo from './logo.svg';
import React from 'react';
import './App.css';
import CardComponent from './componentes/CardComponent';
import MenuComponent from './componentes/MenuComponent';
import FooterComponents from './componentes/FooterComponent';


function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div>
      <div class="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav class="menu-vertical">
                
                    <MenuComponent nome={"Menu"} link={"#"}/>
                    <MenuComponent nome={"Em Alta"} link={"#"}/>
                    <MenuComponent nome={"Inscrições"} link={"#"}/>
                    <hr/>
                    <hr/>
                    <MenuComponent nome={"Originais"} link={"#"}/>
                    <MenuComponent nome={"Histórico"} link={"#"}/>
                
            </nav>

            <section className="painel-de-videos">
                <CardComponent  video={"https://picsum.photos/400/400?a=1"} titulo={"Título do video 1"} class={"box-pagina-principal media1"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=2"} titulo={"Título do video 2"} class={"box-pagina-principal media2"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=3"} titulo={"Título do video 3"} class={"box-pagina-principal media3"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=4"} titulo={"Título do video 4"} class={"box-pagina-principal media4"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=5"} titulo={"Título do video 5"} class={"box-pagina-principal media5"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=6"} titulo={"Título do video 6"} class={"box-pagina-principal media6"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=7"} titulo={"Título do video 7"} class={"box-pagina-principal media7"}/>
                <CardComponent  video={"https://picsum.photos/400/400?a=8"} titulo={"Título do video 8"} class={"box-pagina-principal media8"}/>

                
            </section>
        </main>

        <FooterComponents/>
    </div>
    </div>
  );
}

export default App;
