import { useState, useEffect } from "react";
import apolloApi from "../../api";

function Event() {
  let [eventInfo, setEventInfo] = useState({});
  useEffect(function getEvent() {
    async function getEventAPI() {
      let res = await apolloApi.getArtist();
      setEventInfo(res);
    }
    getEventAPI();
  }, []);

  return (
    <>
      <img src={eventInfo.backgroundImg} alt=""></img>
    </>
  );
}
export default Event;
