import { useState, useEffect } from 'react';
import BannerVideo from '../assets/Banner.mp4';
import Logo from '../assets/Vector.svg';
import Camada1 from '../assets/Camada_1.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    
    const handleMenuLinks = () => closeMenu();

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', handleMenuLinks);
    });

    return () => {
      
      menuLinks.forEach((link) => {
        link.removeEventListener('click', handleMenuLinks);
      });
    };
  }, []);

  return (
    <div className="relative h-[100vh]">
      <video
        src={BannerVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="max-sm:hidden absolute top-0 left-0 w-full h-full object-cover"
      />

      <header className="flex justify-between items-center mx-[8%] pt-3 relative">
        <nav className="navbar">
          <ul className="ul-navbar flex gap-10 max-lg:gap-2 items-center font-extralight">
            <li>
              <a href="#">
                <img
                  src={Logo}
                  alt="logo"
                  className="transition-transform duration-300 hover:scale-95"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="max-lg:hidden transition-colors duration-300 hover:bg-primary hover:text-white py-2 px-3 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Sobre"
                className="max-lg:hidden transition-colors duration-300 hover:bg-primary hover:text-white py-2 px-3 rounded"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#Projetos"
                className="max-lg:hidden transition-colors duration-300 hover:bg-primary hover:text-white py-2 px-3 rounded"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#Contatos"
                className="max-lg:hidden transition-colors duration-300 hover:bg-primary hover:text-white py-2 px-3 rounded"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#"
          className="bg-primary py-2 px-3 rounded font-bold transition-colors duration-300 hover:bg-quaternary hover:text-primary"
        >
          Entre em contato!
        </a>
        <button
          className="hamburger hidden bg-none border-none text-2xl cursor-pointer max-md:block"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </header>

     
      {isMenuOpen && (
        <div className="menu fixed top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#452f22] w-full h-full z-20 overflow-y-auto p-4">
          <a
            className="text-white no-underline flex justify-center p-4 hover:bg-white hover:text-black transition duration-600"
            href="#"
          >
            Home
          </a>
          <a
            className="text-white no-underline flex justify-center p-4 hover:bg-white hover:text-black transition duration-600"
            href="#Sobre"
          >
            Sobre
          </a>
          <a
            className="text-white no-underline flex justify-center p-4 hover:bg-white hover:text-black transition duration-600"
            href="#Projetos"
          >
            Projetos
          </a>
          <a
            className="text-white no-underline flex justify-center p-4 hover:bg-white hover:text-black transition duration-600"
            href="#Contatos"
          >
            Contatos
          </a>
        </div>
      )}

      <div className="mt-64 mx-[8%] relative max-lg:bg-black max-lg:bg-opacity-95 max-lg:rounded-3xl max-lg:p-10">
        <img src={Camada1} alt="Logo2" />
        <p className="font-extralight max-w-md text-4xl">
          Para o crescimento da sua marca um site profissional é essencial.
        </p>
        <p className="font-extralight mt-5 max-w-md text-4xl">
          A <span className="font-bold">OWEN</span> está aqui para potencializar
          sua empresa.
        </p>
      </div>
    </div>
  );
}
