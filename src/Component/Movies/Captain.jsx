import React from 'react'
import './Movies.css'
function Captain() {
  return (
    <>
      <div className="film">
        <div id="films">
          <div className="films1">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Captain_Miller_film_poster.jpg/220px-Captain_Miller_film_poster.jpg" alt="" />
          </div>
          <div className="films2">
            <h1>Captain Miller</h1>
            <p>2024</p>
            <p>Action / Adventure / Drama</p>
            <br />

            <p><i class="fa-solid fa-user"></i><span>Cast:</span> Dhanush, John Kokken, Antonya</p>
            <p><i class="fa-solid fa-user"></i><span>Director:</span> Arun Matheswaran</p>
            <button className='btn1'><i class="fa-solid fa-arrow-up-right-from-square"></i>TRAILER</button>
            <button className='btn2'><i class="fa-solid fa-comments"></i>SUPPORT SECTION</button>
          </div>
        </div>


        <div className="block">
          <div className="p1"></div>
          <iframe width="1183" height="600" src="https://www.youtube.com/embed/0gEG30G0Bsg?si=lPgcy_0BmS0XqXCn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="p2"></div>
        </div>


        <div className="text">
          <p><span>Synopsis:</span>Set in 1930s-1940s in British India and follows an outlaw called miller who engages in bloody loots, hesists and assaults.</p>
          <p>Captain Miller 2024 Telugu movie watch online. Captain Miller / Captainmiller movie watch in HD free from www.ibomma.com official movie portal.</p>
        </div>
      </div>


      <div className="foot">
        <p>Contact | DMCA | T&C  <span>@2024 iBOMMA</span></p>
      </div>
    </>
  )
}

export default Captain