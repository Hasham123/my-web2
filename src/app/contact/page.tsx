import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">CONTACT US</h2>
        <form>
            <input type='text' placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-blue-200 rounded-md' required/>
            <input type='email' placeholder='Email' className='w-full mb-4 px-4 py-2 border border-blue-200 rounded-md' required/>
            <input type='text' placeholder='Phone ' className='w-full mb-4 px-4 py-2 border border-blue-200 rounded-md' required/>
            <textarea placeholder='Message' rows={5} className='w-full mb-4 px-4 py-2 border border-blue-200 rounded-md' required>
                
            </textarea>
            <button type="submit" className='w-full  bg-blue-500 text-white py-2 rounded-md'>Send Message</button>
            

        </form>
      </section>
    </div>
  )
}

export default Contact