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
    <div className="arist-sign-up">
      <img src={formData.previewUrl} alt="" />
      <h5>Upload picture</h5>
      <div className="browse">
        <input
          name="files"
          id="upload_file"
          type="file"
          onChange={handleChange}
        />
      </div>

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
        <h5>Instagram</h5>
        <input
          type="text"
          name="Instagram"
          id="Instagram"
          className="form-fields"
          placeholder="e.g. 'Crypto Funk"
          value={formData.Instagram}
          onChange={handleChange}
        />
      </form>

      <h4> Musical Accounts</h4>
      <h5>Spotify</h5>
      <input
        type="text"
        name="Spotify"
        id="Spotify"
        className="form-fields"
        placeholder="e.g. 'Crypto Funk"
        value={formData.Spotify}
        onChange={handleChange}
      />

      <h5>SoundCloud</h5>
      <input
        type="text"
        name="SoundCloud"
        id="SoundCloud"
        className="form-fields"
        placeholder="e.g. 'Crypto Funk"
        value={formData.SoundCloud}
        onChange={handleChange}
      />
    </div>
  );
}

export default CreateEvent;
