import { useState } from "react";
import "./CreateEvent.css";
import smartContractApi from "../smartContractApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CreateEvent() {
  const [date, setDate] = useState(new Date());
  let [formData, setFormData] = useState({
    nft: "",
    name: "",
    backgroundImg: "",
    location: "",
    details: "",
    ticketAmount: "",
    price: "",
    previewNFTUrl: "",
    previewBackgroundUrl: "",
  });

  function handleChange(evt) {
    console.log(evt.target);
    const { name, value } = evt.target;
    if (name === "nft") {
      let url = URL.createObjectURL(evt.target.files[0]);
      setFormData((fData) => ({
        ...fData,
        files: evt.target.files[0],
        previewNFTUrl: url,
      }));
    } else if (name === "backgroundImg") {
      let url = URL.createObjectURL(evt.target.files[0]);
      setFormData((fData) => ({
        ...fData,
        files: evt.target.files[0],
        previewBackgroundUrl: url,
      }));
    }
    setFormData((fData) => ({ ...fData, [name]: value }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    smartContractApi.createEvent(formData.name);
    smartContractApi.getEvents();
    // smartContractApi.mintTicket();
  }

  return (
    <div className="event-sign-up">
      <h1> Create an Event</h1>
      <form>
        <h5>Event Name</h5>

        <input
          type="text"
          name="name"
          id="name"
          className="form-fields"
          placeholder="e.g. 'The Revival Tour'"
          value={formData.name}
          onChange={handleChange}
        />

        <h5> Date</h5>
        <DatePicker
          className="form-fields"
          selected={date}
          onChange={(date) => setDate(date)}
        ></DatePicker>
        <h5>Location</h5>
        <input
          type="text"
          name="location"
          id="location"
          className="form-fields"
          placeholder="e.g. 'Staples Center'"
          value={formData.location}
          onChange={handleChange}
        />
        <h5>Details</h5>
        <input
          type="textarea"
          name="details"
          id="details"
          className="form-fields"
          placeholder=" e.g. 'Paradise Again World Tour'"
          value={formData.details}
          onChange={handleChange}
        />

        <h5>Number of tickets</h5>
        <input
          name="ticketAmount"
          id="ticketAmount"
          type="number"
          min="1"
          step="5"
          className="form-fields"
          defaultValue={20}
          value={formData.ticketAmount}
          onChange={handleChange}
        />

        <h5>Price in Dollars</h5>
        <input
          name="price"
          id="price"
          type="number"
          min="1"
          step="5"
          className="form-fields"
          value={formData.price}
          defaultValue={13}
          onChange={handleChange}
        />

        <h5>Upload NFT Ticket image</h5>
        <div className="browse">
          <input
            name="nft"
            id="upload_file"
            type="file"
            onChange={handleChange}
          />
        </div>

        <img src={formData.previewNFTUrl} alt="" className="preview-nft-image" />
        <h5>Upload NFT background Image (Optional)</h5>
        <div className="browse">
          <input
            name="backgroundImg"
            id="upload_file"
            type="file"
            onChange={handleChange}
          />
        </div>
        <img className="images" src={formData.previewBackgroundUrl} alt="" />
        <div>
          <button onClick={handleSubmit} className="create-event-btn">
            {" "}
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
