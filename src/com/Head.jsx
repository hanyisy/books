import React from 'react'
import { Link } from 'react-router-dom';
import '../style/main.scss'

const Head = () => {
  return (
    <div className='Head'>
      <div className='headB'><Link to='/' end>NeulNeuru</Link></div>
      <div className='headM'>
        <ul>
            <li><Link to='/' end>HOME</Link></li>
            <li><Link to='/Top' >ALL</Link></li>
            <li><Link to='/Bot' >BEST</Link></li>
            <li><Link to='/sho' >NEW</Link></li>
            <li><Link to='/ve' >EVENT</Link></li>
        </ul>
      </div> 
    </div>
  )
}

export default Head