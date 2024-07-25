import { ButtonProps } from "./types/TypeButton";

export default function ButtonOutline({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} border-[1px] border-primary rounded-lg h-12 flex items-center justify-center text-primary font-semibold text-sm
        hover:bg-primary/20 transition-colors`}
    >
      {children}
    </button >
  )
}
