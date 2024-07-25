import IconChartPie from "../../../assets/icons/IconChartPie"
import IconHome from "../../../assets/icons/IconHome"
import IconSettings from "../../../assets/icons/IconSettings"
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
    "icon": <IconSettings />,
    "link": "settings",
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


