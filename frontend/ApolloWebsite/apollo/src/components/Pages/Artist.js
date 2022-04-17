import { useState, useEffect } from "react";
import apolloApi from "../../api";
import ActionAreaCard from "../Card";
const dummy_info = {
  profileImg:
    "https://static.wikia.nocookie.net/edm/images/c/ce/Space_Jesus.jpg/revision/latest/scale-to-width-down/1000?cb=20200129021234",
  name: "Space Jesus",
  bio: "I love dubstep",
  soundcloud: "",
  instagram: "",
  facebook: "",
  website: "",
  events: [
    {
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
    },
  ],
};
function Artist() {
  let [artistInfo, setArtistInfo] = useState(dummy_info);
  useEffect(function getArtist() {
    async function getArtistAPI() {
      let res = await apolloApi.getArtist();
      setArtistInfo(res);
    }
    getArtistAPI();
  }, []);

  return (
    <div className="Artist-section">
      <div className="Profile-header">
        <img src={artistInfo.profileImg} alt="">
          {" "}
        </img>
      </div>
      <div className="Artist-details">
        <h1 className="name"> {artistInfo.name}</h1>
        <p className="bio"> {artistInfo.bio}</p>
        <div className="links">
          <a href={artistInfo.soundcloud}>Soundcloud</a>
          <a href={artistInfo.instagram}>Instagram</a>
          <a href={artistInfo.facebook}>Facebook</a>
          <a href={artistInfo.website}>Website</a>
        </div>
      </div>
      <div className="events">
        {artistInfo.events.map((e) => (
          <ActionAreaCard
            image={e.backgroundImg}
            eventName={e.title}
            eventInfo={e.location}
            date={e.date}
          />
        ))}
      </div>
    </div>
  );
}
export default Artist;
