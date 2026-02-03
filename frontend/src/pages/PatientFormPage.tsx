import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PatientForm from "../components/PatientForm";
import type { Patient } from "../types/patient";
import {
  createPatient,
  updatePatient,
  getPatientByDni,
} from "../services/patients-service";

const PatientFormPage = () => {
  const navigate = useNavigate();
  const { dni } = useParams<{ dni: string }>();
  const isEditing = Boolean(dni);

  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (isEditing && dni) {
      getPatientByDni(dni).then((data) => {
        if (data) setPatient(data);
      });
    }
  }, [isEditing, dni]);

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patient) return;

    if (isEditing) {
      await updatePatient(patient.dni, patient);
    } else {
      await createPatient(patient);
    }
    navigate("/pacientes")
  };

  return (
    <section className="p-8">
      <PatientForm
        isEditing={isEditing}
        patient={patient}
        setPatient={setPatient}
        onSubmitForm={onSubmitForm}
      />
    </section>
  );
};

export default PatientFormPage;
