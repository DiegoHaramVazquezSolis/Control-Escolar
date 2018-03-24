import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signInWithEmail} from './../../redux/actions/userActions';
import Header from './../Common/Header';
import logo from './../../logo.svg';

class Login extends Component {
    state = {
        auth: {
            email: '',
            password: ''
        }
    };

    componentWillMount(){
        if(localStorage.getItem("user")) this.props.history.push("/perfil");
    }

    onChange = (e) => {
        let {auth} = this.state;
        auth[e.target.name] = e.target.value;
        this.setState({auth});
    };

    signInWithEmail = (e) => {
        e.preventDefault();
        this.props.signInWithEmail(this.state.auth)
        .then(() => {
            this.props.history.push("/perfil")
        });
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="inner" >
                <Header />
                <div className="row 200%">
                    <div className="6u 12u$(medium)">
                        <h2>Bienvenido de nuevo</h2>
                        <p>Ingresa tus datos para acceder</p>
                        <form onSubmit={this.signInWithEmail}>
                                <div className="12u$">
                                    <input id="email" name="email" type="text" placeholder="Correo" onChange={this.onChange} value={email} required/>
                                </div>
                                <br />
                                <div className="12u$">
                                    <input id="password" name="password" type="password" placeholder="Contraseña" onChange={this.onChange} value={password} required/>
                                </div>
                            <br className="major" />
                            <div className="12u$">
                                <ul className="actions">
                                    <li>
                                        <input className="special" value="Entrar" type="submit" />
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="6u 12u$(medium)">
                        <img alt="logotipo" src={logo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login = connect(null, {signInWithEmail})(Login);
