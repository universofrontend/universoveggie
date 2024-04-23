import React from 'react';

const NavbarItem = ({ url, children }) => {
  return (
    <a href={url} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  );
}

export default NavbarItem;
