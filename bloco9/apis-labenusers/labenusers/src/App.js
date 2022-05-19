import React from "react";
import axios from "axios";

const urlLabeusers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "galileo-guilherme-hooks"
  }
};

class App extends React.Component {
  state = {
    usuario: [],
    email:[],
    usuarioInput: "",
    emailInput: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(urlLabeusers, headers)
      .then((res) => {
        this.setState({ usuario: res.data.result.list });
      })
      .catch((err) => {
        alert("Algo deu errado, tente novamente");
      });
  };

  createUsers = () => {
    const body = {
      name: this.state.usuarioInput,
      email: this.state.emailInput
    };

    axios
      .post(urlLabeusers, body, headers)
      .then((res) => {
        alert(`O usuário ${this.state.usuarioInput} foi criado com sucesso`);
        this.setState({ usuarioInput: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
        this.setState({ usuario: "" });
      });
  };

  onUsuarioTextChange = (event) => {
    this.setState({ usuarioInput: event.target.value });
  };

  onEmailTextChange = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    const usuarioComponents = this.state.usuario.map((list) => {
      return <li key={list.id}>{list.name}</li>;
    });

    return (
      <div className="App">
        <h1>Labenusers</h1>
        <input
          defaultValue={this.state.usuario}
          onChange={this.onUsuarioTextChange}
          placeholder="Usuário"
        />
        <input
          defaultValue={this.state.email}
          onChange={this.onEmailTextChange}
          placeholder="Email"
          />
        <div>
          
        </div>
        <button onClick={this.createUsers}>Adicionar Users</button>
        {usuarioComponents}
        <a href="bdUsers.js">Banco de usuários</a>
        
      </div>
    );
  }
}

export default App;
