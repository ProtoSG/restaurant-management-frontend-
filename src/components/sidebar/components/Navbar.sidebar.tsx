import IconChartPie from "../../../assets/icons/IconChartPie"
import IconFish from "../../../assets/icons/IconFish"
import IconHome from "../../../assets/icons/IconHome"
import ItemContainer, { ItemContainerProps } from "./ItemContainer.sidebar"

const links: Array<ItemContainerProps> = [
  {
    "icon": <IconHome />,
    "link": ""
  },
  {
    "icon": <IconChartPie />,
    "link": "dashboard"
  },
  {
    "icon": <IconFish />,
    "link": "dishes",
  }
]


export default function Navbar() {
  return (
    <nav className="flex flex-col gap-8">
      {
        links.map((link) => (
          <ItemContainer
            key={link.link}
            icon={link.icon}
            link={link.link}
          />
        ))
      }
    </nav>
  )
}


