import React, {Component} from "react";
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {removePatient,loadAll} from "../redux/patients/patients_actions";

class PatientsList extends Component {
    componentDidMount() {
        this.props.loadAllPatients()
    }

    state = {
        query: '',
    }
    updateQuery = (query) => {
        this.setState({query: query.trim()});
    }


    render() {
        let showingPatients;

        if (this.state.query) {
            const match = RegExp(escapeRegExp(this.state.query), 'i');
            showingPatients = this.props.patients.filter((patient) => match.test(patient.name));
        } else {
            showingPatients = this.props.patients;
        }
        // showingPatients.sort(sortBy('name'));
        return <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input className='search-contacts' type='text' placeholder='search' value={this.state.query}
                       onChange={(e) => this.updateQuery(e.target.value)}/>
                <Link to='/createPatient' className='add-contact'/>
            </div>
            {(showingPatients.length !== this.props.patients.length) ? <div className='showing-contacts'><span>Now showing {showingPatients.length} of {this.props.patients.length}</span>{}
            </div> : <div></div>}
            <ol className='contact-list'>
                {showingPatients.map((patient) => <li className='contact-list-item' key={patient.id}>
                    <div className='contact-avatar' style={{backgroundImage: `url(${patient.avatarURL})`}}>

                    </div>
                    <div className='contact-details'>
                        <p>{patient.name}</p>
                        <p>{patient.email}</p>
                    </div>
                    <button onClick={() => this.props.removePatient(patient)} className='contact-remove'>Remove
                    </button>
                </li>)}
            </ol>
        </div>
    }
}

function mapStateToProps({patients}) {
    return {patients: patients.patients}
}

function mapDispatchToProps(dispatch) {
    return {
        removePatient: (data) => dispatch(removePatient(data)),
        loadAllPatients:()=>dispatch(loadAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsList);