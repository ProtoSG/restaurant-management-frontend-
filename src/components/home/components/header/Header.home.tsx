import SearchBar from "./components/SearchBar.header";
import Title from "./components/Title.header";

export default function Header() {

  return (
    <header className="w-full flex justify-between items-center py-8">
      <Title />
      <SearchBar />
    </header>
  )
}

