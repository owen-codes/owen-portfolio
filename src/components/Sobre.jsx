import Projetos from "./Projetos.jsx";
import Logo from '../assets/LogoBig.svg';

export default function Sobre () {
    return (
        <div id="Sobre" className="bg-quaternary py-20 bg-gradient-to-t from-tertiary to-quarternary">
            <div className="max-sm:mx-5 flex gap-16 m-auto max-w-7xl max-xl:flex-wrap max-xl:justify-center ">
                <img className="" src={Logo} alt="Owen Icon" />
                <div className="max-xl:text-center text-4xl font-light">
                    <p>A <span>OWEN</span> é um projeto de soma de <span className="text-secondary font-bold">Design</span> 
                    e <span className="font-bold text-primary">Programação</span> que busca ajudar o crescimento de 
                    empresas por meio do mundo digital oferecendo sites profissionais 
                    e personalizados </p>
                </div>
            </div>
            <Projetos />
        </div>
    )
}