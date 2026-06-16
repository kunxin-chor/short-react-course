import "./App.css";
import image from "./sushi.jpg";

export default function App() {

  // JSX elements may look like HTML, but they are JavaScript objects in disguise
  const name = <p>Tan Ah Kow</p>;
  const favortiteFood = "Chicken Rice";
  
  const isEven = (n) => {
    if (n % 2 ==0) {
      return true;
    } else {
      return false;
    }
  }

  return (<>
      {/* You can return one JSX element but it can have children */}
      <h1>Hello World</h1>
      <h2 style={{
        fontFamily:"Verdana",
        color:"red",
        fontSize:"26px"
      }}>How are you</h2>
      {name}
      <p className="featured">2 + 2 = { 2 + 2 }</p>
      <p>My favorite food is {favortiteFood}</p>
      <p>Is 4 even = {isEven(10) ? "yes" : "no"}</p>
      <img src={image}/>
      <img src="curry_puff.jpg"/>

    </>);
}