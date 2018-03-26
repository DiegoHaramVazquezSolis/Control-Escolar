import React, { Component } from 'react';
import Header from './../Common/Header';
import firebase from './../../firebase';
import toastr from 'toastr';

const db = firebase.database().ref("BP");

class StudentPayments extends Component {
    state = {
        pagos: {
            enero: false,
            febrero: false,
            marzo: false,
            abril: false,
            mayo: false,
            junio: false,
            septiembre: false,
            octubre: false,
            noviembre: false,
            diciembre: false,
        }
    };

    componentWillMount(){
        db.child("payments").child(this.props.match.params.uid)
        .on("value", pagos => {
            if(!pagos.val()){
                db.child("payments").child(this.props.match.params.uid).set({
                    enero: false,
                    febrero: false,
                    marzo: false,
                    abril: false,
                    mayo: false,
                    junio: false,
                    septiembre: false,
                    octubre: false,
                    noviembre: false,
                    diciembre: false,
                });
            }else{
                this.setState({pagos: pagos.val()});
            }
        });
    }

    onChange = (e) => {
        db.child("payments").child(this.props.match.params.uid)
        .update({[e.target.name]: e.target.checked})
        .then(toastr.success("Cambio guardado exitosamente"))
        .catch((err) => {
            toastr.error("No se pudo realizar el cambio");
            console.log(err);
        });
    }

    render() {
        const {enero, febrero, marzo, abril, mayo, junio,
            septiembre, octubre, noviembre, diciembre,} = this.state.pagos;
        return (
            <div className="inner" >
                <Header title="Situacion de pagos " />
                <section>
                    <table>
                        <thead>
                            <th>Septiembre</th>
                            <th>Octubre</th>
                            <th>Noviembre</th>
                            <th>Diciembre</th>
                            <th>Enero</th>
                            <th>Febrero</th>
                            <th>Marzo</th>
                            <th>Abril</th>
                            <th>Mayo</th>
                            <th>Junio</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input id='septiembre' name='septiembre' type="checkbox" checked={septiembre} onChange={this.onChange} />
                                    <label htmlFor='septiembre'>{septiembre ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='octubre' name='octubre' type="checkbox" checked={octubre} onChange={this.onChange} />
                                    <label htmlFor='octubre'>{octubre ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='noviembre' name='noviembre' type="checkbox" checked={noviembre} onChange={this.onChange} />
                                    <label htmlFor='noviembre'>{noviembre ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='diciembre' name='diciembre' type="checkbox" checked={diciembre} onChange={this.onChange} />
                                    <label htmlFor='diciembre'>{diciembre ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='enero' name='enero' type="checkbox" checked={enero} onChange={this.onChange} />
                                    <label htmlFor='enero'>{enero ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='febrero' name='febrero' type="checkbox" checked={febrero} onChange={this.onChange} />
                                    <label htmlFor='febrero'>{febrero ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='marzo' name='marzo' type="checkbox" checked={marzo} onChange={this.onChange} />
                                    <label htmlFor='marzo'>{marzo ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='abril' name='abril' type="checkbox" checked={abril} onChange={this.onChange} />
                                    <label htmlFor='abril'>{abril ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='mayo' name='mayo' type="checkbox" checked={mayo} onChange={this.onChange} />
                                    <label htmlFor='mayo'>{mayo ? "Pago":"No pago"}</label>
                                </td>
                                <td>
                                    <input id='junio' name='junio' type="checkbox" checked={junio} onChange={this.onChange} />
                                    <label htmlFor='junio'>{junio ? "Pago":"No pago"}</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default StudentPayments;
