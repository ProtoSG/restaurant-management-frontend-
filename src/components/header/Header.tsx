import LogoContainer from "./components/LogoContainer.header"
import LogOut from "./components/LogOut.header"
import Navbar from "./components/Navbar.header"

export const Header = () => {
  return (
    <header className="w-28 h-full bg-bg-200 flex flex-col items-center justify-between py-4 rounded-2xl">
      <div className="flex flex-col gap-8 items-center">
        <LogoContainer />
        <Navbar />
      </div>
      <LogOut />
    </header>
  )
}

