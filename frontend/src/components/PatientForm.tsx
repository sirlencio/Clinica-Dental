import type { FormEvent } from "react";
import type { Patient } from "../types/patient";

interface Props {
  isEditing: boolean;
  patient: Patient | null;
  setPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
  onSubmitForm: (e: FormEvent) => void;
}

const PatientForm = ({isEditing, patient, setPatient, onSubmitForm}: Props) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPatient((prev) => ({
      ...(prev ?? {
        dni: "",
        name: "",
        surname: "",
        address: "",
        locality: "",
        cp: "",
        phone: "",
      }),
      [name]: value,
    }));
  };

  const inputClass =
    "border border-gray-300 rounded-xl px-4 py-2 text-gray-800 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
    "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed";

  const labelClass = "text-sm font-semibold text-gray-700 mb-1";

  return (
    <form
      onSubmit={onSubmitForm}
      className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-2xl shadow-2xl flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {isEditing ? "Editar paciente" : "Nuevo paciente"}
      </h2>

      <div className="flex flex-col">
        <label className={labelClass}>DNI</label>
        <input
          name="dni"
          value={patient?.dni ?? ""}
          onChange={handleChange}
          disabled={isEditing}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Nombre</label>
        <input
          name="name"
          value={patient?.name ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Apellidos</label>
        <input
          name="surname"
          value={patient?.surname ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Dirección</label>
        <input
          name="address"
          value={patient?.address ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Localidad</label>
        <input
          name="locality"
          value={patient?.locality ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Código Postal</label>
        <input
          name="cp"
          value={patient?.cp ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Teléfono</label>
        <input
          name="phone"
          value={patient?.phone ?? ""}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {isEditing ? "Guardar cambios" : "Crear paciente"}
      </button>
    </form>
  );
};

export default PatientForm;
