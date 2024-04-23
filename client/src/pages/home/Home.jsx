import Navbar from "../../components/layouts/navbar/Navbar"
import { menuItems } from "../../data/MenuItems"

const Home = () => {
  return (
    <Navbar menuItems={menuItems} />
  )
}

export default Home