import {
    ADD_PATIENT, LOAD_ALL_PATIENTS, REMOVE_PATIENT
} from "./patients_actions";

let initialState = {
    patients: []
}

const patients = (state = initialState, action) => {
    const {patient, patients} = action;
    switch (action.type) {
        case LOAD_ALL_PATIENTS:
            return {...state, patients: patients}
        case ADD_PATIENT:
            return {...state, patients: [...state.patients, patient]};
        case REMOVE_PATIENT:
            return {
                ...state,
                patients: state.patients.filter((c) => c.id !== patient.id)
            }

        default:
            return {...state};

    }
}
export default patients;