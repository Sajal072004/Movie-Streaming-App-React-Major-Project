import { Route , Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import People from './components/People';
import Moviedetails from './components/Moviedetails';
import Tvdetails from './components/Tvdetails';
import PersonDetails from './components/PersonDetails';
import Trailer from './components/partials/Trailer';
import Notfound from './components/partials/Notfound';


function App() {

  return( 
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>

        <Route path='/movie' element={<Movie/>}>
        </Route>
        <Route path="/movie/details/:id" element={<Moviedetails/>}>
          <Route path="/movie/details/:id/trailer" element = {<Trailer/>} /> 
        </Route>

        <Route path='/tv' element={<Tvshows/>}>

        </Route>
        <Route path="/tv/details/:id" element={<Tvdetails/>}>
          <Route path="/tv/details/:id/trailer" element = {<Trailer/>} />

        </Route>
        
        <Route path='/people' element={<People/>}>
        </Route>
        <Route path="/person/details/:id" element={<PersonDetails/>}></Route>

        <Route path='*' element={<Notfound/>} />



        
      </Routes>


    </div>
    
    );





};

export default App
