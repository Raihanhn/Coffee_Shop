import React from 'react'

const Book = () => {
  return (
    <div className='aka'>
        <section className='book' id='book'>
            <h1 className='heading'>booking <span>reserve a table</span> </h1>
            <form action="">
              <input type="text" placeholder='your name' className='box' />
              <input type="email" placeholder='your email' className='box' />
              <input type="number" placeholder='your number' className='box' />
              <textarea placeholder='your message' name='' className='box' cols="30" rows="10" ></textarea>
              <input type="submit" value="send message" className='btn' />
            </form>
        </section>
    </div>
  )
}

export default Book