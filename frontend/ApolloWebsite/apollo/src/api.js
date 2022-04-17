import axios from "axios";

export const Axios = axios.create();
export const Canceler = axios.CancelToken.source();

// FLASK url
const BASE_URL = "http://127.0.0.1:5000/";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class apolloApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get", hasImage = false) {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${apolloApi.token}` };
    if (hasImage) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // /* login  */
  // static async login(userData) {
  //   const res = await this.request(`auth/token`, { ...userData }, "post");
  //   return res.token;
  // }

  // /* signup */
  // static async signup(userData) {
  //   const res = await this.request(`auth/register`, { ...userData }, "post");
  //   return res.token;
  // }

  // /* get the user given the username and token */
  // static async getUser(username) {
  //   const res = await this.request(`users/${username}`);
  //   return res.user;
  // }

  // /* update the user given with user inputted form data */
  // static async updateProfile(userData) {
  //   const data = {
  //     firstName: userData.firstName,
  //     lastName: userData.lastName,
  //     email: userData.email,
  //     password: userData.password,
  //   };

  //   const res = await this.request(`users/${userData.username}`, data, "patch");
  //   return res.user;
  // }

  /** Get details on an NFT by tokenID. */



  static async getEvent(id) {
    const res = await this.request(`api/events/${id}`);
    return res.event;
  }

  /** Get all events. */

  static async getEvents() {
    const res = await this.request(`api/events`);
    return res.event;
  }

  static async getArtist(id) {
    const res = await this.request(`api/artists/${id}`);
    return res.Artist;
  }

  /** Get all Artists. */

  static async getArtists() {
    const res = await this.request(`api/artists`);
    return res.event;
  }


  // /* submit nft mint request and show QR code */
  // static async mintNFT(data) {
  //   const res = await this.request(`api/nfts/mint`, data, "post", true);
  //   return res.pushed;
  // }

  // /* submit nft mint request and show QR code */
  // static async editNFT(id, data) {
  //   const res = await this.request(`api/nfts/${id}/edit`, data, "put");
  //   return res.pushed;
  // }


  /* TODO: end-auction API call
    seller still has to sign
  

  
  */

}

// // for now, put token ("testuser" / "password" on class)
// apolloApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default apolloApi;
