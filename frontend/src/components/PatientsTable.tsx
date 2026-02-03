import { useEffect, useState } from "react";
import { getAllPatients } from "../services/patients-service";
import type { Patient } from "../types/patient";
import clsx from "clsx";

interface Props {
  selectedPatient: Patient | null;
  onSelectPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
}

const PatientsTable = ({ selectedPatient, onSelectPatient }: Props) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllPatients().then((data) => {
      if (data) setPatients(data);
      else setError(true);
    });
  }, []);

  const onClickPatient = (patient: Patient) => {
    if (patient) onSelectPatient(patient);
  };

  if (error) {
    return <div>Error cargando pacientes</div>;
  }

  return (
    <div>
      <table className="border-collapse border-spacing-2 bg-white text-xl border-black border-4 text-center">
        <thead className="bg-blue-600 text-white font-semibold">
          <tr>
            <th className="border-black border-4 p-4">DNI</th>
            <th className="border-black border-4 p-4">Nombre</th>
            <th className="border-black border-4 p-4">Apellidos</th>
            <th className="border-black border-4 p-4">Dirección</th>
            <th className="border-black border-4 p-4">Localidad</th>
            <th className="border-black border-4 p-4">Codigo Postal</th>
            <th className="border-black border-4 p-4">Teléfono</th>
          </tr>
        </thead>
        <tbody className="bg-blue-300">
          {patients.map((patient) => (
            <tr
              key={patient.dni}
              className={clsx(
                "hover:bg-blue-400 cursor-pointer",
                selectedPatient?.dni === patient.dni && "bg-blue-500",
              )}
              onClick={() => onClickPatient(patient)}
            >
              <td className="border-2 border-gray-700 p-8">{patient.dni}</td>
              <td className="border-2 border-gray-700 p-8">{patient.name}</td>
              <td className="border-2 border-gray-700 p-8">
                {patient.surname}
              </td>
              <td className="border-2 border-gray-700 p-8">
                {patient.address}
              </td>
              <td className="border-2 border-gray-700 p-8">
                {patient.locality}
              </td>
              <td className="border-2 border-gray-700 p-8">{patient.cp}</td>
              <td className="border-2 border-gray-700 p-8">{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsTable;
