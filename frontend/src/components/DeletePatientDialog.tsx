import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  onConfirm: () => void;
  isDisabled: boolean;
}

const DeletePatientDialog = ({ onConfirm, isDisabled }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="destructive" 
          size="lg" 
          className="h-12 px-8 font-bold"
          disabled={isDisabled}
        >
          <Trash2 className="mr-2 h-5 w-5" />
          Eliminar
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle className="text-xl">¿Eliminar paciente?</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Esta acción no se puede deshacer. Se eliminarán permanentemente los 
            datos del paciente de la base de datos de Dental Time.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-4 mt-4">
          <DialogTrigger asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogTrigger>
          
          <Button 
            variant="destructive" 
            onClick={onConfirm}
          >
            Sí, eliminar permanentemente
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePatientDialog;