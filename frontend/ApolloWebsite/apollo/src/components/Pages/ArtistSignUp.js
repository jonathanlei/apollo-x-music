import { useState } from "react";
import "./ArtistSignUp.css";
function ArtistSignUp() {
  let [formData, setFormData] = useState({
    files: "",
    aritstName: "",
    location: "",
    Instagram: "",
    Tiktok: "",
    Facebook: "",
    Website: "",
    Spotify: "",
    SoundCloud: "",
    previewUrl: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    if (name === "files") {
      let url = URL.createObjectURL(evt.target.files[0]);
      setFormData((fData) => ({
        ...fData,
        files: evt.target.files[0],
        previewUrl: url,
      }));
    }
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  return (
    <div className="arist-sign-up">
      <div className="form">
        <h1> Sign up as an Aritst</h1>
        <img className="profile-img" src={formData.previewUrl} alt="" />
        <h5>Upload picture</h5>
        <div className="browse">
          <input
            name="files"
            id="upload_file"
            type="file"
            onChange={handleChange}
          />
        </div>

        <form>
          <h4> Profile Information</h4>
          <h5>Name</h5>

          <input
            type="text"
            name="artistName"
            id="artistName"
            className="form-fields"
            placeholder="e.g. 'Crypto Funk"
            value={formData.artistName}
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

          <h4> Social Accounts {"&"} Websites</h4>
          <h5>Tiktok</h5>
          <input
            type="text"
            name="Tiktok"
            id="Tiktok"
            className="form-fields"
            placeholder="e.g. 'Crypto Funk"
            value={formData.Tiktok}
            onChange={handleChange}
          />

          <h5>Facebook</h5>
          <input
            type="text"
            name="Facebook"
            id="Facebook"
            className="form-fields"
            placeholder="e.g. 'Crypto Funk"
            value={formData.Facebook}
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
        <div>
          <button className="sign-up-button"> Sign up!</button>
        </div>
      </div>
    </div>
  );
}

export default ArtistSignUp;
