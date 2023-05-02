import Button from "./Button.jsx";
import Image from './assets/imgs/image.png'



function Card(props){
   

    return(
        <>
        <div id="container">
        <div>
            <img id="img" src={props.src ? props.src : Image}  alt="jane" />

        <h2>{props.name}</h2>

        <h4>{props.position}</h4>
        
        <p id="p1">Phasellus  eget enim eu lectus faucibus vestibulum</p>

        <p id="p2">example@example.com</p> 

        <Button text={"Click me"} />

        </div>
        </div>
        </>
    )
}

export default Card;