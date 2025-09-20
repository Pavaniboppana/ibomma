import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import About from './Component/About';
import Bug from './Component/Bug';
import Captain from './Component/Movies/Captain';
import Ajay from './Component/Movies/Ajay';
import Animal from './Component/Movies/Animal';
import Atharva from './Component/Movies/Atharva';
import Calling from './Component/Movies/Calling';
import Conjuring from './Component/Movies/Conjuring';
import Devil from './Component/Movies/Devil';
import Extra from './Component/Movies/Extra';
import Good from './Component/Movies/Good';
import Guntur from './Component/Movies/Guntur';
import Joe from './Component/Movies/Joe';
import Kaathal from './Component/Movies/Kaathal';
import Kota from './Component/Movies/Kota';
import Lingoccha from './Component/Movies/Lingoccha';
import Little from './Component/Movies/Little';
import MayaLo from './Component/Movies/MayaLo';
import Nanna from './Component/Movies/Nanna';
import Neru from './Component/Movies/Neru';
import Parampoul from './Component/Movies/Parampoul';
import Pindam from './Component/Movies/Pindam';
import Ranjith from './Component/Movies/Ranjith';
import Saindhav from './Component/Movies/Saindhav';
import Sarkaaru from './Component/Movies/Sarkaaru';
import Tiger3 from './Component/Movies/Tiger3';
import Vidhi from './Component/Movies/Vidhi';
import Sapta from './Component/Movies/Sapta';
import Fight from './Component/Movies/Fight';
import Salaar from './Component/Movies/Salaar';
import Kuiko from './Component/Movies/Kuiko';
import Trail from './Component/Movies/Trail';
import Veeran from './Component/Movies/Veeran';
import Odiyam from './Component/Movies/Odiyam';
import Takkar from './Component/Movies/Takkar';
import Chakravyuham from './Component/Movies/Chakravyuham';
import Night from './Component/Movies/Night';
import Arun from './Component/Movies/Arun';
const App =() => {
  return (
    <div className="app-container">
      <Navbar/>
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/bug' element={<Bug/>}></Route>
          <Route path='/captain' element={<Captain/>}></Route>
          <Route path='/ajay' element={<Ajay/>}></Route>
          <Route path='/animal' element={<Animal/>}></Route>
          <Route path='/atharva' element={<Atharva/>}></Route>
          <Route path='/calling' element={<Calling/>}></Route>
          <Route path='/conjuring' element={<Conjuring/>}></Route>
          <Route path='/devil' element={<Devil/>}></Route>
          <Route path='/extra' element={<Extra/>}></Route>
          <Route path='/good' element={<Good/>}></Route>
          <Route path='/guntur' element={<Guntur/>}></Route>
          <Route path='/joe' element={<Joe/>}></Route>
          <Route path='/fight' element={<Fight/>}></Route>
          <Route path='/kaathal' element={<Kaathal/>}></Route>
          <Route path='/kuiko' element={<Kuiko/>}></Route>
          <Route path='/kota' element={<Kota/>}></Route>
          <Route path='/lingoccha' element={<Lingoccha/>}></Route>
          <Route path='/little' element={<Little/>}></Route>
          <Route path='/mayaLo' element={<MayaLo/>}></Route>
          <Route path='/nanna' element={<Nanna/>}></Route>
          <Route path='/neru' element={<Neru/>}></Route>
          <Route path='/parampoul' element={<Parampoul/>}></Route>
          <Route path='/pindam/' element={<Pindam/>}></Route>
          <Route path='/ranjith' element={<Ranjith/>}></Route>
          <Route path='/saindhav' element={<Saindhav/>}></Route>
          <Route path='/sarkaaru' element={<Sarkaaru/>}></Route>
          <Route path='/salaar' element={<Salaar/>}></Route>
          <Route path='/tiger3' element={<Tiger3/>}></Route>
          <Route path='/trail' element={<Trail/>}></Route>
          <Route path='/vidhi' element={<Vidhi/>}></Route>
          <Route path='/sapta' element={<Sapta/>}></Route>
          <Route path='/veeran' element={<Veeran/>}></Route>
          <Route path='/odiyam' element={<Odiyam/>}></Route>
          <Route path='/takkar' element={<Takkar/>}></Route>
          <Route path='/arun' element={<Arun/>}></Route>
          <Route path='/chakravyuham' element={<Chakravyuham/>}></Route>
          <Route path='/night' element={<Night/>}></Route>
        </Routes>
      </main>
      <footer className="foot">
        <p>Contact | DMCA | T&C  <span>@2024 iBOMMA</span></p>
      </footer>
    </div>
   )
}

export default App