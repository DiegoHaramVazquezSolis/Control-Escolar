import React, { Component } from 'react';
import Header from './../Common/Header';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class UpdateTeacher extends Component {
    state = {
        teacher: null,
        grade: null,
        grupo: null
    };

    componentWillMount(){
        db.child("users").child(this.props.match.params.uid)
        .on("value", teacher => {
            this.setState({teacher: teacher.val(), grade: teacher.val().grade, grupo: teacher.val().grupo});
        });
    }

    onSelectChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    update = (e) => {
        e.preventDefault();
        db.child("users").child(this.props.match.params.uid)
        .update({grade: this.state.grade, grupo: this.state.grupo})
        .then(toastr.success("Profesor actualizado exitosamente"))
        .catch((err) => {
            toastr.error("El profesor no pudo ser actualizado");
            console.log(err);
        });
    }

    render() {
        const {teacher, grade, grupo} = this.state;
        return (
            <div className="inner" >
                <Header title={teacher && "Actualizar a: "+teacher.name+" "+teacher.apellidoP+" "+teacher.apellidoM} />
                <section>
                    <form onSubmit={this.update} >
                        <input type="text" value={teacher && teacher.email} disabled />
                        <br/>
                        <div className="select-wrapper" >
                            <select value={grade} name="grade" id="grade" onChange={this.onSelectChange} >
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
                        <div className="12u$" >
                            <ul className="actions" >
                                <li><input className="button special" type="submit" value="Guardar Cambios"/></li>
                            </ul>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default UpdateTeacher;
