import { useState } from "react";
function ArtistSignUp() {
  let [formData, setFormData] = useState({
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
      <img
        src={formData.previewUrl}
        alt="data:image/jpeg;base64,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"
      />
      <h5>Upload picture</h5>

      <h1> Sign up as an Aritst</h1>
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
    </div>
  );
}

export default ArtistSignUp;
