import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Row from './Row';
import Row_slider from './Row_slider';
import Row_slider_movie from './Row_slider_movie';
import Footer from './Footer';

function App() {
  return (
    <>
    
    
     <Navbar></Navbar>
     <Content></Content>
     <Row ></Row>
     <Row_slider title="Only On Netflix" 
     link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=3"></Row_slider>
     <Row_slider title="Netflix Originals" 
     link="https://api.themoviedb.org/3/discover/tv?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=5"></Row_slider>
    <Row_slider_movie title="Latest Movies" 
    link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&language=en-US&with_networks=213&page=1"></Row_slider_movie>
<Row_slider_movie title="Upcoming Movies"
link="https://api.themoviedb.org/3/movie/upcoming?api_key=018baab65f32149b2da2b285f1622453&language=en-US&page=1"></Row_slider_movie>
<Row_slider_movie title="Latest Bollywood Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&&with_original_language=hi&primary_release_year=2022"
></Row_slider_movie>
<Row_slider_movie title="Latest Tamil Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&&with_original_language=ta&primary_release_year=2022&page=1"></Row_slider_movie>
<Row_slider_movie title="Latest Hollywood Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&&with_original_language=en&primary_release_date=2022&page=2"></Row_slider_movie>
<Row_slider_movie title="Hindi Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&&with_original_language=hi&page=3"></Row_slider_movie>
<Row_slider_movie title="Action Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&with_genres=28&page=10"></Row_slider_movie>
<Row_slider_movie title="Comedy Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&with_genres=35"></Row_slider_movie>
<Row_slider_movie title="Horror Movies"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&with_genres=27"></Row_slider_movie>
<Row_slider_movie title="Documantaries" 
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&with_genres=99"></Row_slider_movie>
<Row_slider_movie title="Because you watched Conjuring"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&with_genres=27&page=2"></Row_slider_movie>
<Row_slider_movie title="Let's Go Back To 2020"
link="https://api.themoviedb.org/3/discover/movie?api_key=018baab65f32149b2da2b285f1622453&&with_original_language=hi&primary_release_year=2020"></Row_slider_movie>
   <Footer></Footer>
    </>
  );
}

export default App;
