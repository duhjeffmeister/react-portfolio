import React from 'react'
import coverImage from '../../assets/cover/selfpic.JPG'
function About() {
  return (
    <section className="my-5">
      <h1 id="about"> About Me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '10%' }}
        alt="cover"
      />
      <div className="my-2">
        <p>
        I currently work in the accounting department of United Rentals in their credit department,
          but am a graduate of the UNC Charlotte coding boot camp for web development. I live in Charlotte,
          NC and am a full stack engineer. I love learning and in my spare time I'm a musician.
        </p>
      </div>
    </section>
  )
}

export default About
