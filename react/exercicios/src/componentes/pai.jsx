import React from 'react'
import Filho from './filho'

export default (props) => 
    <div>
        <h1>{props.nome} - {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Marcos" sobrenome={props.sobrenome} />
            <Filho {...props} nome="Carla"/>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {
                        ...props, ...child.props
                    })
                })
            }
        </ul>
    </div>