const patients = [
    {
        dni: "03923317T",
        name: "Pedro",
        surname: "Valenzuela Canovas",
        address: "Avenida Diego Velázquez, 62",
        locality: "Madrid",
        cp: "28981",
        phone: "637460652"
    },
    {
        dni: "29498408B",
        name: "Luis Miguel",
        surname: "Casado Arenas",
        address: "Cuesta Juan Ramón Jiménez, 34",
        locality: "Burgos",
        cp: "09156",
        phone: "756197689"
    },
    {
        dni: "01345470Q",
        name: "Alicia",
        surname: "Hervas Esteve",
        address: "Avenida Real, 65",
        locality: "Alicante",
        cp: "03854",
        phone: "631076719"
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