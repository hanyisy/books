import React, { useState } from 'react';
import '../style/sub.scss';
import BestList1 from '../data/bestList1.json';
import BestList2 from '../data/bestList2.json';
import BestList3 from '../data/bestList3.json';

const SubBest = () => {
  const [selectedList, setSelectedList] = useState("allsB");

  const allbookList = {
    allsB: BestList1,
    insB: BestList2,
    outsB: BestList3,
  };

  const selectedAllbook = allbookList[selectedList];

  return (
    <div className='bookListpage'> 
      <div className='listBook'>
        <div>
          <h2>Bestseller Books</h2>
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
                <img src={lists.newImgs} alt={lists.bookN} />
              </div>
              <div>
                <div className="booklistName">{lists.newBon}</div>
                <div className="booklistBook">{lists.newW}</div>
                <div className='booklistPri'>{lists.newPri}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubBest; 