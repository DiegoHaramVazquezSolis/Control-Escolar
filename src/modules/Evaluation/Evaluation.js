import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './../Common/Header';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class Evaluation extends Component {
    state = {
        estado: false
    };

    componentWillMount(){
        this.setState({estado: this.props.evaluationState});
    }

    componentWillReceiveProps(p){
        this.setState({estado: p.evaluationState});
    }

    onChange = (e) => {
        this.setState({estado: e.target.checked});
    }

    setEvaluationState = (e) => {
        e.preventDefault();
        db.child("evaluation").update({state: this.state.estado})
        .then(toastr.success("Cambios guardados correctamente"))
        .catch((err) => {
            toastr.error("Los cambios no pudieron ser guardados");
            console.log(err);
        });
    }

    finishBimester = (e) => {
        if(this.props.bimester>0&&this.props.bimester<5) db.child("bimester").update({current: this.props.bimester+1});
        else if(this.props.bimester===5) db.child("bimester").update({current: 0});
        else if(this.props.bimester===0){
            db.child("bimester").update({current: 1});
            var today = new Date();
            db.child("course").update({current: today.getFullYear()});
        }
    }

    render() {
        const {bimester} = this.props;
        const {estado} = this.state;
        return (
            <div className="inner">
                <Header title="Estado de la evaluacion" />
                <section>
                    <label>Bimestre actual: {bimester}</label>
                    <form onSubmit={this.setEvaluationState}>
                        <div>
                            <input id="estado" name="estado" type="checkbox" onChange={this.onChange} checked={estado} />
                            <label htmlFor="estado">{estado ? "En evaluacion" : "No hay evaluaciones actualmente"}</label>
                        </div>
                        <div>
                            <ul className="actions">
                                <li><input className="special" value="Guardar cambios" type="submit" /></li>
                                {bimester===5 &&
                                    <li><input value="Terminar curso" type="button" onClick={this.finishBimester}  /></li>
                                }
                                {bimester >0 && bimester<5 &&
                                    <li><input value="Terminar bimestre actual" type="button" onClick={this.finishBimester} /></li>
                                }
                                {bimester ===0 &&
                                    <li><input value="Comenzar curso" type="button" onClick={this.finishBimester} /></li>
                                }
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
        evaluationState: state.evaluationState.evaluation
    };
}

export default Evaluation = connect(mapStateToProps)(Evaluation);
