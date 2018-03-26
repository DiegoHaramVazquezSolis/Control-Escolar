import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from './modules/HomePage/HomePage';
import Login from './modules/Login/Login';
import Perfil from './modules/Perfil/Perfil';
import SubjectList from './modules/Subject/SubjectList';
import Schedule from './modules/Schedule/Schedule';
import ClassMarks from './modules/ClassMarks/ClassMarks';
import Calificar from './modules/Calificar/Calificar';
import AspirantList from './modules/Aspirantes/AspirantList';
import SubjectListAdmin from './modules/Subject/SubjectListAdmin';
import TeacherList from './modules/Teacher/TeacherList';
import UpdateTeacher from './modules/Teacher/UpdateTeacher';
import PerfilPublico from './modules/Perfil/PerfilPublico';
import StudentList from './modules/Student/StudentList';
import StudentPayments from './modules/Student/StudentPayments';
import Evaluation from './modules/Evaluation/Evaluation';

export class Branches extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/perfil/:uid" component={PerfilPublico} />
                <Route exact path="/materias/:grado" component={SubjectList} />
                <Route exact path="/horario/:grado/:grupo" component={Schedule} />
                <Route exact path="/calificaciones/:uid/:course" component={ClassMarks} />
                <Route exact path="/calificar/:grado/:grupo" component={Calificar} />
                <Route exact path="/aspirantes" component={AspirantList} />
                <Route exact path="/materias" component={SubjectListAdmin} />
                <Route exact path="/profesores" component={TeacherList} />
                <Route exact path="/profesor/:uid" component={UpdateTeacher} />
                <Route exact path="/estudiantes" component={StudentList} />
                <Route exact path="/pagos/:uid" component={StudentPayments} />
                <Route exact path="/evaluacion" component={Evaluation} />
            </Switch>
        );
    }
}