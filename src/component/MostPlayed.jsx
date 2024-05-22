import React from 'react';
import { FaArrowDown, FaChartBar, FaPlay } from 'react-icons/fa';

export default function MostPlayed() {
  return (
    <div>
      <div>
        <h6 className='title'>Most Played</h6>
        
        <span>25 Songs on the first</span>
        <span>
          <FaArrowDown />
        </span>
      </div>
      <div>
        <p>1</p>
        <img src="" alt="" />
        <FaPlay />
        <p>Utopia</p>
        <p>Travis Scott</p>
        <p>2:48</p>
        <FaChartBar />
      </div>
    </div>
  );
}
