import IconTrash from "../../../../../assets/icons/IconTrash"

export default function ListOrder() {
  const list = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <>
      <div className="grid grid-cols-6 border-b-2 border-stroke py-6 font-semibold">
        <span className="col-span-4">Plato</span>
        <span className="text-center">Cant.</span>
        <span className="text-center">Precio</span>
      </div>
      <section className="py-6 h-full overflow-y-scroll flex flex-col gap-8 ">
        {list.map((_, i) => (
          <article key={i} className="flex flex-col gap-2 rounded-lg ">
            <div className="grid grid-cols-6 h-12">
              <article className="flex  col-span-4">
                <img alt="image" />
                <div className="px-2">
                  <h5 className="font-medium text-sm">Trio Marino (arroz con...</h5>
                  <small className="text-text font-medium">S/ 18.00</small>
                </div>
              </article>
              <div className="flex items-center justify-center">
                <span className="border-2 size-12 flex items-center justify-center font-medium bg-bg-100 border-stroke rounded-lg">2</span>
              </div>
              <span className="flex items-center font-medium">S/ 36.00</span>
            </div>
            <div className="grid grid-cols-6 h-12">
              <p className="col-span-5 border-2 border-stroke bg-bg-100 px-4 flex items-center rounded-lg overflow-y-scroll">Por favor, sólo un poquito picante.</p>
              <button className="flex items-center justify-center border-[1px] ml-2 rounded-lg border-red size-12 text-red hover:bg-red/50 transition-colors">
                <IconTrash />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
