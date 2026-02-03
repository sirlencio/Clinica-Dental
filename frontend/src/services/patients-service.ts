import apiClient from "../api/axios";
import type { Patient } from "../types/patient";

export const getAllPatients = async (): Promise<Patient[] | null> => {
    try {
        const response = await apiClient.get("/pacientes");
        return response.data;
    } catch (err) {
        console.error(err)
        return null;
    }
}

export const getPatientByDni = async (dni: string): Promise<Patient | null> => {
    try {
        const response = await apiClient.get(`/pacientes/${dni}`)
        return response.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const createPatient = async (newPatient: Patient): Promise<Patient | null> => {
    try {
        const response = await apiClient.post("/pacientes", newPatient)
        return response.data;
    } catch (err) {
        console.error(err)
        return null;
    }
}

export const updatePatient = async (dni: string, editedPatient: Partial<Patient>): Promise<Patient | null> => {
    try {
        const response = await apiClient.put(`/pacientes/${dni}`, editedPatient)
        return response.data;
    } catch (err) {
        console.error(err)
        return null;
    }
}

export const deletePatient = async (dni: string): Promise<Patient | null> => {
    try {
        const response = await apiClient.delete(`/pacientes/${dni}`)
        return response.data;
    } catch (err) {
        console.error(err)
        return null;
    }
}