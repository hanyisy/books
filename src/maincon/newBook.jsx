import React from 'react';
import '../style/main.scss';
import newbookLists from '../maincon/newbookLists.json';

const NewBook = () => {
    return (
        <div className='newBooks'>
            <div className='newBookstit'>New Book</div>
            <div className='newBookBox'>
                {newbookLists.map((item, index) => (
                    <div key={index} className='newBookdiv'> 
                        <div className='newBookimg'>
                            <img src={item.newImgs} alt={`책 이미지 ${index + 1}`} />
                        </div>
                        <div className='newBooktxt'>
                            <div>{item.newBon}</div>
                            <div>{item.newW}</div>
                            <div>{item.newPri}원</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewBook;
