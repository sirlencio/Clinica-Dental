import { useState } from "react";
import PatientsTable from "../components/PatientsTable";
import type { Patient } from "../types/patient";
import { Link, useNavigate } from "react-router";
import DeletePatientDialog from "../components/DeletePatientDialog";
import { deletePatient } from "../services/patients-service";

const PatientsPage = () => {
  const navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const onEditPatient = () => {
    if (selectedPatient) navigate(`/pacientes/${selectedPatient.dni}/editar`);
  };

  const onDeletePatient = () => {
    if (selectedPatient) deletePatient(selectedPatient.dni);
    window.location.reload();
  };

  return (
    <div className="flex flex-col gap-8 justify-center">
      <section className="flex p-8 mt-8 justify-center">
        <PatientsTable
          selectedPatient={selectedPatient}
          onSelectPatient={setSelectedPatient}
        />
      </section>

      <section className="flex flex-row gap-2 justify-around mx-64 p-16">
        <Link
          to={"/pacientes/nuevo"}
          className="border rounded-2xl font-bold p-8 text-white bg-blue-500 hover:bg-blue-600"
        >
          Añadir
        </Link>
        <button
          className="border rounded-2xl font-bold p-8 text-white bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          disabled={!selectedPatient}
          onClick={onEditPatient}
        >
          Modificar
        </button>
        <DeletePatientDialog
          isDisabled={!selectedPatient}
          onConfirm={onDeletePatient}
        />
      </section>
    </div>
  );
};

export default PatientsPage;
