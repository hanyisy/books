import React, { useState } from 'react';
import reviewData01 from './reviewList01.json';
import reviewData02 from './reviewList02.json';
import reviewData03 from './reviewList03.json';
import '../style/main.scss';


const BookReview = () => {
    const [selectedList, setSelectedList] = useState("best");

    const reviewData = {
        best: reviewData01,
        domestic: reviewData02,
        international: reviewData03,
    };

    const selectedReviews = reviewData[selectedList];

    return (
        <div className='bookReview'>
            <div className='rebook'>
                <div>
                    <div>
                        <h2>Book Reviews</h2>
                    </div>
                    <div className='reviewBtn'>
                        <button onClick={() => setSelectedList("best")}>BEST</button>
                        <button onClick={() => setSelectedList("domestic")}>국내</button>
                        <button onClick={() => setSelectedList("international")}>국외</button>
                    </div>
                </div>

                <div className={`lists ${selectedList}`}>
                    {selectedReviews.map((review, index) => (
                        <div key={index} className="reviewItem">
                            <div>
                                <img src={review.img}/>
                            </div>
                            <div>
                                <div className="reviewName">{review.nicN}</div>
                                <div className="reviewBook">{review.bookN}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookReview;
