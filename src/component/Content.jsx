import React from 'react'
import NowPlaying from './NowPlaying'
import MostPlayed from './MostPlayed';

export default function Content() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5">
          <NowPlaying />
        </div>
        <div className="col-lg-7">
          <MostPlayed />
        </div>
      </div>
    </div>
  );
}
