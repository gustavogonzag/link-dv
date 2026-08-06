import './App.css'
import logodv from '/logo-dv.png'
import { IoBag, IoLogoWhatsapp } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'

function App() {
  return (
    <main className="page">
      <div className="content">
        <img className="logo" src={logodv} alt="Delícia Vegana" />

        <section className="links" aria-label="Links de atendimento">
          <div
            className="link-button order-button disabled"
            aria-disabled="true"
            title="Pedidos pelo site indisponíveis temporariamente"
          >
            <IoBag className="button-icon" aria-hidden="true" />
            <span>FAZER PEDIDO</span>
          </div>
          <p className="availability-note">Indisponível temporariamente</p>

          <a
            className="link-button whatsapp-button"
            href="https://wa.me/5573991384112"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer pedido pelo WhatsApp"
          >
            <IoLogoWhatsapp className="button-icon" aria-hidden="true" />
            <span>PEDIR PELO WHATSAPP</span>
          </a>
          <p className="whatsapp-note">No momento, todos os pedidos são feitos pelo WhatsApp.</p>
        </section>

        <section className="description">
          <p>Comida vegana, saudável e <strong>deliciosa!</strong></p>
          <p className="italic">Sem Leite, Sem Ovos, Sem Carnes</p>
        </section>

        <div className="location">
          <MdLocationPin className="location-icon" aria-hidden="true" />
          <p className="italic">Itabuna-BA</p>
        </div>

        <footer>
          <p><strong>Delícia Vegana</strong> - <span className="italic">Desde 2018</span></p>
        </footer>
      </div>
    </main>
  )
}

export default App
