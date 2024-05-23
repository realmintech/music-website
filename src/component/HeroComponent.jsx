import React from 'react';
import '../styles/HeroComponent.css';
import Img1 from '../assest/first.jpg';
import Img2 from '../assest/second.jpg';
import Img3 from '../assest/third.jpg';
import Img5 from '../assest/fourth.jpg';
import { FaArrowDown } from 'react-icons/fa';


const HeroComponent = () => {
  const data = [
    {
      img: Img1,
      title: 'Starboy',
      music: 'The Weekend',
    },
    {
      img: Img5,
      title: 'Rap HipHop',
      music: 'Joymix',
    },
    {
      img: Img3,
      title: 'Utopia',
      music: 'Travis Scott',
    },
    {
      img: Img2,
      title: 'Dragon Ball',
      music: 'Rilli Beats',
    },
    // {
    //   img: Img4,
    //   title: 'Dragon Ball',
    //   music: 'Rilli Beats',
    // },
  ];
  return (
    <>
      <div className="container-fluid top-artist-display">
        <div className="row">
          <div className=" top-artist">
            <span>Top Artist</span>
            <span className="top50">
              <FaArrowDown />
              Top 50
            </span>
          </div>
          {data.map((item, index) => (
            <div className="col-lg-3 col-md-3 col-sm-6" key={index}>
              <img src={item.img} alt="" className="img" />
              <h6>{item.title}</h6>
              <p>{item.music}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
