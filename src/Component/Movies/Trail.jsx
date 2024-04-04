import React from 'react';
import './Movies.css';

function Trail() {
  return (
    <>
      <div className="film">
        <div id="films">
          <div className="films1">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Trial_%282023_film%29.jpg/220px-The_Trial_%282023_film%29.jpg" alt=""  />
          </div>
          <div className="films2">
            <h1>The Trial</h1>
            <p>2023</p>
            <p>Thriller</p>
            <br />

            <p><i className="fa-solid fa-user"></i><span>Cast:</span> Spandana Palli, Yugam, Vamsi Kotu</p>
            <p><i className="fa-solid fa-user"></i><span>Director:</span> Raam Ganni</p>
            <button className='btn1'><i className="fa-solid fa-arrow-up-right-from-square"></i>TRAILER</button>
            <button className='btn2'><i className="fa-solid fa-comments"></i>SUPPORT SECTION</button>
          </div>
        </div>

        <div className="block">
          <div className="p1"></div>
          <img src="" alt="" />
          <div className="p2"></div>
        </div>

        <div className="text">
          <p><span>Synopsis:</span>SI Rajeev is assigned to interrogate Roopa regarding her husband Ajay's accidental death. Discovering that Roopa is also an SI, Rajeev investigates further and uncovers unexpected revelations in the case.</p>
          <p>The Trial 2023 Telugu movie watch online in HD free from ibomma. Spandana Palli, Yugram, Vamsi Kotu's The Trial movie watch in HD free from www.ibomma.com official movie portal.</p>
        </div>
      </div>

      <div className="foot">
        <p>Contact | DMCA | T&C  <span>@2024 iBOMMA</span></p>
      </div>
    </>
  );
}

export default Trail;