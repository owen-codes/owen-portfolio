import { useState } from 'react';
import SiteDent from '../assets/site-dental.svg';
import SiteDerma from '../assets/site-dermato.svg';
import SitePet from '../assets/site-pet.svg';
import Logo from '../assets/Logo-red.svg';

export default function Projetos() {
  const images = [SiteDent, SiteDerma, SitePet];
  const [currentIndex, setCurrentIndex] = useState(1); 

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='Projetos' className="max-xl:flex-wrap mt-40 flex m-[10%] justify-center gap-16">
      <div className="text-projects">
        <h2 className="text-6xl">
          Projetos com <br />
          assinatura
        </h2>
        <img src={Logo} alt="Owen Icon" />
      </div>


      <div className=" flex itemss-center max-w-[824px] relative overflow-hidden">

        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 z-10"
        >
          &lt;
        </button>

        <div className="flex transition-all duration-500 ease-in-out">
  
          <div className="w-1/3 flex justify-center">
            <img
              src={images[(currentIndex + 2) % images.length]}
              alt="Projeto"
              className="object-cover transform transition-all duration-500 ease-in-out opacity-70"
            />
          </div>

          <div className="w-1/3 flex justify-center">
            <img
              src={images[currentIndex]}
              alt="Projeto"
              className="object-cover transform scale-110 transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="w-1/3 flex justify-center">
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Projeto"
              className="object-cover transform transition-all duration-500 ease-in-out opacity-70"
            />
          </div>
        </div>

  
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
