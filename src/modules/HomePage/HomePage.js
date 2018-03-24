import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Common/Header';
import logo from './../../logo.svg'

class HomePage extends Component{
    state = {};
    render(){
        return(
            <div className="inner">
                <Header />
                <section id="banner">
                    <div className="content">
                        <header>
                            <h1>Bienvenido a <br/> Escuela Primaria</h1>
                            <p>La escuela que buscabas</p>
                        </header>
                        <p>
                            Con la mejor oferta educativa de la actualidad, la escuela primaria
                            es la mejor opcion para ti y para tus hijos.
                        </p>
                        <ul className="actions">
                            <li>
                                <Link to="/preregistro" className="button big">Inscribete ahora</Link>
                            </li>
                        </ul>
                    </div>
                    <span className="image object">
                        <img alt="imagen" src={logo} />
                    </span>
                </section>
                <section>
                    <header className="major">
                        <h2>Noticias mas recientes</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <Link to="/" className="image"><img alt="imagen" src={require('./../../images/pic01.jpg')}/></Link>
                            <h3>Se construye control escolar</h3>
                            <p>La escuela primaria por fin se actualiza y adquiere un nuevo
                                sistema de control escolar que mejorara sus servicios
                            </p>
                            <ul className="actions">
                                <li><Link to='/' className="button">Leer mas</Link></li>
                            </ul>
                        </article>
                        <article>
                            <Link to="/" className="image"><img alt="imagen" src={require('./../../images/pic02.jpg')}/></Link>
                            <h3>Se construye control escolar</h3>
                            <p>La escuela primaria por fin se actualiza y adquiere un nuevo
                                sistema de control escolar que mejorara sus servicios
                            </p>
                            <ul className="actions">
                                <li><Link to='/' className="button">Leer mas</Link></li>
                            </ul>
                        </article>
                        <article>
                            <Link to="/" className="image"><img alt="imagen" src={require('./../../images/pic03.jpg')}/></Link>
                            <h3>Se construye control escolar</h3>
                            <p>La escuela primaria por fin se actualiza y adquiere un nuevo
                                sistema de control escolar que mejorara sus servicios
                            </p>
                            <ul className="actions">
                                <li><Link to='/' className="button">Leer mas</Link></li>
                            </ul>
                        </article>
                        <article>
                            <Link to="/" className="image"><img alt="imagen" src={require('./../../images/pic04.jpg')}/></Link>
                            <h3>Se construye control escolar</h3>
                            <p>La escuela primaria por fin se actualiza y adquiere un nuevo
                                sistema de control escolar que mejorara sus servicios
                            </p>
                            <ul className="actions">
                                <li><Link to='/' className="button">Leer mas</Link></li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}
export default HomePage;