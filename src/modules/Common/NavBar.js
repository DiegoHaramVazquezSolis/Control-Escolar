import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logOut} from './../../redux/actions/userActions';
import {NavLink, withRouter, Link} from 'react-router-dom';
//import firebase from './../../firebase';

//const db = firebase.database().ref("BP");

class NavBar extends Component{
    state = {
        profile: null,
        weHaveSubjects: false,
        weHaveSchedule: false,
        weHaveClassMarks: false,
        weHaveStudentsLists: false,
        weHaveAspirants: false,
        weHaveTeachers: false,
    };
    componentWillMount(){
        
    }

    logOut = () =>{
        this.props.logOut();
        this.setState({
            profile: null,
            weHaveSubjects: false,
            weHaveSchedule: false,
            weHaveClassMarks: false,
            weHaveStudentsLists: false,
            weHaveAspirants: false,
            weHaveTeachers: false,
        });
    };

    componentWillReceiveProps(p){
        if(p.usuario.email){
            /*if(this.state.inCourse===""){
                let course = inCourse(p.bimester,p.history);
                this.setState({
                    inCourse: course
                });
            }*/
            this.setState({profile: p.usuario});
        }else{
            this.setState({profile: null});
        }
    }
        
    render(){
        return(
            <div id="sidebar">
                <div className="inner">
                    <section id="search" className="alt">
                        <form method="post">
                            <input type="text" name="" id="" placeholder="search"/>
                        </form>
                    </section>
                    <nav id="menu">
                        <header className="major">
                            <h2>Menu </h2>
                        </header>
                        {!this.state.profile &&
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li>
                                <span className="opener">Nosotros</span>
                                <ul>
                                    <li><a href="/nosotros#mision">Mision</a></li>
                                    <li><a href="/nosotros#vision">Vision</a></li>
                                    <li><a href="/nosotros#valores">Valores</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/conocenos">Conocenos</NavLink></li>
                            <li><NavLink to="/contacto">Contactanos</NavLink></li>
                            <li><NavLink to="/fundador">Fundador</NavLink></li>
                            <li><NavLink to="/preregistro">Inscripciones</NavLink></li>
                            <li><NavLink to="/login">Iniciar Sesion</NavLink></li>
                        </ul>
                        }
                        {this.state.profile && this.state.profile.type==="student" &&
                        <ul>
                            <li><NavLink to="/perfil">Perfil</NavLink></li>
                            <li><NavLink to="/materias" >Tira de materias</NavLink></li>
                            <li><NavLink to="/horario" >Horario</NavLink></li>
                            <li><NavLink to="/calificaciones"  >Calificaciones</NavLink></li>
                            <li><NavLink to="/analisis">Analisis de desempeño academico</NavLink></li>
                            <li><NavLink to="contacto">Contactanos</NavLink></li>
                            <li onClick={this.logOut}><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                        }
                        {this.state.profile && this.state.profile.type==="teacher" &&
                        <ul>
                            <li><NavLink to="/perfil">Perfil</NavLink></li>
                            <li><NavLink to="/horario" >Horario</NavLink></li>
                            {this.props.evaluationState &&
                                <li><NavLink to="/calificar">Calificar</NavLink></li>
                            }
                            {this.props.bimester>0 &&
                                <li><NavLink to="/asistencia" >Asistencia</NavLink></li>
                            }
                            <li onClick={this.logOut}><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                        }
                        {this.state.profile && this.state.profile.type==="admin" &&
                        <ul>
                            <li><NavLink to="/aspirantes">Lista de aspirantes</NavLink></li>
                            <li><NavLink to="/listadematerias" >Listas de materias</NavLink></li>
                            <li><NavLink to="/listademaestros" >Listas de profesores</NavLink></li>
                            <li><NavLink to="/listadeestudiantes" >Listas de estudiantes</NavLink></li>
                            <li><NavLink to="/evaluacion" >Evaluacion</NavLink></li>
                            <li><NavLink to="/publicar">Hacer publicacion</NavLink></li>
                            <li onClick={this.logOut}><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                        }
                        {this.state.profile && this.state.profile.type==="aspirant" &&
                        <ul>
                            <li><NavLink to="/perfil">Perfil</NavLink></li>
                            <li onClick={this.logOut}><Link to="/">Cerrar Sesion</Link></li>
                        </ul>
                        }
                        <li onClick={this.logOut}><Link to="/">Cerrar Sesion</Link></li>
                        
                    </nav>
                    <section>
                        <header className="major">
                            <h2>Noticias</h2>
                        </header>
                        <div className="mini-posts">
                            <article>
                                <a href="/" className="image"><img src={require("./../../images/pic07.jpg")} alt="imagen"/></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                            <article>
                            <a href="/" className="image"><img src={require("./../../images/pic08.jpg")} alt="imagen"/></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                            <article>
                            <a href="/" className="image"><img src={require("./../../images/pic09.jpg")} alt="imagen"/></a>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                            </article>
                        </div>
                        <ul className="actions">
                            <li><a href="/" className="button">Mas noticias</a></li>
                        </ul>
                    </section>
                    <section>
                        <header className="major">
                            <h2>Contacto</h2>
                        </header>
                        <p>Queremos escucharte</p>
                        <ul className="contact">
                            <li className="fa-envelope-o">diegovazquezso@live.com.mx</li>
                            <li className="fa-phone" >(044) 33.12.97.12.99</li>
                            <li className="fa-home" >Calle falsa 123</li>
                        </ul>
                    </section>
                    <footer id="footer">
                        <p className="copyright">&copy; Control escolar. Todos los derechos reservados</p>
                    </footer>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps) {
    return {
        state: state,
        usuario: state.user.profile,
        evaluationState: state.evaluationState.evaluation,
        bimester: state.bimester.bimester
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default NavBar = withRouter(connect(mapStateToProps,{mapDispatchToProps,logOut})(NavBar));