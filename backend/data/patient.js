const patients = [
    {
        dni: "33448876H",
        name: "Pedro",
        surname: "Gomez Romero",
        address: "Calle Las Flores 23",
        locality: "Huelva",
        cp: "21001",
        phone: "777889912"
    },
    {
        dni: "39393939A",
        name: "Luis",
        surname: "Perez Guzman",
        address: "Calle Miraflor 23",
        locality: "Huelva",
        cp: "21001",
        phone: "901929129"
    },
    {
        dni: "67451129K",
        name: "María",
        surname: "Lopez Peral",
        address: "Avenida Andalucia 22",
        locality: "Sevilla",
        cp: "21003",
        phone: "13213234"
    }
]

const getAllPatients = () => {
    return patients;
}

const getPatientByDni = (dni) => {
    return patients.find(patients => patients.dni === dni);
}

const addPatient = (patient) => {
    patients.push(patient)
    return patient;
}

const updatePatient = (dni, updatedPatient) => {
    const index = patients.findIndex(patients => patients.dni === dni);
    if (index !== -1) {
        patients[index] = { ...patients[index], ...updatedPatient };
        return patients[index];
    }
    return null;
}

const deletePatient = (dni) => {
    const index = patients.findIndex(patients => patients.dni === dni);
    if (index !== -1) {
        patients.splice(index, 1)
        return true;
    }
    return false;
}

module.exports = {
    getAllPatients,
    getPatientByDni,
    addPatient,
    updatePatient,
    deletePatient
}