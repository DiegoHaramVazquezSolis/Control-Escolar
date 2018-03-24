import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div>
            <header id="header">
                <Link to="/" className="logo"><strong>Escuela</strong> primaria</Link>
            </header>
            <header className="main">
                <h2>{this.props.title}</h2>
            </header>
            </div>
        );
    }
}