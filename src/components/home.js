import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return <div>
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Clinic</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarHeader"
                                aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>


            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <Link to="/patients" className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                ​
                                <div className="text-center">
                                    <img src={require("../images/patient.jpg")} className="rounded" width="90%"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text" style={{textAlign:'center'}}>Patients</p>
                                </div>
                            </div>
                        </Link>
                        <div className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                ​
                                <div className="text-center">
                                    <img src={require("../images/doctors.jpg")} className="rounded" width="90%"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text" style={{textAlign:'center'}}>Doctor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                ​
                                <div className="text-center">
                                    <img src={require("../images/manager.jpg")} className="rounded" width="90%"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text" style={{textAlign:'center'}}>App Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4 shadow-sm">
                                ​
                                <div className="text-center">
                                    <img src={require("../images/dashboard.jpg")} className="rounded" width="90%"/>
                                </div>
                                <div className="card-body">
                                    <p className="card-text" style={{textAlign:'center'}}>DashBoard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

export default Home;