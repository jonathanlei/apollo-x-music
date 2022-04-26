import { useState } from "react";
import "./CreateEvent.css";
function CreateEvent() {
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
    const { name, value } = evt.target;
    if (name === "nft") {
      let url = URL.createObjectURL(evt.target.files[0]);
      setFormData((fData) => ({
        ...fData,
        files: evt.target.files[0],
        previewUrl: url,
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
          placeholder="e.g. 'Crypto Funk"
          value={formData.name}
          onChange={handleChange}
        />
        <h5>Location</h5>
        <input
          type="text"
          name="location"
          id="location"
          className="form-fields"
          placeholder="e.g. 'Crypto Funk"
          value={formData.location}
          onChange={handleChange}
        />
        <h5>Details</h5>
        <input
          type="textarea"
          name="details"
          id="details"
          className="form-fields"
          placeholder="e.g. 'Crypto Funk"
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
          onChange={handleChange}
        />
        <div>
          <button> Create Event</button>
        </div>

        <img src={formData.previewNFTUrl} alt="" />
      <h5>Upload NFT Ticket image</h5>
      <div className="browse">
        <input
          name="nft"
          id="upload_file"
          type="file"
          onChange={handleChange}
        />
      </div>
      <h5>Upload NFT background Image (Optional)</h5>
      <div className="browse">
        <input
          name="backgroundImg"
          id="upload_file"
          type="file"
          onChange={handleChange}
        />
        <img src={formData.previewBackgroundUrl} alt="" />
      </div>

      </form>
    </div>
  );
}

export default CreateEvent;
