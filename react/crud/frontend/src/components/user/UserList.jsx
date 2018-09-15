import React from 'react'

export default class UserList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-warning">
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger">
                                            <i className="fa fa-danger"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}                                                                                                       