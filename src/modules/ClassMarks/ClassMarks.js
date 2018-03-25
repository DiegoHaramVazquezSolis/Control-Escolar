import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../firebase';
import Header from './../Common/Header';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class ClassMarks extends Component {
    state = {
        classMarks: null,
        load: false
    };

    componentWillMount(){
        db.child("classMark").child(this.props.match.params.uid).child(this.props.match.params.course)
        .on("value", classMarks => {
            let classMarksArray = [];
            classMarks.forEach(function (classMark){
                classMarksArray.push(classMark);
            });
            toastr.success("Calificaciones cargadas con exito");
            this.setState({load: false, classMarks: classMarksArray});
        });
    }

    componentWillUnmount(){
        db.child("ClassMark").child(this.props.uid).child(this.props.course).off();
    }

    render() {
        const {classMarks} = this.state;
        return (
            <div className="inner" >
                <Header />
                <section>
                    <div className="table-wrapper" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Materia</th>
                                    <th>1er Bimestre</th>
                                    <th>2do Bimestre</th>
                                    <th>3er Bimestre</th>
                                    <th>4to Bimestre</th>
                                    <th>5to Bimestre</th>
                                    <th>Promedio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classMarks instanceof Array && classMarks.map(classMark => (
                                    <tr>
                                        <td>{classMark.key}</td>
                                        <td>{classMark.val().cal1 ? classMark.val().cal1 : 0}</td>
                                        <td>{classMark.val().cal2 ? classMark.val().cal2 : 0}</td>
                                        <td>{classMark.val().cal3 ? classMark.val().cal3 : 0}</td>
                                        <td>{classMark.val().cal4 ? classMark.val().cal4 : 0}</td>
                                        <td>{classMark.val().cal5 ? classMark.val().cal5 : 0}</td>
                                        <td>{((classMark.val().cal1 ? classMark.val().cal1 : 0+classMark.val().cal2 ? classMark.val().cal2 : 0+classMark.val().cal3 ? classMark.val().cal3 : 0+classMark.val().cal4 ? classMark.val().cal4 : 0+classMark.val().cal5 ? classMark.val().cal5 : 0)/5).toFixed(2)}</td>
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

function mapStateToProps(state) {
    return {
        course: state.course.course,
        uid: state.user.profile.uid,
        load: state.course.course>0 && state.user.profile.uid!==null
    };
}

export default ClassMarks = connect(mapStateToProps)(ClassMarks);
