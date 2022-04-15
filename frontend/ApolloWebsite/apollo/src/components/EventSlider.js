import "./EventSlider.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ActionAreaCard from "./Card";
import Event1 from "./event1.svg";
import Event2 from "./event2.svg";
import Event3 from "./event3.svg";
import Event4 from "./event4.svg";


function EventSlider() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

  return (
      <div className="EventSection">
          <h1 className="eventTitle">Concert Events</h1>
          <Carousel className="Carousel" responsive={responsive}>
            <ActionAreaCard image={Event1} eventName="Space Jesus" eventInfo="Shrine Auditorium, Los Angeles" date="4/20/2022 at 6:00 PM PST"/>
            <ActionAreaCard image={Event2} eventName="Bomber Festival" eventInfo="Location" date="Date at 0:00 PM PST"/>
            <ActionAreaCard image={Event3} eventName="Milk and Cereal Tour" eventInfo="Jones Hall" date="5/6/22 at 7:00 PM PST"/>
            <ActionAreaCard image={Event4} eventName="Alibizia" eventInfo="Cromeos Stadium" date="5/6/22 at 8:00 PM PST"/>
            {/* <ActionAreaCard image={Event1} eventName="Space Jesus" eventInfo="asdfasdf" date="asdfasdf"/> */}
        </Carousel>

      </div>
  );
}

export default EventSlider;