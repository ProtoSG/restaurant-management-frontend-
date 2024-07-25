import IconPlus from "../../../../../assets/icons/IconPlus";

export default function AddItem() {

  const handleOpenDialog = async () => {
    const dialog = document.getElementById("dialog-add-item") as HTMLDialogElement;
    dialog.showModal();
  }

  return (
    <>
      <button
        onClick={handleOpenDialog}
        className="
      w-56 h-72 border-[1px] border-primary border-dashed gap-4 text-primary rounded-lg flex flex-col justify-center items-center focus:outline-none
      hover:bg-primary/20 transition-colors
      ">
        <IconPlus />
        <p className="font-semibold">Agregar nuevo Producto</p>
      </button>
    </>
  )
}

