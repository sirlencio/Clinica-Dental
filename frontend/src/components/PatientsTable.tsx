import { useEffect, useState } from "react";
import { getAllPatients } from "../services/patients-service";
import type { Patient } from "../types/patient";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

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

  if (error) {
    return (
      <div className="p-4 text-center text-destructive bg-destructive/10 rounded-lg border border-destructive/20">
        Error cargando pacientes. Por favor, intenta de nuevo.
      </div>
    );
  }

  return (
    <div className="rounded-xl border shadow-sm bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="py-5 px-6 font-bold text-foreground h-14 text-base">DNI</TableHead>
            <TableHead className="py-5 px-6 font-bold text-foreground text-base">Nombre</TableHead>
            <TableHead className="py-5 px-6 font-bold text-foreground text-base">Apellidos</TableHead>
            <TableHead className="py-5 px-6 font-bold text-foreground text-base hidden md:table-cell">Dirección</TableHead>
            <TableHead className="py-5 px-6 font-bold text-foreground text-base hidden lg:table-cell">Localidad</TableHead>
            <TableHead className="py-5 px-6 font-bold text-foreground text-base">Teléfono</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-32 text-center text-lg text-muted-foreground">
                No hay pacientes registrados.
              </TableCell>
            </TableRow>
          ) : (
            patients.map((patient) => (
              <TableRow
                key={patient.dni}
                className={cn(
                  "cursor-pointer transition-all border-b",
                  selectedPatient?.dni === patient.dni 
                    ? "bg-primary/10 hover:bg-primary/15" 
                    : "hover:bg-muted/30"
                )}
                onClick={() => onSelectPatient(patient)}
              >
                <TableCell className="py-6 px-6 font-medium text-base">{patient.dni}</TableCell>
                <TableCell className="py-6 px-6 text-base">{patient.name}</TableCell>
                <TableCell className="py-6 px-6 text-base">{patient.surname}</TableCell>
                <TableCell className="py-6 px-6 text-base hidden md:table-cell text-muted-foreground">
                  {patient.address}
                </TableCell>
                <TableCell className="py-6 px-6 text-base hidden lg:table-cell">
                  {patient.locality}
                </TableCell>
                <TableCell className="py-6 px-6 text-base font-mono font-semibold">
                  {patient.phone}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PatientsTable;