import React from 'react';
import '../styles/Index.css';
import { FaBook, FaFile, FaHome, FaIntercom, FaList, FaMusic, FaPlay,  } from 'react-icons/fa';
import {Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-light pt-5 px-3 m-auto">
      <div className="sidebar-sticky">
        <div className="home">
          <div>
            <FaHome />
            <Link to="/home">Home</Link>
          </div>
          <div>
            <FaIntercom />
            <Link to="/browse">Browse</Link>
          </div>
          <div>
            <FaBook />
            <Link to="/album">Album</Link>
          </div>
          <div>
            <FaMusic />
            <Link to="/artist">Artist</Link>
          </div>
        </div>
        <div className="my-music">
          <h6>MY MUSIC</h6>
          <div>
            <FaPlay />
            <Link to="">Recently Played</Link>
          </div>
          <div>
            <FaFile />
            <Link to="">Local Files</Link>
          </div>
        </div>
        <div className="play-list">
          <h6>PLAYLIST</h6>
          <div>
            <FaMusic />
            <Link to="">Pop Songs</Link>
          </div>
          <div>
            <FaList />
            <Link to="">General Playlist</Link>
          </div>
          <div>
            <FaMusic />
            <Link to="">Relaxing Music</Link>
          </div>
          <div>
            <FaMusic />
            <Link to="">Hiphop Music</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
