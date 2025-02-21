import React, { useState } from 'react';
import AllList1 from '../data/allList1.json';
import AllList2 from '../data/allList2.json';
import AllList3 from '../data/allList3.json';
import '../style/sub.scss';

const Suball = () => {
  const [selectedList, setSelectedList] = useState("allsB");

  const allbookList = {
    allsB: AllList1,
    insB: AllList2,
    outsB: AllList3,
  };

  const selectedAllbook = allbookList[selectedList];

  return (
    <div className='bookReview'>
      <div className='rebook'>
        <div>
          <h2>All Books</h2>
          <div className='bookListBtn'>
            <button onClick={() => setSelectedList("allsB")}>BEST</button>
            <button onClick={() => setSelectedList("insB")}>국내</button>
            <button onClick={() => setSelectedList("outsB")}>국외</button>
          </div>
        </div>

        <div className={`lists ${selectedList}`}>
          {selectedAllbook?.map((lists, index) => (
            <div key={index} className="booklistItem">
              <div>
                <img src={lists.img} alt={lists.bookN} />
              </div>
              <div>
                <div className="booklistName">{lists.nicN}</div>
                <div className="booklistBook">{lists.bookN}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suball;
