export default function InputItem({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-lg focus:outline-none border-[1px] border-stroke px-4 h-12 text-white bg-bg-300/40"
    />
  )
}

