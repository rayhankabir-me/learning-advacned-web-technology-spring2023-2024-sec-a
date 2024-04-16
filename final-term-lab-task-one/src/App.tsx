import './App.css'
import CalltoActions from './components/CalltoActions';
import Posts from './components/Posts.tsx';

import HeroImage from "./assets/hero-image.jpg";
import Teachers from './components/Teachers.tsx';
import Search from './components/Search.tsx';

function App() {


  return (
    <>

    
      {


        // function myLoop(){
        //   for (let index = 0; index < 6; index++) {
        //     <Test />
  
        //   }
        // }

        // myLoop();

        // (
        //   () => {
        //     const p = []
        //     for(let i = 0; i < 5; i++) p.push(<Test></Test>)
        //     return p
        //   }
        // )()


        
      }

      <Search />
     
      <CalltoActions image={HeroImage} />


      <h1>Latest Posts</h1>
      <Posts />

      <h1>Teacher Lists</h1>
      <Teachers />
      
    </>
  )
}

export default App;
