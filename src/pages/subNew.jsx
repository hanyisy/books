import React, { useState } from 'react';
import '../style/sub.scss';
import NewList1 from '../data/newList1.json';
import NewList2 from '../data/newList2.json';
import NewList3 from '../data/newList3.json';

const SubNew = () => {
  const [selectedList, setSelectedList] = useState("allsB");

  const allbookList = {
    allsB: NewList1,
    insB: NewList2,
    outsB: NewList3,
  };

  const selectedAllbook = allbookList[selectedList];

  return (
    <div className='bookListpage'> 
      <div className='listBook'>
        <div>
          <h2>New Books</h2>
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

export default SubNew; 