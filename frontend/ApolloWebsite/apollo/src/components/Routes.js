import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Nav from "./Nav";
import Artist from "./Pages/Artist";
import ArtistList from "./Pages/ArtistList";
import Event from "./Pages/Event";
import EventList from "./Pages/EventList";
import TicketScanner from "./TicketScanner";
import Footer from "./Footer";
import ArtistSignUp from "./Pages/ArtistSignUp";

/** Routes Component
 *
 * Props:
 * - currentUser: {}
 * - logout: function passed from App
 * - login: function passed from App
 * - signup: function passed from App
 * -applyToJob: function passed from App
 *
 * State: none
 *
 * App -> Routes -> {Homepage, CompanyList, CompanyDetail, JobList, LoginForm, SignupForm, ProfileForm}
 * */
function Routes() {
  // const currentUser = useContext(UserContext);
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/events">
          <Event />
        </Route>
        <Route exact path="/events/:id">
          <Event />
        </Route>
        <Route exact path="/artists">
          <Artist />
        </Route>
        <Route exact path="/artists/:id">
          <Artist />
        </Route>
        <Route exact path="/artist-sign-up">
          <ArtistSignUp/>
        </Route>
        <Route exact path="/ticketscanner">
          <TicketScanner />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default Routes;
