import React, {Component} from "react";
import ImageInput from "../ui/ImageInput.js";
import serializeForm from 'form-serialize';
import {connect} from 'react-redux';
import {createPatient} from "../redux/patients/patients_actions";
import {Redirect} from "react-router-dom";

class CreatePatient extends Component {
    state = {toPatients: false}
    handleSubmit = (e) => {

        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        values.id = Math.floor(Math.random() * 100000).toString();
        this.props.createPatient(values);
        this.setState({toPatients: true});
    }

    render() {
        if (this.state.toPatients)
            return <Redirect to='/patients'/>
        return <div >
            <div>
                <form onSubmit={this.handleSubmit} className='create-contact-form jumbotron ' >
                    <ImageInput className='create-contact-avatar-input' name='avatarURL' maxHeight={64}/>
                    <div className='create-contact-details'>
                        <input name='name' placeholder='Name' type='text'/>
                        <input name='email' placeholder='email' type='text'/>
                        <button>Add Patient</button>
                    </div>
                </form>
            </div>
            <div className='row '>

                <div className='col-3'></div>
                <form className='p-5 col-6' style={{border:'2px solid black'}}>
                    <h1>Examination Sheet</h1>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Diagnosis</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Laboratory and radiological investigation</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>X-Ray</option>
                            <option>MRI</option>
                            <option>CT</option>
                            <option>US</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                        <select multiple className="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formControlRange">Satisfaction</label>
                        <input type="range" className="form-control-range" id="formControlRange"/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Disabled checkbox
                        </label>
                    </div>
                </form>
                <div className='col-3'></div></div>
        </div>

    }

}


function mapStateToProps(state) {
    return {patients: state.patients}
}

function mapDispatchToProps(dispatch) {
    return {
        createPatient: (data) => dispatch(createPatient(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);