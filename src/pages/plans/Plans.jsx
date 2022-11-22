import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
      Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consectetur vero similique aliquam.
    </Header>
    <section className='plans'>
      <div className="container plans-container"> 
        {
          plans.map(({id, name, desc, price, features}) => {
            return (              
              <Card key={id} className="plans-plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>${price}</h1><h2>/mo</h2>
                <h4>Feathres</h4>
                {
                  features.map(({feature, available}, index) => {
                    return (
                      <p key={index} className={!available && 'disabled'}>{feature}</p>
                    )
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans