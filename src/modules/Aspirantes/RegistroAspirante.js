import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './../Common/Header';
import { signUpUser } from './../../redux/actions/userActions';

class RegistroAspirante extends Component {
    state = {
        newUser:{
            email: '',
            password: '',
            name: '',
            apellidoP: '',
            apellidoM: '',
            grade: '',
            message: '',
            CURP: '',
            tipoDeSangre: '',
            nacionalidad: '',
            birthday: '',
            weight: '',
            height: '',
            street: '',
            noExt: '',
            noInt: '',
            cruce1: '',
            cruce2: '',
            colonia: '',
            CP: '',
            municipio: '',
            phone: '',
            emergencyPhone: '',
            emergencyContact: '',
            type: "aspirant",
            fatherName: '',
            fatherapellidoP: '',
            fatherapellidoM: '',
            fatherStreet: '',
            fatherNoExt: '',
            fatherNoInt: '',
            fatherColonia: '',
            fatherCP: '',
            fatherMunicipio: '',
            fatherState: '',
            fatherPhone: '',
            fatherEmail: '',
            fatherWork: '',
            fatherWorkPhone: '',
            fatherEscolaridad: '',
            motherName: '',
            motherapellidoP: '',
            motherapellidoM: '',
            motherStreet: '',
            motherNoExt: '',
            motherNoInt: '',
            motherColonia: '',
            motherCP: '',
            motherMunicipio: '',
            motherState: '',
            motherPhone: '',
            motherEmail: '',
            motherWork: '',
            motherWorkPhone: '',
            motherEscolaridad: '',
            persona1: '',
            persona2: '',
            persona3: '',
            parentesco1: '',
            parentesco2: '',
            parentesco3: '',
        },
        fk_id_grades: [],
        email:'', 
        password:''
    }
    componentWillMount(){}

    onInputChange = (event) => {
        let {newUser} = this.state;
        newUser[event.target.name] = event.target.value;
        this.setState({
            newUser
        });
    }

    onEPChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    signUpUser = (event) => {
        event.preventDefault();
        this.props.signUpUser(this.state.newUser);
    }

