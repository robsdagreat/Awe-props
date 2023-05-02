import Card from './Card.jsx'
import './App.css'
// import src1 from './assets/imgs/image.png'
import src2 from './assets/imgs/imgx.png'
import src3 from './assets/imgs/imgy.png'





function App() {
  
  


  return (

  
   

    <>
      <div id='main'>


      
      
      <div>    
      <Card
      
      // src={src1}
      name={"Jane Doe"}
      position={"CEO & Co-Founder"}
      />
      </div>
    

      
      
      
      <div>
      <Card
      
       src={src2}
       name={"Mike Ross"}
       position={"Designer"}
      />
      </div>
      



      
      <div>
      <Card
       src={src3}
       name={"John Doe"}
       position={"Photographer"}
      />
      </div>
      

      </div> 
    </>


    

  )
}

export default App
