import { useState, useEffect } from "react";
import apolloApi from "../../api";
import "./Event.css";
const dummy_info = {
  backgroundImg:
    "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
  nftImg:
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  title: "space jesus tour",
  price: "0.3",
  location: "Shrine Auditorium, Los Angeles",
  artistName: "spaceJesus",
  artistLink: "",
  date: "4/20/22 at 6:00 PM PST",
};
function Event() {
  let [eventInfo, setEventInfo] = useState(dummy_info);
  useEffect(function getEvent() {
    async function getEventAPI() {
      let res = await apolloApi.getArtist();
      setEventInfo(res);
    }
    getEventAPI();
  }, []);

  return (
    <div className="Event-page">
      <img src={eventInfo.backgroundImg} alt=""></img>
      <div className="event-section">
        <h1 className="event-title"> {eventInfo.title} </h1>

        <div className="purchase-section">
          <p className="event-price-eth">{eventInfo.price} ETH</p>
          <p className="event-price-dollar">${eventInfo.price} </p>
          <button className="purchase">Purchase Ticket</button>
        </div>
        <div className="event-details">
          <a className="artist-link" href={eventInfo.artistLink}>
            {eventInfo.artistName}
          </a>
          <p className="event-location"> {eventInfo.location}</p>
          <p className="event-date"> {eventInfo.date}</p>
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

function NFT(props) {
  const { eventName, artist, details, nftImg} = props;

  return (
    <div className="nft">
      <div className="unsplashru-jm3d-bx-cqw">
        <img src={nftImg} alt=""></img>
      </div>
      <div className="group-8">
        <p className="nft-name-of-eventh3">{eventName}</p>
        <p className="featured-artists-loc">
          <span className="span0">{artist}</span>
          <span className="poppins-normal-scarpa-flow-14px">{details}</span>
        </p>
      </div>
    </div>
  );
}
export default Event;
