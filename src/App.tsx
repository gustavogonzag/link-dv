import './App.css'
import logodv from '/logo-dv.png'
import { IoBag } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

function App() {

  return (
    <div className='min-h-screen w-ful bg-verde-dv bg-cover'>

      <div className='flex flex-col items-center'>

        <img className='size-4/5' src={logodv} alt="logodeliciavegana" />

        <a href="https://fooduai.com.br/menu-delicia-vegana">
          <button className="bg-amarelo w-80 h-14 rounded flex items-center justify-center mt-10">
            <div className="flex items-center">
              <IoBag className="text-3xl mr-2" id='icon' />
              <p className="text-3xl font-bold">FAZER PEDIDO</p>
            </div>
          </button>
        </a>

        <a href="https://www.canva.com/link?target=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5573991384112&design=DAETOp9H640&accessRole=owner&linkSource=document">
          <button className="bg-branco w-80 h-14 rounded flex items-center justify-center mt-10">
            <div className="flex items-center">
              <IoLogoWhatsapp className="text-3xl mr-2" id='icon2' />
              <p className="text-3xl font-bold text-verde">FALE CONOSCO</p>
            </div>
          </button>
        </a>

        <div className='mt-10 flex flex-col text-center'>
          <p>Comida vegana, saudável e <strong>deliciosa!</strong></p>
          <p className='italic'>Sem Leite, Sem Ovos, Sem Carnes</p>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <MdLocationPin id='icon3' />
          <p className='italic'>Itabuna-BA</p>
        </div>

        <div className='mt-10'>
          <p><strong>Delícia Vegana</strong> - <span className='italic'>Desde 2018</span></p>
        </div>

      </div>

    </div>
  )
}

export default App
