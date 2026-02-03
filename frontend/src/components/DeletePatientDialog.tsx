import { useRef } from "react";

interface Props {
  onConfirm: () => void;
  isDisabled: boolean;
}

const DeletePatientDialog = ({ onConfirm, isDisabled }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        onClick={openDialog}
        className="border rounded-2xl font-bold p-8 text-white bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
        disabled={isDisabled}
      >
        Eliminar
      </button>

      <dialog
        ref={dialogRef}
        className="rounded-2xl p-6 shadow-xl backdrop:bg-black/40
             fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h3 className="text-lg font-bold mb-4">Eliminar paciente</h3>
        <p className="mb-6 text-gray-600">
          ¿Estás seguro? Esta acción no se puede deshacer.
        </p>

        <div className="flex gap-4 justify-end">
          <button onClick={closeDialog} className="px-4 py-2 rounded-xl border">
            Cancelar
          </button>

          <button
            onClick={() => {
              onConfirm();
              closeDialog();
            }}
            className="px-4 py-2 rounded-xl bg-red-500 text-white"
          >
            Sí, eliminar
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DeletePatientDialog;
