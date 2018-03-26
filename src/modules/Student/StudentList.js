import React, { Component } from 'react';
import Header from './../Common/Header';
import { Link } from 'react-router-dom';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class StudentList extends Component {
    state = {
        students: null,
        grado: 'primero',
        grupo: 'A'
    };

    componentWillMount(){
        db.child("users").orderByChild("type").equalTo("student")
        .once("value", students => {
            let studentsArray = [];
            students.forEach(function (student){
                studentsArray.push(student.val());
            });
            if(studentsArray.length > 0){ 
                toastr.success("Listas cargadas con exito");
                toastr.info("Hay "+studentsArray.length+" alumnos registrados");
            }else{
                toastr.warning("No se encontraron alumons o no pudieron ser cargados");
            }
            this.setState({students: studentsArray});
        });
    }

    onSelectChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {students, grado, grupo} = this.state;
        return (
            <div className="inner" >
                <Header title="Lista de estudiantes" />
                <section>
                    <div className="select-wrapper" >
                        <select value={grado} name="grado" id="grado" onChange={this.onSelectChange} >
                            <option value="primero" >1</option>
                            <option value="segundo" >2</option>
                            <option value="tercero" >3</option>
                            <option value="cuarto" >4</option>
                            <option value="quinto" >5</option>
                            <option value="sexto" >6</option>
                        </select>
                    </div>
                    <br/>
                    <div className="select-wrapper" >
                        <select value={grupo} name="grupo" id="grupo" onChange={this.onSelectChange} >
                            <option value="A" >A</option>
                            <option value="B" >B</option>
                            <option value="C" >C</option>
                        </select>
                    </div>
                    <br/>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>EMAIL</th>
                                    <th>PERFIL</th>
                                    <th>PAGOS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students instanceof Array && students.map(student => (
                                    student.grade===grado && student.grupo === grupo &&
                                    <tr>
                                        <td>{(student.name+" "+student.apellidoP+" "+student.apellidoM)}</td>
                                        <td>{ student.email}</td>
                                        <td>
                                            <Link to={"/perfil/"+student.uid} >
                                                <input className="button" type="button" value="Ver perfil" />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={"/pagos/"+student.uid} >
                                                <input className="button" type="button" value="Pagos" />
                                            </Link>
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

export default StudentList;
