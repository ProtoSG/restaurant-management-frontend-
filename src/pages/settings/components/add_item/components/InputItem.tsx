interface InputItemProps {
  placeholder: string
  name: string
  type: string
  onChange: (e: any) => void
}
export default function InputItem({ placeholder, name, type, onChange }: InputItemProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
      className="w-full rounded-lg focus:outline-none border-[1px] border-stroke px-4 h-12 text-white bg-bg-300/40"
    />
  )
}

