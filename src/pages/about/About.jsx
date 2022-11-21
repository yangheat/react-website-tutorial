import Header from '../../components/header/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About aus" image={HeaderImage}>
      Lorem ipsuum dolor sit amet consectetur adipisicing edit. Et maiores doloribus,
      eligendi incidunt modi rerum debitis consequatur molestias?
    </Header>
    <section className="about-story">
      <div className="container about-story-container">
        <div className="about-section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about-section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
            Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>
    <section className="about-vision">
      <div className="container about-vision-container">
        <div className="about-section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod im atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupto quas ciluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
        <div className="about-section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>
    <section className="about-mission">
      <div className="container about-mission-container">
        <div className="about-section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about-section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
          <p>
            Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntur?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About