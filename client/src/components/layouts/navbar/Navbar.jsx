
import { menuItems } from '../../../data/MenuItems';
import NavbarItem from './components/NavbarItem';
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <NavbarItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;