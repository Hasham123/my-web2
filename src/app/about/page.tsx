import React from 'react'

const About = () => {
  return (
    <div>
      <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage:"url(watchbackground2.jpg)"}}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">ABOUT US</h2>
            <p>At WATCH MANIA we are passionate about delivering more than just watches  we offer a symbol of elegance precision and individuality. Our carefully curated collection features a range of designs to suit every personality from timeless classics to contemporary masterpieces. With a commitment to quality craftsmanship and exceptional customer service we aim to provide an experience that goes beyond timekeeping. Whether youre marking a special occasion or enhancing your everyday style we are here to help you find the perfect piece to cherish forever.</p>

        </div>
      </section>
    </div>
  )
}

export default About
