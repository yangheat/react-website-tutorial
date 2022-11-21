import FAQs from '../../components/faq/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/header/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default home