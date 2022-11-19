import { useState } from 'react'
import SectionHead from './header/SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle , IoIosArrowDroprightCircle} from 'react-icons/io'
import Card from '../UI/Card'
import { testimonials } from '../data'

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]


    const prevTestimonialHander = () => {
        setIndex((prev) => prev - 1)
        if (index <= 0) setIndex(testimonials.length-1)
    }

    const nextTestimonialHander = () => {
        setIndex((prev) => prev + 1)
        if (index >= testimonials.length - 1) setIndex(0)
    }
  return (
    <section className="testimonials">
        <div className="container testimonials-container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testiminials" className="testimonials-head"/>
                <Card className='testimonial' key={index}>
                    <div className="testimonial-avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial-quote">{quote}</p>
                    <h5>{name}</h5>
                    <small className="testimonial-title">{job}</small>
                </Card>
                <div className="testimonials-btn-container">
                    {/* {index > 0 && <button className="testimonials-btn" onClick={prevTestimonialHander}><IoIosArrowDropleftCircle/></button>} */}
                    <button className="testimonials-btn" onClick={prevTestimonialHander}><IoIosArrowDropleftCircle/></button>
                    <button className="testimonials-btn" onClick={nextTestimonialHander}><IoIosArrowDroprightCircle/></button>
                </div>
        </div>
    </section>
  )
}

export default Testimonials