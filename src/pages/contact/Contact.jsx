import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, amimi culpanobis nemo natus doloremque?
      </Header>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+23355709546" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default contact