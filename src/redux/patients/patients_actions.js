import * as PatientsApi from '../../api/patients/patientsApi';
import patients from "./patients_reducer";

export const ADD_PATIENT = 'ADD_PATIENT';
export const REMOVE_PATIENT = 'REMOVE_PATIENT';
export const LOAD_ALL_PATIENTS = 'LOAD_ALL_PATIENTS';

export function createPatient(patient) {
    return {
        type: ADD_PATIENT,
        patient
    }
}

export function removePatient(patient) {
    return {
        type: REMOVE_PATIENT,
        patient
    }

}

export function fetchPatients(patients) {
    return {
        type: LOAD_ALL_PATIENTS,
        patients
    }
}

export const loadAll = () => dispatch => {
    PatientsApi.getAll().then(patients => dispatch(fetchPatients(patients)));
}