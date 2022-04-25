import { useState, useEffect } from "react";
import apolloApi from "../../api";
import "./Event.css";
import NFT from "../NFT";
const dummy_info = {
  backgroundImg:
    "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
  nftImg:
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  title: "Space Jesus Tour",
  price: "0.3",
  priceDollar: "905.23",
  location: "Shrine Auditorium, Los Angeles",
  artistName: "Space Jesus",
  artistLink: "",
  date: "4/20/22 at 6:00 PM PST",
};
function Event() {
  let [eventInfo, setEventInfo] = useState(dummy_info);
  useEffect(function getEvent() {
    async function getEventAPI() {
      let res = await apolloApi.getEvent();
      setEventInfo(res);
    }
    getEventAPI();
  }, []);

  return (
    <div className="event-page">
      <img className='backgroundImage'src={eventInfo.backgroundImg} alt=""></img>
      <div className="event-section">
        <div className="event-details">
          <h1 className="event-title"> {eventInfo.title} </h1>
          <div className='moreDetails'>
            <a className="artist-link" href={eventInfo.artistLink}>
              {eventInfo.artistName}
            </a>
            <p className="event-location"> {eventInfo.location}</p>
            <p className="event-date"> {eventInfo.date}</p>
          </div>
        </div>

        <div className="purchase-section">
          <div className="money-section">
            <p className="event-price-eth">{eventInfo.price} ETH</p>
            <p className="event-price-dollar">(${eventInfo.priceDollar}) </p>
          </div>
          <div className ="button-section">
            <button className="purchase">Purchase Ticket</button>
          </div>
        </div>

      </div>
        <NFT
          nftImg={eventInfo.nftImg}
          eventName="NFT - Space Jesus Tour"
          artist={
            <>
              {eventInfo.artistName}
              <br />
            </>
          }
          details={
            <>
              {eventInfo.location}
              <br />
              {eventInfo.date}
            </>
          }
        />
    </div>
  );
}


export default Event;
