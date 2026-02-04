import type { Patient } from "../types/patient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { Save, UserPlus, XCircle } from "lucide-react";
import { useNavigate } from "react-router";
import { patientSchema } from "@/schemas/patient-schema";
import { toast } from "sonner";

interface Props {
  isEditing: boolean;
  patient: Patient | null;
  setPatient: React.Dispatch<React.SetStateAction<Patient | null>>;
  onSubmit: (data: Patient) => void;
}

const PatientForm = ({ isEditing, patient, setPatient, onSubmit }: Props) => {
  const navigate = useNavigate();

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

  const handleLocalSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!patient) return;

    const result = patientSchema.safeParse(patient);

    if (!result.success) {
      result.error.issues.forEach((err) => {
        toast.error(err.message, {
          description: `Campo: ${err.path.join(".")}`,
        });
      });
      return;
    }

    onSubmit(patient);
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-lg border-2 mt-8">
      <CardContent className="pt-6">
        <form onSubmit={handleLocalSubmit}>
          <FieldSet>
            <FieldLegend className="text-2xl font-bold mb-6 text-primary">
              {isEditing
                ? "Modificar Datos del Paciente"
                : "Registro de Nuevo Paciente"}
            </FieldLegend>

            <FieldGroup className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>DNI / Identificación</FieldLabel>
                  <Input
                    name="dni"
                    placeholder="Ej: 12345678X"
                    value={patient?.dni ?? ""}
                    onChange={handleChange}
                    disabled={isEditing}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Nombre</FieldLabel>
                  <Input
                    name="name"
                    placeholder="Nombre del paciente"
                    value={patient?.name ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Apellidos</FieldLabel>
                  <Input
                    name="surname"
                    placeholder="Apellidos completos"
                    value={patient?.surname ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Teléfono de Contacto</FieldLabel>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Ej: 600 000 000"
                    value={patient?.phone ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel>Dirección</FieldLabel>
                <Input
                  name="address"
                  placeholder="Calle, número, piso..."
                  value={patient?.address ?? ""}
                  onChange={handleChange}
                  required
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Localidad</FieldLabel>
                  <Input
                    name="locality"
                    placeholder="Ciudad"
                    value={patient?.locality ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>Código Postal</FieldLabel>
                  <Input
                    name="cp"
                    placeholder="Ej: 28001"
                    value={patient?.cp ?? ""}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </div>
            </FieldGroup>

            <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 border-t pt-6">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full md:w-auto font-bold px-12 border-2 hover:bg-muted"
                onClick={() => navigate("/pacientes")}
              >
                <XCircle className="mr-2 h-5 w-5" /> Cancelar
              </Button>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto font-bold px-12 shadow-md"
              >
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-5 w-5" /> Guardar Cambios
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 h-5 w-5" /> Crear Paciente
                  </>
                )}
              </Button>
            </div>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  );
};

export default PatientForm;
