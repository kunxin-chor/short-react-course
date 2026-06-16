import ImageFrame from "./ImageFrame";

export default function App() {
  // JSX is just JavaScript objects in disguise
  // 1. we can store values in variables
  // 2. use it as a return value from a function
  // 3. pass values as parameters to function

  function hello(firstName, lastName) {
    return <h2>{firstName} {lastName}</h2>
  }

  // A component function can recieve one parameter, known as props
  // props will be object, and the keys in the object will be defined
  // by the JSX calling it
  function MessageBox(props) {
    return <div style={{
      border:"1px solid black",
      padding:"10px",
      margin:"5px",
      color:props.color || "black"
    }}>
      {props.message}
    </div>
  }

  function Increment(props) {
    return <p>{props.number + 1}</p>
  }

  // Rules for a React Component
  // 1. it has to be a function
  // 2. the first alphabet of the function name must be uppercase
  // 3. it must return JSX
  // A component is like your custom HTML element

  return <>
    <h1>Hello World</h1>
    {hello("Jon", "Snow")}
    {hello("Tony", "Stare")}
    <MessageBox message="Please remember to switch off the lights" color="red"/>
    <MessageBox message="Please do not the feed dogs."/>
    <Increment number={3}/>
    <ImageFrame imageUrl="https://picsum.photos/200/300"/>
  </>
}