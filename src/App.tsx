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
            className="link-button menu-button"
            href="https://deliciavegana.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar o cardápio online"
          >
            <IoBag className="button-icon" aria-hidden="true" />
            <span>ACESSAR CARDÁPIO ONLINE</span>
          </a>
          <p className="link-note">conheça nosso cardápio</p>

          <a
            className="link-button whatsapp-button"
            href="https://wa.me/5573991384112?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20a%20Del%C3%ADcia%20Vegana."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
          >
            <IoLogoWhatsapp className="button-icon" aria-hidden="true" />
            <span>FALE CONOSCO</span>
          </a>
          <p className="link-note">encomendas, pedidos, dúvidas</p>
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
