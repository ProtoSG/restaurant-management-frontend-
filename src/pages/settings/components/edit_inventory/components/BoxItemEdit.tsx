import IconEdit from "../../../../../assets/icons/IconEdit";
import IconPoint from "../../../../../assets/icons/IconPoint";

export default function BoxItemEdit() {
  return (
    <article className="w-56 h-72 border-[1px] border-stroke rounded-lg flex flex-col justify-between items-center" >
      <img alt="item" />
      <div>
        <h3 className="text-xl text-center font-semibold">Item</h3>
        <div className="text-text text-lg flex items-center gap-2">
          <span>S/ 18.00</span>
          <IconPoint className="size-3 text-white" />
          <span>20 platos</span>
        </div>
      </div>
      <button
        className=" w-full bg-primary/30 h-14 rounded-b-lg text-primary font-semibold flex items-center justify-center gap-4
          hover:bg-primary/10 transition-colors
        ">
        <IconEdit />
        Editar Plato
      </button>
    </article >
  )
}
