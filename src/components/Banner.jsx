import sitePet from '../assets/site-pet.svg'

export default function Banner() {
    return (
            <div className="mb-36 m-auto gap-5 max-w-6xl flex justify-center items-center bg-primary text-white rounded-3xl max-sm:mx-3">
                <div className="bg-gray-500 h-[100%] rounded-3xl"><img src={sitePet} alt="Site PetShop" /></div>
                <div className="">
                    <h3 className="text-3xl font-bold">Pra a sua empresa</h3>
                    <p className="text-3xl font-extralight">Pesquisas mostram que um site próprio maximiza vendas e divulgação da sua empresa.  </p>
                </div>
            </div>
    )
}