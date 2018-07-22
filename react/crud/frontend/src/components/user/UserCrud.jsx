import React, {Component} from 'react'
import Main from "../template/Main"
import axios from 'axios'
import UserForm from './UserForm'

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"   
}

const baseurl = `http://localhost:3001/users`

const initialState = {
    user: {name: '', email: ''},
    list:[]
}

export default class UserCrud extends Component {

    constructor(props){
        super(props)
        this.state = {...initialState}
    }
    
    componentWillMount(){
        axios(baseurl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear() {
        this.setState({...this.state, 
            user: {name: '', email: ''} })
    }

    save() {
        const user = this.state.user 
        const method = user.id? 'put': 'post'
        const url =  user.id? `${baseurl}/${user.id}` : baseurl 
        axios[method](url, user).then(resp => {
                const lista = this.getUpdatedList(resp.data)
                this.setState({...this.state, user: {name: '', email: ''}, list: lista})
        })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list                    
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseurl}/${user.id}`)
        .then(resp => {
          const list = this.state.list.filter(u => u !== user)
          this.setState({ list })  
        })
    }

    updateField(event) {
       const {state} = this 
       state.user[event.target.name] = event.target.value 
       this.setState(state)
    }

    render(){
        console.log(this.state.list)
        return (
            <Main {...headerProps}>
                Cadastro de usuários
                <UserForm
                    name={this.state.user.name}
                    email={this.state.user.email}
                    updateField={this.updateField.bind(this)}
                    clear={this.clear.bind(this)}
                    save={this.save.bind(this)} />
            </Main>
        )
    }
}