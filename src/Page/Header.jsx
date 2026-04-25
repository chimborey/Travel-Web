import { useEffect, useState } from "react";
import Logo from "../Components/Header/Logo";
import Menu from "../Components/Header/Menu";
import ClickMenu from "../Components/Header/ClickMenu";
import ClickMenuMobile from "../Components/Header/ClickMenuMobile";




export default function Header() {
  // scroll to top when the page is refreshed
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={` w-full top-0 left-0 fixed z-50  shadow-md backdrop-blur-3xl shadow-gray-400 ${scrolled ? '' : ''}`}>
      <nav className=" h-14 container flex justify-between items-center">
        <Logo />
        <Menu />
        <ClickMenu />
        <ClickMenuMobile />
      </nav>
    </section>
  )
}