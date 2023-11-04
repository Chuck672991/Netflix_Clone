import logo from './logo.svg';
import './App.css';
import { Row } from './components/Row';
import requests from  "./Requests";
import Banner from './components/Banner'
import Nav from './components/Nav';
function App() {

  return <div className='app'>
    <Nav />
  <Banner  />
   <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
   <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
   <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
   <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
   <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
   <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
   <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

   </div>;
}

export default App;
