import { useState } from "react"

export default function App() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [seating, setSeating] = useState("");
  const [services, setServices] = useState([]);
  const [country, setCountry] = useState("")

  const handleCheckbox = (event) => {
    // const cloned = services.slice();
    // cloned.push(event.target.value);
    // setServices(cloned)

    if (event.target.checked) {
      setServices([...services, event.target.value]);
      // ... is the spread operator. when used on array, it duplicates all the elements in the array
    } else {
      // const modified = services.filter(s => s !== event.target.value);
      const index = services.findIndex( s => s === event.target.value);
      setServices(services.toSpliced(index, 1));
    }

  }

  const handleSubmit = () => {
    console.log(email, name, country, services, seating);
  }


  return (<>
    <h1>Booking Form</h1>
    <div>
      <label>Email</label>
      <input type="email" value={email} onChange={(event) => {
        // event.target is the DOM element that the event happens on
        setEmail(event.target.value);
      }} />
    </div>
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(event) => {
        setName(event.target.value)
      }} />
    </div>
    <div>
      <label>Type of Seatings</label>
      <input type="radio"
        value="indoors"
        name="seating"
        onChange={e => setSeating(e.target.value)}
        checked={seating === "indoors"}
      /><label>Indoors</label>

      <input type="radio"
        value="outdoors"
        name="seating"
        onChange={e => setSeating(e.target.value)}
        checked={seating === "outdoors"}
      /><label>Outdoors</label>

      <input type="radio"
        value="room"
        name="seating"
        onChange={e => setSeating(e.target.value)}
        checked={seating === "room"}
      /><label>Room</label>
    </div>
    <div>
      <label>Services</label>
      <input type="checkbox"
        value="birthday-song"
        onChange={handleCheckbox}
        checked={services.includes("birthday-song")}
      /><label>Birthday Song</label>

      <input type="checkbox"
        value="noodle-dance"
        onChange={handleCheckbox}
        checked={services.includes("noodle-dance")}
      />
      <label>Noodle Dance</label>

      <input type="checkbox"
        value="byob"
        onChange={handleCheckbox}
        checked={services.includes("byob")}
      />
      <label>Bring your Own Bottle</label>

    </div>
    <div>
      <label>Country</label>
      <select onChange={e=>setCountry(e.target.value)} value={country}>
        <option value="">--Select a country--</option>
        <option value="sg">Singapore</option>
        <option value="my">Malaysia</option>
        <option value="id">Indonesia</option>
        <option value="others">Others</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>

  </>)
}