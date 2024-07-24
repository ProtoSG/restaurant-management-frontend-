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
    <div className={`py-3 px-2 rounded-xl ${isSelected ? " bg-bg-100" : "bg-bg-200"}  relative`}>
      <Link
        onClick={onClick}
        to={`/${link}`}
        className={`size-16  m-auto flex items-center justify-center rounded-xl hover:bg-primary hover:text-white transition-colors ${isSelected ? "bg-primary text-white" : "text-primary"}`}
      >
        {icon}
      </Link>
      {
        isSelected && (
          <span className="
            bg-bg-100 w-6 h-full absolute -right-4 top-0
            before:content-[''] before:absolute before:size-5 before:-top-5 before:right-0  before:rounded-br-xl before:shadow-[0px_10px_0_0_#252836]
            after:content-[''] after:absolute after:size-5  after:-bottom-5 after:right-0  after:rounded-tr-xl after:shadow-[0px_-10px_0_0_#252836]
          "></span>
        )
      }
    </div>
  )
}

