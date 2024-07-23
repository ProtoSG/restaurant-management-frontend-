import LogoContainer from "./components/LogoContainer.sidebar"
import LogOut from "./components/LogOut.sidebar"
import Navbar from "./components/Navbar.sidebar"

export const Sidebar = () => {
  return (
    <header className="w-28 min-w-28 h-full bg-bg-200 flex flex-col items-center justify-between py-4 rounded-2xl">
      <div className="flex flex-col gap-8 items-center">
        <LogoContainer />
        <Navbar />
      </div>
      <LogOut />
    </header>
  )
}

