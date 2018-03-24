import React, { Component } from 'react';
import { connect } from "react-redux";
import firebase from './../../firebase';
import Header from './../Common/Header';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

let hours = ["8:00","9:00","10:00","RECREO","12:00"];

const Fila = ({schedule, hour}) => {
    if(schedule.length>0){
        switch(hour){
            case "8:00":
                return(
                    <tr>
                        <td>{hour}</td>
                        <td>{schedule[0].label}</td>
                        <td>{schedule[4].label}</td>
                        <td>{schedule[8].label}</td>
                        <td>{schedule[12].label}</td>
                        <td>{schedule[16].label}</td>
                    </tr>
                );
            case "9:00":
                return(
                    <tr>
                        <td>{hour}</td>
                        <td>{schedule[1].label}</td>
                        <td>{schedule[5].label}</td>
                        <td>{schedule[9].label}</td>
                        <td>{schedule[13].label}</td>
                        <td>{schedule[17].label}</td>
                    </tr>
                );
            case "10:00":
                return(
                    <tr>
                        <td>{hour}</td>
                        <td>{schedule[2].label}</td>
                        <td>{schedule[6].label}</td>
                        <td>{schedule[10].label}</td>
                        <td>{schedule[14].label}</td>
                        <td>{schedule[18].label}</td>
                    </tr>
                );
            case "RECREO":
                return(
                    <tr>
                        <td>{hour}</td>
                        <td>{hour}</td>
                        <td>{hour}</td>
                        <td>{hour}</td>
                        <td>{hour}</td>
                        <td>{hour}</td>
                    </tr>
                );
            case "12:00":
                return(
                    <tr>
                        <td>{hour}</td>
                        <td>{schedule[3].label}</td>
                        <td>{schedule[7].label}</td>
                        <td>{schedule[11].label}</td>
                        <td>{schedule[15].label}</td>
                        <td>{schedule[19].label}</td>
                    </tr>
                );
        }
    }
    return (<div></div>);
};

class Schedule extends Component {
    state = {
        schedule: null
    };

    componentWillReceiveProps(p){
        db.child("schedule").child(p.grado).child(p.grupo).orderByChild("CC")
        .on("value", schedule => {
            let classArray = [];
            schedule.forEach(function (clase){
                classArray.push(clase.val());
            });
            this.setState({schedule: classArray});
        });
    }

    render() {
        const {schedule} = this.state;
        return (
            <div className="inner" >
                <Header title="Horario" />
                <section>
                    <div className="table-wrapper" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Hora</th>
                                    <th>Lunes</th>
                                    <th>Martes</th>
                                    <th>Miercoles</th>
                                    <th>Jueves</th>
                                    <th>Viernes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule instanceof Array && hours.map(hora => (
                                    <Fila schedule={schedule} hour={hora} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        grado: state.user.profile.grade,
        grupo: state.user.profile.grupo
    };
}

export default Schedule = connect(mapStateToProps)(Schedule);
