const express = require('express')
const router = express.Router();
const patientsData = require('../data/patient')

router.get("/", (req, res) => {
    res.status(200).json(patientsData.getAllPatients())
})

router.get("/:dni", (req, res) => {
    const patient = patientsData.getPatientByDni(req.params.dni)
    if (patient) {
        res.status(200).json(patient)
    }
    else {
        res.status(404).send("Patient not found")
    }
})

router.post("/", (req, res) => {
    const newPatient = req.body;
    const createdPatient = patientsData.addPatient(newPatient);

    if (createdPatient) {
        res.status(201).json(createdPatient);
    } else {
        res.status(400).send("Invalid patient data")
    }
})

router.put("/:dni", (req, res) => {
    const updatedPatient = patientsData.updatePatient(req.params.dni, req.body);
    if (updatedPatient) {
        res.status(201).json(updatedPatient);
    } else {
        res.status(400).send("Invalid patient data or patient not found")
    }
})

router.delete("/:dni", (req, res) => {
    const deleted = patientsData.deletePatient(req.params.dni);
    if (deleted) {
        res.status(200).send("Patient deleted successfully");
    } else {
        res.status(404).send("Patient not found");
    }
})

module.exports = router;