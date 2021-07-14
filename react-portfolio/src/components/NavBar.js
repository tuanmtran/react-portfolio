import { useState } from 'react';
export const NavbarPage = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <Navbar bgColor="bg-black" textColor="text-white">
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler toggle={toggle} />
      <NavbarCollapse open={open}>
        <NavbarNav position="left">
          <NavbarItem>
            <NavbarLink href="#">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Documents</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">React</NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};
/* Navbar logic */
const style = {
  toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
  navbar: `font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`,
  collapse: {
    default: `md:flex-grow md:items-center md:flex`,
    open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
    close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto`,
  },
  nav: {
    left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
    center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto `,
    right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
  },
};
function Navbar({ bgColor, textColor, children }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}
/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarBrand({ children, href }) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}
function NavbarToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}
function NavbarCollapse({ children, open }) {
  return (
    <div
      className={`${style.collapse.default} 
        ${open ? style.collapse.open : style.collapse.close}  `}
    >
      {children}
    </div>
  );
}
/*
The navbar nav has three positions
 - left
 - center
 - right
* */
function NavbarNav({ children, position }) {
  return <ul className={style.nav[position]}>{children}</ul>;
}
function NavbarItem({ children }) {
  return <li>{children}</li>;
}
/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function NavbarLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}