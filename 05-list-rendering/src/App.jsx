export default function (App) {


  const events = ["Lucky Draw", "Voucher", "30% off parking"];
  const promotions = [
    {
      "id": 1,
      "title": "Faye Wong Singing",
      "date": "23rd Nov 2026",
      "time": "4:00pm",
      "imageUrl": "https://picsum.photos/id/10/200/200"
    },
    {
      "id": 2,
      "title": "Everything 50% off",
      "date": "24th Nov 2026",
      "time": "6:00pm",
      "imageUrl": "https://picsum.photos/id/11/200/200"
    },
    {
      "id": 3,
      "title": "Lucky Draw",
      "date": "25th Nov 2026",
      "time": "7:30pm",
      "imageUrl": "https://picsum.photos/id/12/200/200"
    }
  ]

  const renderShops = () => {
    const shops = ["Song Fa", "MacDonalds", "Coffee Beans", "NTUC Supermarket"]
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
    <ul>
      {
        events.map((e, index) => <li key={index}>{e}</li>)
      }
    </ul>
    <h2>Promotions</h2>

    {
      promotions.map((event,index) => (
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