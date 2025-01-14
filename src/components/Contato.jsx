import LogoInstragram from '../assets/Instagram.svg';
import LogoFacebook from '../assets/Facebook.svg';
import LogoYoutube from '../assets/Youtube.svg';
import LogoTiktok from '../assets/Tiktok.svg';

export default function Contato(options) {  
    return (
        <div id='Contatos' className="max-xl:flex-wrap max-xl:justify-center flex justify-between mx-24 gap-20 max-sm:mx-5">
            <div className="bg-primary rounded-3xl pb-28">
                <form action="" className="mt-32 flex flex-col items-center px-24 max-lg:px-5">
                    <h2 className='mb-12 text-5xl font-bold'>Entre em contato!</h2>
                    <input className="py-3 pl-5 w-[500px] rounded-xl text-black max-sm:w-[300px]" placeholder="Seu nome" type="text" id="nome" name="nome" required /><br />
                    <input className="py-3 pl-5 w-[500px] rounded-xl text-black max-sm:w-[300px]" placeholder="Seu e-mail" type="email" id="email" name="email" required /><br />
                    <textarea className="py-3 pl-5 w-[500px] h-[230px] rounded-xl text-black max-sm:w-[300px]" placeholder="mensagem" id="mensagem" name="mensagem" required></textarea><br />
                    <input className='py-3 w-[500px] bg-secondary rounded-xl font-bold max-sm:w-[300px]' type="submit" value="Enviar" />
                </form>
            </div>
            <div className="mx-5 flex flex-col justify-center">
                <div>
                    <h3 className='text-5xl'>Converse com a gente</h3>
                    <p className='mb-7 font-extralight text-4xl'>para explorar o máximo de vendas e conhecimento da sua marca.</p>
                    <a className='text-4xl bg-secondary py-2 px-3 rounded font-bold' href="">mande uma mensagem</a>
                </div>
                <div className="mt-12 border-t-2">
                    <h3 className='mt-5 mb-7 text-5xl'>Redes sociais</h3>
                    <ul className='flex gap-5 '>
                        <li className=' bg-secondary p-2 rounded-lg'><a href=""><img className='w-10 h-10' src={LogoInstragram} alt="Instagram Icon" /></a></li>
                        <li className=' bg-secondary p-2 rounded-lg'><a href=""><img className='w-10 h-10' src={LogoFacebook} alt="Facebook Icon" /></a></li>
                        <li className=' bg-secondary p-2 rounded-lg'><a href=""><img className='w-10 h-10' src={LogoYoutube} alt="Youtube Icon" /></a></li>
                        <li className=' bg-secondary p-2 rounded-lg'><a href=""><img className='w-10 h-10' src={LogoTiktok} alt="Tiktok Icon" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


