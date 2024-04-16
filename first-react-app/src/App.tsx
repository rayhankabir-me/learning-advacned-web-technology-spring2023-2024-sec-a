import './App.css'
import CalltoActions from './components/CalltoActions';
import Posts from './components/Posts.tsx';

import HeroImage from "./assets/hero-image.jpg";

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
     
      <CalltoActions image={HeroImage} />


      <h1>Latest Posts</h1>
      <Posts />
      
    </>
  )
}

export default App;
