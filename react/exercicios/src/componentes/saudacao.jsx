import React, {Component} from 'react'

export default class Saudacao extends Component {
    state = {
        tipo: '',
        nome: ''
    }

    onChange(e) {
        const {state} = this
        state[e.target.name] = e.target.value 
        this.setState(state)
    }

    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." name="tipo" 
                onChange={e => this.onChange(e)}value={tipo} />
                <input type="text" placeholder="Nome ...." name="nome" 
                onChange={e => this.onChange(e)} value={nome}/>
            </div>
        )
    }
} 