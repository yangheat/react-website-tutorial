import FAQs from '../../components/FAQ/FAQs'
import MainHeader from '../../components/mainHeader/MainHeader'
import Programs from '../../components/programs/Programs'
import Values from '../../components/Values'
import './home.css'

const home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    </>
  )
}

export default home