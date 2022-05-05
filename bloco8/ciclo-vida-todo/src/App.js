import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Estudar',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Trabalhar',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
   this.setState({inputValue : event.target.value})
  }

  criaTarefa = () => {
    console.log('criaTarefa', this.state.tarefas)

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: this.state.filter
    }
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas : novaListaDeTarefas})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.listaTarefas.map(
      (tarefa) => {
        if (id === tarefa.id) {
          const novaTarefa = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaTarefa
        }else {
        return tarefa
        }
      }
    )
      this.setState({ listaTarefas : novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    const estadoDaTarefa = {
      tarefa: this.state.onChangeFilter
    }
      const estadoFiltro = estadoDaTarefa

      this.setState({estadoFiltro : event.target.value})
   
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>

        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value= "pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa

                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>

      </div>
    )
  }
}

export default App
