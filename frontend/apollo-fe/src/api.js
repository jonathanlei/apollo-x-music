import axios from "axios";
import web3 from "web3";
// localhost address
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ApolloAPI {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${ApolloAPI.token}` };
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

  /* login with metamask public_address*/
  static async login(publicAddress) {
    const res = await this.request(
      `auth/?publicAddress=${publicAddress}`,
      "get"
    );
    let user;
    if (res.users.length) {
      user = res.users[0];
    } else {
      this.signup(publicAddress);
    }
  }

  /* signup */
  static async signup(userData) {
    const res = await this.request(`auth/register?`, { ...userData }, "post");
    return res.token;
  }

  /* get the user given the username and token */
  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }

  /* update the user given with user inputted form data */
  static async updateProfile(userData) {
    const data = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    };

    const res = await this.request(`users/${userData.username}`, data, "patch");
    return res.user;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies */
  static async getCompanies(name) {
    const res = await this.request(`companies`, { name });
    return res.companies;
  }

  /** Get all jobs */
  static async getJobs(title) {
    const res = await this.request(`jobs`, { title });
    return res.jobs;
  }

  /* apply for a job with a logged in user */

  static async applyJob(username, id) {
    const res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
    return res.applied;
  }
}

// for now, put token ("testuser" / "password" on class)
ApolloAPI.token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default ApolloAPI;
