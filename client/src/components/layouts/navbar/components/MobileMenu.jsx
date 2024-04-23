import NavbarItem from './NavbarItem';

const MobileMenu = ({ isOpen, menuItems }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems?.map((item, index) => (
          <NavbarItem key={index} url={item.href}>
            {item.label}
          </NavbarItem>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
