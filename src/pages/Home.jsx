import React from 'react'
import Wapi from '../maincon/Wapi';
import MainSlide from '../maincon/mainSlide';
import BookReview from '../maincon/bookReview';
import NewBook from '../maincon/newBook.jsx';

const Home = () => {
  return (
    <div>
      <div className='maintops'>
      <Wapi />
      <MainSlide />
      </div>
      <div>
        <BookReview />
        <NewBook />
      </div>
    </div>
  )
}

export default Home