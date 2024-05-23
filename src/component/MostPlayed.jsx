import React from 'react';
import Img1 from '../assest/first.jpg';
import Img2 from '../assest/second.jpg';
import Img3 from '../assest/third.jpg';
import Img5 from '../assest/fourth.jpg';
import '../styles/MostPlayed.css';
import { FaArrowDown, FaChartBar, FaPlay } from 'react-icons/fa';

export default function MostPlayed() {
  const data = [
    {
      img: Img1,
      artist: 'Utopia',
      writer: 'Travis Scott',
      duration: '2:48',
    },
    {
      img: Img2,
      artist: 'Dragon',
      writer: 'Coldplay',
      duration: '3:26',
    },
    {
      img: Img3,
      artist: 'Yellow',
      writer: 'Joymix',
      duration: '6:34',
    },
    {
      img: Img1,
      artist: 'Rap HipHop',
      writer: 'RiliBeats',
      duration: '3:24',
    },
    {
      img: Img5,
      artist: 'Utopia',
      writer: 'Jonas Blue',
      duration: '3:12',
    },
  ];
  return (
    <div>
      <div className="most-played-container">
        <h6 className="title">Most Played</h6>
        <div className="word-and-icon">
          <span>25 Songs on the first</span>
          <span>
            <FaArrowDown />
          </span>
        </div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="most-played-div">
          <p className="most-played-id">{index + 1}</p>
          <img src={item.img} alt="" className="mostPlayedImg" />
          <FaPlay />
          <p className="most-played-artist">{item.artist}</p>
          <p className="most-played-writer">{item.writer}</p>
          <p className="most-played-duration">{item.duration}</p>
          <FaChartBar />
        </div>
      ))}
    </div>
  );
}
