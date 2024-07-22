import { Link, useLocation } from "react-router-dom"

export interface ItemContainerProps {
  icon: JSX.Element,
  link: string,
  onClick?: (() => void)
}

export default function ItemContainer({ icon, link, onClick }: ItemContainerProps) {
  const location = useLocation()
  const isSelected = location.pathname === `/${link}`

  return (
    <Link
      onClick={onClick}
      to={`/${link}`}
      className={`size-16  m-auto flex items-center justify-center rounded-xl transition-all ${isSelected ? "bg-primary text-white" : "text-primary"}`}
    >
      {icon}
    </Link>
  )
}

