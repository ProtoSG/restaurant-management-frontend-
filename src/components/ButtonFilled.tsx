import { ButtonProps } from "./types/TypeButton";

export default function ButtonFilled({ children, onClick, className, type }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} bg-primary border-[1px] border-primary rounded-lg h-12 flex items-center justify-center  text-white font-semibold text-sm
        hover:bg-primary/20 transition-colors
`}
    >
      {children}
    </button >
  )
}
