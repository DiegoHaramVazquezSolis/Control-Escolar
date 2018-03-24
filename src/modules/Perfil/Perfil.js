import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './../Common/Header';
import firebase from './../../firebase';

const db = firebase.database().ref("BP");

class Perfil extends Component {
    state = {
        user: {}
    };

    componentWillReceiveProps(p){
        this.setState({user: p.user});
    }

    render() {
        const {motherEscolaridad, motherWorkPhone, motherWork, motherPhone, motherEmail, motherMunicipio, motherState, motherCP, 
            motherColonia, motherapellidoP, motherapellidoM, motherName, motherStreet, motherNoExt, motherNoInt,
            fatherEscolaridad, fatherWorkPhone, fatherWork, fatherPhone, fatherEmail, fatherMunicipio, fatherState, fatherCP, 
            fatherColonia, fatherapellidoP, fatherapellidoM, fatherName, email, password, name, apellidoP, apellidoM, CURP, tipoDeSangre,
            birthday, weight, street, fatherStreet, fatherNoExt, fatherNoInt, noExt, noInt, cruce1, cruce2, colonia, CP, municipio, 
            emergencyPhone, emergencyContact, phone, height, nacionalidad, grade, message, signUpUser, onInputChange, persona1,
            persona2, persona3, parentesco1, parentesco2, parentesco3} = this.state.user;
        return (
            <div className="inner">
                <Header title="Bienvenido!" />
                <section>
                        <form >
                            <div className="12u$">
                                Grado:
                                <div className="select-wrapper">
                                    <select id="grade" name="grade" value={grade} disabled>
                                        <option value="">- Grado -</option>
                                        <option value="primero">1</option>
                                        <option value="segundo">2</option>
                                        <option value="tercero">3</option>
                                        <option value="cuarto">4</option>
                                        <option value="quinto">5</option>
                                        <option value="sexto">6</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="12u$">
                                Nombre: <input id="name" name="name" value={name} type="text" placeholder="Nombre(s)" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Apellido Paterno: <input id="apellidoP" name="apellidoP" value={apellidoP} type="text" placeholder="Apellido Paterno" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Apellido Materno: <input id="apellidoM" name="apellidoM" value={apellidoM} type="text" placeholder="Apellido Materno" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    CURP: <input id="CURP" name="CURP" value={CURP} type="text" placeholder="CURP" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Tipo de sangre:
                                    <div className="select-wrapper">
                                        <select id="tipoDeSangre" name="tipoDeSangre" value={tipoDeSangre} disabled>
                                            <option value="">- Tipo de sangre -</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Nacionalidad: <input id="nacionalidad" name="nacionalidad" value={nacionalidad} type="text" placeholder="Nacionalidad" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Fecha de nacimiento: <input id="birthday" name="birthday" value={birthday} placeholder="Fecha de nacimiento"  type="date" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Peso: <input id="weight" name="weight" value={weight} type="text" placeholder="Peso" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Altura: <input id="height" name="height" value={height} type="text" placeholder="Estatura" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="12u$">
                                Calle: <input id="street" name="street" value={street} type="text" placeholder="Calle" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Nº exterior: <input id="noExt" name="noExt" value={noExt} type="text" placeholder="Numero Exterior" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Nº interior: <input id="noInt" name="noInt" value={noInt} type="text" placeholder="Numero Interior" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Cruce 1: <input id="cruce1" name="cruce1" value={cruce1} type="text" placeholder="Calle que cruza N°1" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Cruce 2: <input id="cruce2" name="cruce2" value={cruce2} type="text" placeholder="Calle que cruza N°2" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Colonia: <input id="colonia" name="colonia" value={colonia} type="text" placeholder="Colonia" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Codigo postal:<input id="CP" name="CP" value={CP} type="text" placeholder="Codigo postal" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Municipio: <input id="municipio" name="municipio" value={municipio} type="text" placeholder="Municipio" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Telefono: <input id="phone" name="phone" value={phone} type="text" placeholder="Telefono" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    En caso de emergencia llamar a: <input id="emergencyContact" name="emergencyContact" value={emergencyContact} type="text" placeholder="Nombre de contacto de emergencia" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Telefono de emergencia: <input id="emergencyPhone" name="emergencyPhone" value={emergencyPhone} type="text" placeholder="Telefono de contacto de emergencia" disabled/>
                                </div>
                            </div>
                            <br />
                            <h1>Datos del padre o tutor:</h1>
                            <br/>
                            <div className="12u$">
                                Nombre: <input id="fatherName" name="fatherName" value={fatherName} type="text" placeholder="Nombre(s)" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Apellido Paterno: <input id="fatherapellidoP" name="fatherapellidoP" value={fatherapellidoP} type="text" placeholder="Apellido Paterno" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Apellido Materno: <input id="fatherapellidoM" name="fatherapellidoM" value={fatherapellidoM} type="text" placeholder="Apellido Materno" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="12u$">
                                Calle: <input id="fatherStreet" name="fatherStreet" value={fatherStreet} type="text" placeholder="Calle" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Nº exterior: <input id="fatherNoExt" name="fatherNoExt" value={fatherNoExt} type="text" placeholder="Numero Exterior" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Nº interior: <input id="fatherNoInt" name="fatherNoInt" value={fatherNoInt} type="text" placeholder="Numero Interior" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Colonia: <input id="fatherColonia" name="fatherColonia" value={fatherColonia} type="text" placeholder="Colonia" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Codigo postal:<input id="fatherCP" name="fatherCP" value={fatherCP} type="text" placeholder="Codigo postal" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Municipio: <input id="fatherMunicipio" name="fatherMunicipio" value={fatherMunicipio} type="text" placeholder="Municipio" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Estado: <input id="fatherState" name="fatherState" value={fatherState} type="text" placeholder="Estado" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Telefono de casa: <input id="fatherPhone" name="fatherPhone" value={fatherPhone} type="text" placeholder="Telefono de casa" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    E-mail: <input id="fatherEmail" name="fatherEmail" value={fatherEmail} type="text" placeholder="E-mail" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Ocupacion: <input id="fatherWork" name="fatherWork" value={fatherWork} type="text" placeholder="Ocupacion" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Telefono trabajo: <input id="fatherWorkPhone" name="fatherWorkPhone" value={fatherWorkPhone} type="text" placeholder="Telefono trabajo" disabled />
                                </div>
                            </div>
                            <br/>
                            <div className="12u$">
                                Escolaridad: <input id="fatherEscolaridad" name="fatherEscolaridad" value={fatherEscolaridad} type="text" placeholder="Escolaridad" disabled />
                            </div>
                            <br />
                            <h1>Datos de la madre:</h1>
                            <br/>
                            <div className="12u$">
                                Nombre: <input id="motherName" name="motherName" value={motherName} type="text" placeholder="Nombre(s)" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Apellido Paterno: <input id="motherapellidoP" name="motherapellidoP" value={motherapellidoP} type="text" placeholder="Apellido Paterno" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Apellido Materno: <input id="motherapellidoM" name="motherapellidoM" value={motherapellidoM} type="text" placeholder="Apellido Materno" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="12u$">
                                Calle: <input id="motherStreet" name="motherStreet" value={motherStreet} type="text" placeholder="Calle" disabled />
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Nº exterior: <input id="motherNoExt" name="motherNoExt" value={motherNoExt} type="text" placeholder="Numero Exterior" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Nº interior: <input id="motherNoInt" name="motherNoInt" value={motherNoInt} type="text" placeholder="Numero Interior" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Colonia: <input id="motherColonia" name="motherColonia" value={motherColonia} type="text" placeholder="Colonia" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Codigo postal:<input id="motherCP" name="motherCP" value={motherCP} type="text" placeholder="Codigo postal" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Municipio: <input id="motherMunicipio" name="motherMunicipio" value={motherMunicipio} type="text" placeholder="Municipio" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Estado: <input id="motherState" name="motherState" value={motherState} type="text" placeholder="Estado" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Telefono de casa: <input id="motherPhone" name="motherPhone" value={motherPhone} type="text" placeholder="Telefono de casa" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    E-mail: <input id="motherEmail" name="motherEmail" value={motherEmail} type="text" placeholder="E-mail" disabled/>
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div className="6u 12u$(xsmall)">
                                    Ocupacion: <input id="motherWork" name="motherWork" value={motherWork} type="text" placeholder="Ocupacion" disabled />
                                </div>
                                <div className="6u 12u$(xsmall)">
                                    Telefono trabajo: <input id="motherWorkPhone" name="motherWorkPhone" value={motherWorkPhone} type="text" placeholder="Telefono trabajo" disabled />
                                </div>
                            </div>
                            <br/>
                            <div className="12u$">
                                Escolaridad: <input id="motherEscolaridad" name="motherEscolaridad" value={motherEscolaridad} type="text" placeholder="Escolaridad" disabled />
                            </div>
                            <br />
                            <h1>Personas autorizadas a recoger al alumno(a):</h1>
                            <br />
                            <div className="row uniform">
                                <div  className="6u 12u$(xsmall)" >
                                    Nombre: <input id="persona1" name="persona1" value={persona1} type="text"  disabled title="Es necesario por lo menos una persona autorizada" />
                                </div>
                                <div  className="6u 12u$(xsmall)" >
                                    Parentesco: <input id="parentesco1" name="parentesco1" value={parentesco1} type="text"  disabled title="Es necesario por lo menos una persona autorizada" />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div  className="6u 12u$(xsmall)" >
                                    Nombre: <input id="persona2" name="persona2" value={persona2} type="text" disabled />
                                </div>
                                <div  className="6u 12u$(xsmall)" >
                                    Parentesco: <input id="parentesco2" name="parentesco2" value={parentesco2} type="text" disabled />
                                </div>
                            </div>
                            <br />
                            <div className="row uniform">
                                <div  className="6u 12u$(xsmall)" >
                                    Nombre: <input id="persona3" name="persona3" value={persona3} type="text" disabled />
                                </div>
                                <div  className="6u 12u$(xsmall)" >
                                    Parentesco: <input id="parentesco3" name="parentesco3" value={parentesco3} type="text" disabled />
                                </div>
                            </div>
                        </form>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        user: state.user.profile,
        loaded: state.user.profile !== null
    }
}

export default Perfil = connect(mapStateToProps)(Perfil);