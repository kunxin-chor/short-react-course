import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

  // useEffect takes two arguments
  // argument 1 - the effect function (cannot be async)
  // argument 2 - array of dependencies will usually refer to
  // values. If any of the dependncies change, then the effect function
  // will run again
  // if the depedencies is an empty array, then the effect
  // function will run once when the component renders for the first time

  useEffect(() => {

    const fetchData = async () => {
      const shopResponse = await axios.get('shops.json');
      setShops(shopResponse.data);

      const promotionResponse = await axios.get('promotions.json');
      setPromotions(promotionResponse.data);

      const eventResponse = await axios.get('events.json');
      setEvents(eventResponse.data);
      setEventLoading(false);
    }
    fetchData();

  }, [])

  const [events, setEvents] = useState([]);
  const [isEventLoading, setEventLoading] = useState(true);
  const [promotions, setPromotions] = useState([]);
  const [shops, setShops] = useState([]);

  const renderShops = () => {
    const jsx = [];
    for (let s of shops) {
      jsx.push(<li key={s}>{s}</li>)
    }
    return jsx;
  }


  return <div className="container">
    <h1>Chinatown Point</h1>
    <h2>Shops</h2>
    <ul>
      {renderShops()}
    </ul>

    <h2>Events</h2>
    {
      isEventLoading ?
        (
          <p>Loading...</p>
        ) :
        (<ul>
          {
            events.map((e, index) => <li key={index}>{e}</li>)
          }
        </ul>)
    }

    <h2>Promotions</h2>

    {
      promotions.map((event, index) => (
        <div key={index} className="card" style={{
          width: "300px"
        }}>
          <img src={event.imageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>
            <div className="card-text">
              <ul>
                <li>Date: {event.date}</li>
                <li>Time: {event.time}</li>
              </ul>
            </div>

          </div>
        </div>
      ))
    }

  </div>
}