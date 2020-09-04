import React, {Component} from 'react';
import Home from './components/home'
import * as PatientsApi from "./api/patients/patientsApi";
import PatientsList from "./components/PatientsList";
import {BrowserRouter,Route} from "react-router-dom";
import CreatePatient from "./components/CreatePatient";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <BrowserRouter>
                    <Route path='/' exact component={Home}/>
                    <Route path='/patients' exact render={() => <PatientsList/>}/>
                    <Route path='/createPatient' exact render={() => <CreatePatient />}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
