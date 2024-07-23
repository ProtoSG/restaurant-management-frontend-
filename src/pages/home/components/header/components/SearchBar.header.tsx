import IconSearch from "../../../../../assets/icons/IconSearch";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <label className="bg-bg-300 border-[1px] border-stroke flex items-center gap-1 px-2 rounded-lg py-1">
        <IconSearch />
        <input
          className="bg-bg-300 px-2 py-2 focus:outline-none"
          type="text"
          placeholder="Buscar por comida, beb...."
        />
      </label>
    </div>
  )
}

