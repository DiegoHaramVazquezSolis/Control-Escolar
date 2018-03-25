import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './../Common/Header';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class Calificar extends Component {
    state = {
        Ssubject: "- Materia -",
        subjects: null,
        Sstudent: "- Alumno -",
        students: null,
        bimester: null,
        mark: 0
    };

    componentWillMount(){
        var Props = this.props
        db.child("users").orderByChild("grade").equalTo(Props.match.params.grado)
        .on("value", students => {
            let studentsArray = [];
            students.forEach(function (student){
                if(student.val().grupo===Props.match.params.grupo && student.val().type==="student"){
                    studentsArray.push(student);
                }
            });
            this.setState({students: studentsArray});
        });
        db.child("subject").orderByChild("grado").equalTo(Props.match.params.grado)
        .on("value", subjects => {
            let subjectsArray = [];
            subjects.forEach(function (subject){
                subjectsArray.push(subject.key);
            });
            this.setState({subjects: subjectsArray});
        });
    }

    onSelectChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onInputChange = (e) => {
        this.setState({mark: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        let cal = "cal"+this.props.bimester;
        db.child("classMark").child(this.state.Sstudent).child(this.props.course).child(this.state.Ssubject)
        .update({[cal]: this.state.mark})
        .then(toastr.success("Calificacion asignada con exito"))
        .catch((er)=>{toastr.error(er)});
    }

    render() {
        const {Ssubject, subjects, Sstudent, students, mark, bimester} = this.state;
        return (
            <div className="inner" >
                <Header title="Evaluar" />
                <section>
                    <form onSubmit={this.onSubmit} >
                        <div className="12u$" >
                            <label htmlFor="">Materia</label>
                            <div className="select-wrapper" >
                                <select value={Ssubject} name="Ssubject" id="Ssubject" onChange={this.onSelectChange} >
                                    <option value="- Materia -">- Materia -</option>
                                    {subjects instanceof Array && subjects.map(subject => (
                                        <option value={subject}>{subject}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="12u$" >
                            <label htmlFor="">Alumno</label>
                            <div className="select-wrapper" >
                                <select value={Sstudent} name="Sstudent" id="Sstudent" onChange={this.onSelectChange} >
                                    <option value="- Alumno -">- Alumno -</option>
                                    {students instanceof Array && students.map(student => (
                                        <option value={student.key}>{student.val().name+" "+student.val().apellidoP+" "+student.val().apellidoM}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div className="row uniform" >
                            <div className="6u 12u$(xsmall)" >
                                <label htmlFor="">Calificacion</label>
                                <input type="number" name="mark" id="mark" value={mark} onChange={this.onInputChange} />
                            </div>
                            <div className="6u 12u$(xsmall)" >
                                <label htmlFor="">Bimestre evaluado</label>
                                <input type="number" name="Bimestre" id="Bimestre" value={this.props.bimester} disabled />
                            </div>
                        </div>
                        <br/>
                        <div className="12u$" >
                            <ul className="actions" >
                                    <li>
                                        <input className="special" type="submit" value={"Asginar Calificacion"} />
                                    </li>
                            </ul>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bimester: state.bimester.bimester,
        course: state.course.course
    };
}

export default Calificar = connect(mapStateToProps)(Calificar);
