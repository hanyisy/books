import React, { useState, useEffect } from 'react'; 
import bookday from '../imgs/bookday.png'
import bookday2 from '../imgs/bookday2.png'
import bookday3 from '../imgs/bookday3.jpg'


const MainSlide = () => {
    // 이미지 배열 (슬라이드할 이미지들)
    const images = [
        bookday2,
        bookday,
        bookday3
    ];

    // 현재 이미지 인덱스를 관리
    const [currentIndex, setCurrentIndex] = useState(0);

    // 슬라이드를 자동으로 변경하는 타이머 (5초마다 이미지 변경)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // 컴포넌트가 언마운트 될 때 타이머 클리어
    }, [images.length]); // images.length 추가


    return (
        <div className='mainSlide'>
            <div className='slideContainer'>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='slideImage' />
            </div>
        </div>
    );
}

export default MainSlide;
