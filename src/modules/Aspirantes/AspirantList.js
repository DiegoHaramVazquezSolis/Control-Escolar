import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Common/Header';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class AspirantRow extends Component {
    aceptar = (e) => {
        e.preventDefault();
        db.child("users").child(this.props.uid)
        .update({type: 'student'})
        .then( toastr.success("Usuario aceptado") )
        .catch((err) => {
            toastr.error("No se pudo completar la accion");
            console.log(err);
        });
    }

    rechazar = (e) => {
        e.preventDefault();
        db.child("users").child(this.props.uid)
        .remove()
        .then( toastr.info("Usuario rechazado") )
        .catch((err) => {
            toastr.error("No se pudo completar la accion");
            console.log(err);
        });
    }

    render(){
        const {aspirant} = this.props;
        return (
            <tr>
                <td>{aspirant.name+" "+aspirant.apellidoP+" "+aspirant.apellidoM}</td>
                <td>{aspirant.phone}</td>
                <td>{aspirant.email}</td>
                <td>
                    <Link to={"/perfil/"+aspirant.uid}><input  style={{ position: 'absolute' ,marginTop: '1.4em' }} className="button" type="button" value="Ver perfil"/></Link>
                </td>
                <td>
                    <input className="button special fit small" type="button" value="Aceptar" onClick={this.aceptar} />
                    <input className="button fit small" type="button" value="Rechazar" onClick={this.rechazar} />
                </td>
            </tr>
        );
    }
}

class AspirantList extends Component {
    state = {
        aspirants: null
    };

    componentWillMount(){
        db.child("users").orderByChild("type").equalTo("aspirant")
        .on("value", aspirants => {
            let aspirantsArray = [];
            aspirants.forEach(function (aspirant){
                aspirantsArray.push(aspirant.val());
            });
            if(aspirantsArray.length>0) toastr.success("Lista cargada, hay "+aspirantsArray.length+(aspirantsArray.length===1 ? " aspirante": " aspirantes"));
            else toastr.info("No hay aspirantes por el momento");
            this.setState({aspirants: aspirantsArray});
        });
    }

    componentWillUnmount(){
        db.child("users").off();
    }

    render() {
        const {aspirants} = this.state;
        return (
            <div className="inner" >
                <Header title="Lista de aspirantes" />
                <section>
                    <div className="table-wrapper" >
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Email</th>
                                    <th>Informacion</th>
                                    <th>Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aspirants instanceof Array && aspirants.map(aspirant => (
                                    <AspirantRow aspirant={aspirant} uid={aspirant.uid} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

export default AspirantList;
