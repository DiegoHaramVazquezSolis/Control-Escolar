import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './../Common/Header';
import firebase from './../../firebase';

const db = firebase.database().ref("BP");

class SubjectList extends Component {
    state = {
        subjects: null
    };

    componentWillReceiveProps(p){
        db.child("subject").orderByChild("grado").equalTo(p.grado)
        .on("value", subjects => {
            let subjectsArray = [];
            subjects.forEach(function (subject){
                subjectsArray.push(subject);
            });
            this.setState({subjects: subjectsArray});
        });
    }

    render() {
        const {subjects} = this.state;
        return (
            <div className="inner">
                <Header title="Lista de materias"/>
                <section>
                    <div className="table-wrapper" >
                        <table>
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>
                                    <th>GRADO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects instanceof Array && subjects.map(subject => (
                                    <tr>
                                        <td>{(subject.key).toUpperCase()}</td>
                                        <td>{(this.props.grado).toUpperCase()}</td>
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

function mapStateToPros(state) {
    return {
        grado: state.user.profile.grade,
    }
}

export default SubjectList = connect(mapStateToPros)(SubjectList);
