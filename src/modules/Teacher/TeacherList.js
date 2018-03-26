import React, { Component } from 'react';
import Header from './../Common/Header';
import { Link } from 'react-router-dom';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class TeacherList extends Component {
    state = {
        teachers: null
    };

    componentWillMount(){
        db.child("users").orderByChild("type").equalTo("teacher")
        .once("value", teachers => {
            let teachersArray = [];
            teachers.forEach(function (teacher){
                teachersArray.push(teacher.val());
            });
            if(teachersArray.length > 0) toastr.success("Se ha cargado con exito. La lista contiene "+teachersArray.length+" profesores");
            else toastr.warning("No existe ningun maestro aun o no se pudieron cargar");
            this.setState({teachers: teachersArray});
        });
    }

    render() {
        const {teachers} = this.state;
        return (
            <div className="inner" >
                <Header title="Lista de maestros" />
                <section>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>EMAIL</th>
                                    <th>GRADO</th>
                                    <th>GRUPO</th>
                                    <th>ACCION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers instanceof Array && teachers.map(teacher => (
                                    <tr>
                                        <td>{(teacher.name+" "+teacher.apellidoP+" "+teacher.apellidoM).toUpperCase()}</td>
                                        <td>{teacher.email}</td>
                                        <td>{teacher.grade && (teacher.grade).toUpperCase()}</td>
                                        <td>{teacher.grupo}</td>
                                        <td>
                                            <Link to={"/profesor/"+teacher.uid} ><input className="button special" type="button" value="Modificar"/></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default TeacherList;
