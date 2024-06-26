import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
    let data = [
        {
            "id": 1,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Captain_Miller_film_poster.jpg/220px-Captain_Miller_film_poster.jpg",
            "title": "Captain Miller",
            "button": "2024",
            "link": "./Captain"
        },
        {
            "id": 2,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Guntur_Kaaram_film_poster.jpg/220px-Guntur_Kaaram_film_poster.jpg",
            "title": "Guntur Kaaram",
            "button": "2024",
            "link": "./Guntur"
        },
        {
            "id": 3,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Pindam_poster.jpg/220px-Pindam_poster.jpg",
            "title": "Pindam",
            "button": "2023",
            "link": "./Pindam"
        },
        {
            "id": 4,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLI8G4v2W5FVCGddSsnaUrYqzYwijTbxH-QQ&usqp=CAU",
            "title": "Vidhi",
            "button": "2023",
            "link": "./Vidhi"
        },
        {
            "id": 5,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDI3U-sJuv4ReXgj7FN9gw5j6pN1He5lj_A&usqp=CAU",
            "title": "Parampoul",
            "button": "2023",
            "link": "./Parampoul"
        },
        {
            "id": 6,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Saindhav_film_poster.jpg/220px-Saindhav_film_poster.jpg",
            "title": "Saindhav",
            "button": "2024",
            "link": "./Saindhav"

        },
        {
            "id": 7,
            "url": "https://upload.wikimedia.org/wikipedia/en/0/09/Fight_Club_%282023_film%29.jpg",
            "title": "Fight Club",
             "button": "2023",
            "link": "./Fight"
        },
        {
            "id": 8,
            "url": "https://upload.wikimedia.org/wikipedia/en/5/53/Sapta_Saagaradaache_Ello_poster.jpeg",
            "title": "Sapta sagaralu Dhaati - ...",
            "button": "2023",
            "link": "./Sapta"
        },
        {
            "id": 9,
            "url": "https://upload.wikimedia.org/wikipedia/te/thumb/f/fa/Animal_%282023_film%29.jpg/220px-Animal_%282023_film%29.jpg",
            "title": "Animal",
            "button": "2023",
            "link": "./Animal"
        },
        {
            "id": 10,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Little_Miss_Rawther_Movie_Poster.jpg/220px-Little_Miss_Rawther_Movie_Poster.jpg",
            "title": "Little Miss Naina",
            "button": "2023",
            "link": "./Little"
        },
        {
            "id": 11,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Neru_film_poster.jpg/220px-Neru_film_poster.jpg",
            "title": "Neru",
            "button": "2023",
            "link": "./Neru"
        },
        {
            "id": 12,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Atharva_%E2%80%93_The_Origin.jpg/220px-Atharva_%E2%80%93_The_Origin.jpg",
            "title": "Atharva",
            "button": "2023",
            "link": "./Atharva"
        },
        {
            "id": 13,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxDYowMcY9M7Ayg27f9FQCsb9nP9iR4MlIw&usqp=CAU",
            "title": "Good Luck Ganesha",
            "button": "2023",
            "link": "./Good"
        },
        {
            "id": 14,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg/220px-Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
            "title": "Salaar: Cease Fire - Part1",
            "button": "2023",
            "link": "./Salaar"
        },
        {
            "id": 15,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Extra_ordinary_man.jpeg/220px-Extra_ordinary_man.jpeg",
            "title": "Extra Ordinary Man",
            "button": "2023",
            "link": "./Extra"
        },
        {
            "id": 16,
            "url": "https://upload.wikimedia.org/wikipedia/en/e/e4/Kuiko_poster.jpg",
            "title": "Kuiko",
            "button": "2023",
            "link": "./Kuiko"
        },
        {
            "id": 17,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKV16bNcr9lt4ww7eKXN8TMHpnIOeT38u5yw&usqp=CAU",
            "title": "#MayaLo",
            "button": "2023",
            "link": "./MayaLo"
        },
        {
            "id": 18,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Joe_%282023_film%29.jpg/220px-Joe_%282023_film%29.jpg",
            "title": "Joe",
            "button": "2023",
            "link": "./Joe"
        },
        {
            "id": 19,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZfokZpN8H6UzKMHTI8s8vC9devNJt5j0iw&usqp=CAU",
            "title": "Sarkaaru Noukari",
            "button": "2023",
            "link": "./Sarkaaru"
        },
        {
            "id": 20,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3e-4fX8mB5pK_ATOwU-Zr2EBVBWlBzF7roQ&usqp=CAU",
            "title": "Lingoccha",
            "button": "2023",
            "link": "./Lingoccha"
        },
        {
            "id": 21,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGE5Jl0E0FkTLOJuGHymyhj7gyy-sG29O2fw&usqp=CAU",
            "title": "Ajay Gadu",
            "button": "2023",
            "link": "./Ajay"
        },
        {
            "id": 22,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTme3U_q2spYrYVxA6RHKj3xS9D2eTJpnQFKA&usqp=CAU",
            "title": "Devil",
            "button": "2023",
            "link": "./Devil"
        },
        {
            "id": 23,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/A_Ranjith_Cinema_poster.jpeg/220px-A_Ranjith_Cinema_poster.jpeg",
            "title": "A Ranjith Cinema",
            "button": "2023",
            "link": "./Ranjith"
        },
        {
            "id": 24,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Kota_Bommali_PS_poster.jpg/220px-Kota_Bommali_PS_poster.jpg",
            "title": "Kota Bommali PS",
            "button": "2023",
            "link": "./Kota"
        },
        {
            "id": 25,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/The_Trial_%282023_film%29.jpg/220px-The_Trial_%282023_film%29.jpg",
            "title": "The trial",
            "button": "2023",
            "link": "./Trail"
        },
        {
            "id": 26,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJJl4WE-jkCzET435JRE29ktGPzcZcf7FLQ&usqp=CAU",
            "title": "Tiger 3",
            "button": "2023",
            "link": "./Tiger3"
        },
        {
            "id": 27,
            "url": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/conjuring-kannappan-et00378033-1702017515.jpg",
            "title": "Conjuring Kannappan",
            "button": "2023",
            "link": "./Conjuring"
        },
        {
            "id": 28,
            "url": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Kaathal_-_The_Core.jpg/220px-Kaathal_-_The_Core.jpg",
            "title": "Kaathal - The Core",
            "button": "2023",
            "link": "./Kaathal"
        },
        {
            "id": 29,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ0_MFtgHY2Bv2sDxb7Ar5hsz38n2MO9G6Q&usqp=CAU",
            "title": "Hi Nanna",
            "button": "2023",
            "link": "./Nanna"
        },
        {
            "id": 30,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZcyLtUIJe4Lxy9GFqQo4CbqMchBr6FYNV_Q&usqp=CAU",
            "title": "Calling Sahasra",
            "button": "2023",
            "link": "./Calling"
        }
    ]
    return (
        <>
            <div id='part'>
                <div className='part1'>
                    <h1>Where Quality & Clarity Matters</h1>
                    <p>Watch Telugu Movies in NHD,exclusively available on iBOMMA.COM<br />Developed for smartphone,tablets & Tv.</p>
                </div>
                <div className="part2">
                    {
                        data.map(
                            (value) => {
                                return (
                                    <>

                                        <div className="hii">
                                            <Link className='class' to={value.link}>
                                                <img src={value.url} alt=""  />
                                                <p>{value.title}</p>
                                            </Link>
                                            <button >{value.button}</button>
                                        </div>


                                    </>
                                )
                            }
                        )
                    }
                </div>
                <div className="part3">
                    <h1>Looking For More Movies? Use Our Search</h1>
                    <p>Thousands of movies in our database & still adding</p>
                    <div className="type">
                        <input type="text" name="search1"  className="search1" placeholder='Search..' />
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>


                <div className='helo'>
                    <i class="fa-solid fa-wifi"></i>
                    <h1>Add-ons(O)</h1></div>


                <div className="Parent">
                    <div className="child">
                        <Link className='class' to="./Odiyam">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Odiyan_film_poster.jpg/220px-Odiyan_film_poster.jpg" alt="" />
                    <h5>Odiyan</h5>
                    </Link>
                    <button>2018</button>
                    </div>
                    <div className="child">
                    <Link className='class' to="./Takkar">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTNlOTY5ZmEtOTFjMC00NzljLWIwZmEtOGQxNTQ1M2JiMTkxXkEyXkFqcGdeQXVyNDQ5NTM1Mjk@._V1_.jpg" alt="" />
                        <h5>Takkar</h5>
                        </Link>
                        <button>2023</button>
                    </div>
                    <div className="child">
                    <Link className='class' to="./Chakravyuham">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Chakravyuham_The_Trap.jpg/220px-Chakravyuham_The_Trap.jpg" alt="" />
                   <h5>Chakravyuham:The Trap</h5>
                   </Link>
                   <button>2023</button>
                    </div>
                    <div className="child">
                    <Link className='class' to="./Arun">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Arthamayinda_Arun_Kumar_Poster.jpg/220px-Arthamayinda_Arun_Kumar_Poster.jpg" alt="" />
                        <h5>Arthamayinda:Arun Kumar</h5>
                        </Link>
                   <button>2023</button>
                    </div>
                    <div className="child">
                    <Link className='class' to="./Night">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Good_Night_%282023_film%29.jpg/220px-Good_Night_%282023_film%29.jpg" alt="" />
                        <h5>Good Night</h5>
                        </Link>
                   <button>2023</button>
                    </div>
                    <div className="child">
                    <Link className='class' to="./Veeran">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Veeran_film_poster.jpg/220px-Veeran_film_poster.jpg" alt="" />
                        <h5>Veeran</h5>
                        </Link>
                   <button>2023</button>
                    </div>
                </div>


            </div>




            <div className="foot">
                <p>Contact | DMCA | T&C  <span>@2024 iBOMMA</span></p>
            </div>
        </>
    )
}
export default Home