    render() {
        const {motherEscolaridad, motherWorkPhone, motherWork, motherPhone, motherEmail, motherMunicipio, motherState, motherCP, 
            motherColonia, motherapellidoP, motherapellidoM, motherName, motherStreet, motherNoExt, motherNoInt,
            fatherEscolaridad, fatherWorkPhone, fatherWork, fatherPhone, fatherEmail, fatherMunicipio, fatherState, fatherCP, 
            fatherColonia, fatherapellidoP, fatherapellidoM, fatherName, name, apellidoP, apellidoM, CURP, tipoDeSangre,
            birthday, weight, street, fatherStreet, fatherNoExt, fatherNoInt, noExt, noInt, cruce1, cruce2, colonia, CP, municipio, 
            emergencyPhone, emergencyContact, phone, height, nacionalidad, grade, persona1,
            persona2, persona3, parentesco1, parentesco2, parentesco3, email, password} = this.state.newUser;
        return (
            <div className="inner">
            <Header title="Bienvenido!" />
            <section>
                    <p>
                        Para comenzar a formar parte de nuestra institucion solo te pedimos los siguientes 
                        datos, que requerimos para comenzar tu tramite de ingreso y contactarnos contigo,
                        porfavor llena todos los campos con informacion correcta y verdadera.
                        El correo y la contraseña proporcionadas los podras usar para acceder a este portal, para revisar como va tu tramite
                        y al ser aceptado usaras estas mismas credenciales para poder acceder y usar todos los servicios de la pagina.
                    </p>
                    <form onSubmit={this.signUpUser}>
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Email: <input id="email" name="email" value={email} onChange={this.onInputChange} type="email" placeholder="Email" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Contraseña: <input id="password" name="password" value={password} onChange={this.onInputChange} type="password" placeholder="Contraseña" pattern=".{6,}" required title="Minimo 6 caracteres de longitud" />
                            </div>
                        </div>
                        <br />
                        <div className="12u$">
                            Grado:
                            <div className="select-wrapper">
                                <select id="grade" name="grade" value={grade} onChange={this.onInputChange} required>
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
                            Nombre: <input id="name" name="name" value={name} onChange={this.onInputChange} type="text" placeholder="Nombre(s)" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Apellido Paterno: <input id="apellidoP" name="apellidoP" value={apellidoP} onChange={this.onInputChange} type="text" placeholder="Apellido Paterno" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Apellido Materno: <input id="apellidoM" name="apellidoM" value={apellidoM} onChange={this.onInputChange} type="text" placeholder="Apellido Materno" required />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                CURP: <input id="CURP" name="CURP" value={CURP} onChange={this.onInputChange} type="text" placeholder="CURP" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Tipo de sangre:
                                <div className="select-wrapper">
                                    <select id="tipoDeSangre" name="tipoDeSangre" value={tipoDeSangre} onChange={this.onInputChange} required>
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
                                Nacionalidad: <input id="nacionalidad" name="nacionalidad" value={nacionalidad} onChange={this.onInputChange} type="text" placeholder="Nacionalidad" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Fecha de nacimiento: <input id="birthday" name="birthday" value={birthday} onChange={this.onInputChange} placeholder="Fecha de nacimiento"  type="date" required />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Peso: <input id="weight" name="weight" value={weight} onChange={this.onInputChange} type="text" placeholder="Peso" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Altura: <input id="height" name="height" value={height} onChange={this.onInputChange} type="text" placeholder="Estatura" required />
                            </div>
                        </div>
                        <br />
                        <div className="12u$">
                            Calle: <input id="street" name="street" value={street} onChange={this.onInputChange} type="text" placeholder="Calle" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Nº exterior: <input id="noExt" name="noExt" value={noExt} onChange={this.onInputChange} type="text" placeholder="Numero Exterior" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Nº interior: <input id="noInt" name="noInt" value={noInt} onChange={this.onInputChange} type="text" placeholder="Numero Interior" required />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Cruce 1: <input id="cruce1" name="cruce1" value={cruce1} onChange={this.onInputChange} type="text" placeholder="Calle que cruza N°1" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Cruce 2: <input id="cruce2" name="cruce2" value={cruce2} onChange={this.onInputChange} type="text" placeholder="Calle que cruza N°2" />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Colonia: <input id="colonia" name="colonia" value={colonia} onChange={this.onInputChange} type="text" placeholder="Colonia" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Codigo postal:<input id="CP" name="CP" value={CP} onChange={this.onInputChange} type="text" placeholder="Codigo postal" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Municipio: <input id="municipio" name="municipio" value={municipio} onChange={this.onInputChange} type="text" placeholder="Municipio" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Telefono: <input id="phone" name="phone" value={phone} onChange={this.onInputChange} type="text" placeholder="Telefono" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                En caso de emergencia llamar a: <input id="emergencyContact" name="emergencyContact" value={emergencyContact} onChange={this.onInputChange} type="text" placeholder="Nombre de contacto de emergencia" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Telefono de emergencia: <input id="emergencyPhone" name="emergencyPhone" value={emergencyPhone} onChange={this.onInputChange} type="text" placeholder="Telefono de contacto de emergencia" required/>
                            </div>
                        </div>
                        <br />
                        <h1>Datos del padre o tutor:</h1>
                        <br/>
                        <div className="12u$">
                            Nombre: <input id="fatherName" name="fatherName" value={fatherName} onChange={this.onInputChange} type="text" placeholder="Nombre(s)" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Apellido Paterno: <input id="fatherapellidoP" name="fatherapellidoP" value={fatherapellidoP} onChange={this.onInputChange} type="text" placeholder="Apellido Paterno" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Apellido Materno: <input id="fatherapellidoM" name="fatherapellidoM" value={fatherapellidoM} onChange={this.onInputChange} type="text" placeholder="Apellido Materno" required />
                            </div>
                        </div>
                        <br />
                        <div className="12u$">
                            Calle: <input id="fatherStreet" name="fatherStreet" value={fatherStreet} onChange={this.onInputChange} type="text" placeholder="Calle" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Nº exterior: <input id="fatherNoExt" name="fatherNoExt" value={fatherNoExt} onChange={this.onInputChange} type="text" placeholder="Numero Exterior" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Nº interior: <input id="fatherNoInt" name="fatherNoInt" value={fatherNoInt} onChange={this.onInputChange} type="text" placeholder="Numero Interior" required />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Colonia: <input id="fatherColonia" name="fatherColonia" value={fatherColonia} onChange={this.onInputChange} type="text" placeholder="Colonia" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Codigo postal:<input id="fatherCP" name="fatherCP" value={fatherCP} onChange={this.onInputChange} type="text" placeholder="Codigo postal" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Municipio: <input id="fatherMunicipio" name="fatherMunicipio" value={fatherMunicipio} onChange={this.onInputChange} type="text" placeholder="Municipio" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Estado: <input id="fatherState" name="fatherState" value={fatherState} onChange={this.onInputChange} type="text" placeholder="Estado" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Telefono de casa: <input id="fatherPhone" name="fatherPhone" value={fatherPhone} onChange={this.onInputChange} type="text" placeholder="Telefono de casa" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                E-mail: <input id="fatherEmail" name="fatherEmail" value={fatherEmail} onChange={this.onInputChange} type="text" placeholder="E-mail" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Ocupacion: <input id="fatherWork" name="fatherWork" value={fatherWork} onChange={this.onInputChange} type="text" placeholder="Ocupacion" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Telefono trabajo: <input id="fatherWorkPhone" name="fatherWorkPhone" value={fatherWorkPhone} onChange={this.onInputChange} type="text" placeholder="Telefono trabajo" />
                            </div>
                        </div>
                        <br/>
                        <div className="12u$">
                            Escolaridad: <input id="fatherEscolaridad" name="fatherEscolaridad" value={fatherEscolaridad} onChange={this.onInputChange} type="text" placeholder="Escolaridad" required />
                        </div>
                        <br />
                        <h1>Datos de la madre:</h1>
                        <br/>
                        <div className="12u$">
                            Nombre: <input id="motherName" name="motherName" value={motherName} onChange={this.onInputChange} type="text" placeholder="Nombre(s)" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Apellido Paterno: <input id="motherapellidoP" name="motherapellidoP" value={motherapellidoP} onChange={this.onInputChange} type="text" placeholder="Apellido Paterno" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Apellido Materno: <input id="motherapellidoM" name="motherapellidoM" value={motherapellidoM} onChange={this.onInputChange} type="text" placeholder="Apellido Materno" required />
                            </div>
                        </div>
                        <br />
                        <div className="12u$">
                            Calle: <input id="motherStreet" name="motherStreet" value={motherStreet} onChange={this.onInputChange} type="text" placeholder="Calle" required />
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Nº exterior: <input id="motherNoExt" name="motherNoExt" value={motherNoExt} onChange={this.onInputChange} type="text" placeholder="Numero Exterior" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Nº interior: <input id="motherNoInt" name="motherNoInt" value={motherNoInt} onChange={this.onInputChange} type="text" placeholder="Numero Interior" required />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Colonia: <input id="motherColonia" name="motherColonia" value={motherColonia} onChange={this.onInputChange} type="text" placeholder="Colonia" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Codigo postal:<input id="motherCP" name="motherCP" value={motherCP} onChange={this.onInputChange} type="text" placeholder="Codigo postal" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Municipio: <input id="motherMunicipio" name="motherMunicipio" value={motherMunicipio} onChange={this.onInputChange} type="text" placeholder="Municipio" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Estado: <input id="motherState" name="motherState" value={motherState} onChange={this.onInputChange} type="text" placeholder="Estado" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Telefono de casa: <input id="motherPhone" name="motherPhone" value={motherPhone} onChange={this.onInputChange} type="text" placeholder="Telefono de casa" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                E-mail: <input id="motherEmail" name="motherEmail" value={motherEmail} onChange={this.onInputChange} type="text" placeholder="E-mail" required/>
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div className="6u 12u$(xsmall)">
                                Ocupacion: <input id="motherWork" name="motherWork" value={motherWork} onChange={this.onInputChange} type="text" placeholder="Ocupacion" required />
                            </div>
                            <div className="6u 12u$(xsmall)">
                                Telefono trabajo: <input id="motherWorkPhone" name="motherWorkPhone" value={motherWorkPhone} onChange={this.onInputChange} type="text" placeholder="Telefono trabajo" />
                            </div>
                        </div>
                        <br/>
                        <div className="12u$">
                            Escolaridad: <input id="motherEscolaridad" name="motherEscolaridad" value={motherEscolaridad} onChange={this.onInputChange} type="text" placeholder="Escolaridad" required />
                        </div>
                        <br />
                        <h1>Personas autorizadas a recoger al alumno(a):</h1>
                        <br />
                        <div className="row uniform">
                            <div  className="6u 12u$(xsmall)" >
                                Nombre: <input id="persona1" name="persona1" value={persona1} onChange={this.onInputChange} type="text"  required title="Es necesario por lo menos una persona autorizada" />
                            </div>
                            <div  className="6u 12u$(xsmall)" >
                                Parentesco: <input id="parentesco1" name="parentesco1" value={parentesco1} onChange={this.onInputChange} type="text"  required title="Es necesario por lo menos una persona autorizada" />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div  className="6u 12u$(xsmall)" >
                                Nombre: <input id="persona2" name="persona2" value={persona2} onChange={this.onInputChange} type="text" />
                            </div>
                            <div  className="6u 12u$(xsmall)" >
                                Parentesco: <input id="parentesco2" name="parentesco2" value={parentesco2} onChange={this.onInputChange} type="text"  />
                            </div>
                        </div>
                        <br />
                        <div className="row uniform">
                            <div  className="6u 12u$(xsmall)" >
                                Nombre: <input id="persona3" name="persona3" value={persona3} onChange={this.onInputChange} type="text" />
                            </div>
                            <div  className="6u 12u$(xsmall)" >
                                Parentesco: <input id="parentesco3" name="parentesco3" value={parentesco3} onChange={this.onInputChange} type="text" />
                            </div>
                        </div>
                        <br />
                        <div className="12u$">
                            <ul className="actions">
                                <li><input type="submit" className="special" value="Listo"/></li>
                                <li><input type="reset" value="Borrar"/></li>
                            </ul>
                        </div>
                    </form>
            </section>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

export default RegistroAspirante = connect(mapStateToProps,{signUpUser})(RegistroAspirante);
