import React from 'react';
import '../styles/NowPlaying.css';
import { FaBackward, FaForward, FaPause } from 'react-icons/fa';
import { FaRepeat } from 'react-icons/fa6';
import Img1 from '../assest/first.jpg';

export default function NowPlaying() {
  return (
    <div>
      <h6 className="title">Now Playing</h6>
      <div className="now-playing">
        <div className="span-div">
          <span className="span-it">Next-</span>
          <span className="">Utopia</span>
        </div>
        <div className="detail-img">
          <img src={Img1} alt="" className="img1" />
          <h6>Torashu Calm</h6>
          <p>LoFi HipHop</p>
        </div>
        <div className="input-reset">
          <input type="range" name="" id="" />
        </div>
        <div className="music-time">
          <span>2:10</span>
          <span>-03:43</span>
        </div>
        <div className="icons">
          <span>
            <FaRepeat />
          </span>
          <span>
            <FaBackward />
          </span>
          <div>
            <span className="pause-icon">
              <FaPause />
            </span>
          </div>
          <span>
            <FaForward />
          </span>
          <span>
            <FaRepeat />
          </span>
        </div>
      </div>
    </div>
  );
}
