import React from 'react'
import './Movies.css'
function Animal() {
  return (
    <>
      <div className="film">
        <div id="films">
          <div className="films1">
            <img src="https://upload.wikimedia.org/wikipedia/te/thumb/f/fa/Animal_%282023_film%29.jpg/220px-Animal_%282023_film%29.jpg" alt="" />
          </div>
          <div className="films2">
          <h1>Animal</h1>
          <p>2023</p>
          <p>Action / Crime / Drama</p>
          <br />

          <p><i class="fa-solid fa-user"></i><span>Cast:</span>Ranbir Kapoor and Rashmika Mandanna </p>
          <p><i class="fa-solid fa-user"></i><span>Director:</span> Sandeep Reddy Vanga</p>
          <button className='btn1'><i class="fa-solid fa-arrow-up-right-from-square"></i>TRAILER</button>
          <button className='btn2'><i class="fa-solid fa-comments"></i>SUPPORT SECTION</button>
        </div>
      </div>


      <div className="block">
        <div className="p1"></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9MC45kt46l0?si=8utRLIO93WFv1mgS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="p2"></div>
      </div>


      <div className="text">
        <p><span>Synopsis:</span> A father, who is often away due to work, is unable to comprehend the intensity of his son's fervent love and admiration, which creates conflict between both of them.</p>
        <p> Animal 2023 Telugu movie watch online, Ranbir Kapoor, Rashmika Mandanna, Bobby Deol's Animal / Animalu / Wild Animal Telugu movie watch in HD free form www.ibomma.com official portal where you can watch Tollywood movies freely.</p>
      </div>
      </div>


      <div className="foot">
        <p>Contact | DMCA | T&C  <span>@2024 iBOMMA</span></p>
      </div>
    </>
  )
}

export default Animal