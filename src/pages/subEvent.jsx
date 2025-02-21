import React from 'react'
import EvList from '../data/eventLists.json';
import Eventsimg from '../imgs/events01.jpg';
import Flower from '../imgs/wers.png';

const SubEvent = () => {
  return (
    <div className='eventBox'>
      <div className='eventTit'>Event</div>
      <div>
        <div className='eventDay'>
          <div><img src={Flower} /></div>
          <div>- EVENT -</div>
          <div>봄의 시작을 함께하는 따스한 도서 이벤트</div>
        </div>
        <div className='eventBan'>
          <img src={Eventsimg} alt='book event' />
        </div>
      </div>
      <div className='enentList'>
        <div className='subEv'>행사 목록</div>
        <div>
          {EvList.map((item, index) => (
            <div key={index} className='evBookdiv'>
              <div>{item.id}</div>
              <div>{item.evTit}</div>
              <div>{item.evWet}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubEvent;