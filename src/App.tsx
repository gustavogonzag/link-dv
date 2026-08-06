import './App.css'
import logodv from '/logo-dv.png'
import { IoBag, IoLogoWhatsapp } from 'react-icons/io5'
import { MdLocationPin } from 'react-icons/md'

function App() {
  return (
    <main className="page">
      <div className="content">
        <header className="hero">
          <img className="logo" src={logodv} alt="Delícia Vegana" />
          <div className="description">
            <h1>Comida vegana, saudável e <strong>deliciosa!</strong></h1>
            <p>Sem leite, sem ovos, sem carnes</p>
          </div>
        </header>

        <section className="links" aria-label="Links de atendimento">
          <a
            className="link-button whatsapp-button"
            href="https://wa.me/5573991384112?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fazer pedido pelo WhatsApp"
          >
            <IoLogoWhatsapp className="button-icon" aria-hidden="true" />
            <span>FAZER PEDIDO PELO WHATSAPP</span>
          </a>
          <p className="whatsapp-note">Todos os pedidos estão sendo feitos pelo WhatsApp.</p>

          <aside className="availability-card" aria-label="Aviso sobre o cardápio online">
            <IoBag className="availability-icon" aria-hidden="true" />
            <div>
              <strong>Cardápio online indisponível</strong>
              <p>Temporariamente, faça seu pedido pelo WhatsApp.</p>
            </div>
          </aside>
        </section>

        <footer>
          <div className="location">
            <MdLocationPin className="location-icon" aria-hidden="true" />
            <span>Itabuna-BA</span>
          </div>
          <p><strong>Delícia Vegana</strong> <span aria-hidden="true">•</span> Desde 2018</p>
        </footer>
      </div>
    </main>
  )
}

export default App
