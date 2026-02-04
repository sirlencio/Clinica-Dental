import { useState } from "react";
import PatientsTable from "../components/PatientsTable";
import type { Patient } from "../types/patient";
import { Link, useNavigate } from "react-router";
import DeletePatientDialog from "../components/DeletePatientDialog";
import { deletePatient } from "../services/patients-service";
import { Button } from "@/components/ui/button";
import { PlusCircle, Pencil } from "lucide-react";

const PatientsPage = () => {
  const navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const onEditPatient = () => {
    if (selectedPatient) navigate(`/pacientes/${selectedPatient.dni}/editar`);
  };

  const onDeletePatient = () => {
    if (selectedPatient) {
      deletePatient(selectedPatient.dni);
      window.location.reload();
    }
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-8 py-6">
      <section className="bg-card rounded-xl border shadow-sm overflow-hidden">
        <PatientsTable
          selectedPatient={selectedPatient}
          onSelectPatient={setSelectedPatient}
        />
      </section>

      <section className="flex items-center justify-center gap-4 bg-muted/30 p-6 rounded-2xl border border-dashed">
        
        <Button asChild size="lg" className="h-12 px-8 font-bold">
          <Link to="/pacientes/nuevo">
            <PlusCircle className="mr-2 h-5 w-5" />
            Añadir Paciente
          </Link>
        </Button>

        <Button 
          variant="outline" 
          size="lg" 
          className="h-12 px-8 font-bold border-2"
          disabled={!selectedPatient}
          onClick={onEditPatient}
        >
          <Pencil className="mr-2 h-5 w-5" />
          Modificar
        </Button>

        <DeletePatientDialog
          isDisabled={!selectedPatient}
          onConfirm={onDeletePatient}
        />
      </section>
      
      {!selectedPatient && (
        <p className="text-center text-sm text-muted-foreground animate-pulse">
          Selecciona un paciente de la tabla para habilitar las acciones.
        </p>
      )}
    </div>
  );
};

export default PatientsPage;