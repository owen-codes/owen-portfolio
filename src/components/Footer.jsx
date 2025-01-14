import Logo from '../assets/Vector.svg';

export default function Footer(options) {
    return (
        <footer className="mt-60 pb-8 bg-gradient-to-t from-primary to-tertiary" >
                <img className='m-auto' src={Logo} alt="Owen Icon" />
                <div className="mt-32 flex gap-28 font-extralight justify-center max-lg:flex-wrap">
                    <div className="max-w-72 text-center">
                        <img className='w-[110px] h-[45px] m-auto' src={Logo} alt="Owen Icon" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="max-w-72">
                        <h4 className='font-bold'>Contatc Us</h4>
                        <p>(11) 99999-9999</p>
                        <p>(11) contatoemail@gmail.com</p>
                    </div>
                    <div className="max-w-72"> 
                        <h4 className='font-bold'>Horário de funcionamento </h4>
                        <p>Segunda a Sexta</p> 
                        <p>8:00AM - 17:00PM</p>
                    </div>
                   
                </div>
        </footer>
    )
}