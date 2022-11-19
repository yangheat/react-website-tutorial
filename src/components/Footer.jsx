import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import {FaLinkedin, FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to='/' className="logo">
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tenetur harum pariatur!
                    Insto animi cupiditate, provident dolore porro eum obcaecati.
                </p>
                <div className="footer-socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">{<FaLinkedin/>}</a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">{<FaFacebookF/>}</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">{<AiOutlineTwitter/>}</a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">{<AiFillInstagram/>}</a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/concat">Concat</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/case-stuies">Case Studies</Link>
                <Link to="/events">Events</Link>
                <Link to="/communities">Communities</Link>
                <Link to="/faqs">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/support">Support</Link>
            </article>
        </div>
        <div className="footer-copyright">
            <small>2022 EGATOR TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer