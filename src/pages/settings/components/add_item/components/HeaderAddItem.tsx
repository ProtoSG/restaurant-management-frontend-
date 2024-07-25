import IconClose from "../../../../../assets/icons/IconClose";

export default function HeaderAddItem() {

  const handleCloseDialog = async () => {
    const dialog = document.getElementById("dialog-add-item") as HTMLDialogElement;
    dialog.close();
  }

  return (
    <>
      < h5 className=" text-center font-semibold text-2xl pb-8" > Agregar Producto</h5 >
      <span
        onClick={handleCloseDialog}
        className="absolute right-6 top-6 hover:scale-110 hover:cursor-pointer "
      >
        <IconClose />
      </span>
    </>
  )
}
