import { Link } from 'react-router-dom';

const NavbarItem = ({ label, href, icon }) => {
  const Icon = icon;

  return (
    <Link to={href} className="navbar-item">
      <Icon className="navbar-item-icon" />
      <span className="navbar-item-label">{label}</span>
    </Link>
  );
};

export default NavbarItem;
