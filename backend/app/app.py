from flask import Flask
from requests import request
from models import db, User, Artist, Event, Nft


app = Flask(__name__)


@app.route("/artists")
def get_all_artists():
    artists = Artist.query.all()
    return {"artists": [artist.to_dict() for artist in artists]}


@app.route("/artists/<int:id>")
def get_artist(id):
    artist = Artist.query.get(id)
    return {"artist": artist.to_dict()}


@app.route("/artists/sign-up", methods=["POST"])
def sign_up_artist():
    data = request.json
    aritst = Artist(name=data["name"], bio=data["bio"],
                    instagram=data["instagram"],
                    spotify=data["spotify"], youtube=data["youtube"],
                    personal_website=data["personal_website"])
    db.session.add(aritst)
    db.session.commit()
    return {"artist": aritst.to_dict()}


@app.route("/artists/<int:id>/create-event", methods=["POST"])
def create_event(id):
    artist = Artist.query.get(id)
    data = request.json
    event = Event(name=data["name"], artist=artist.id,
                  description=data["description"],
                  ticket_amount=data["ticket_amount"], date=data["date"],
                  location=data["location"])
    db.session.add(event)
    db.session.commit()
    #TODO: blockchain component
    return {"event": event.to_dict()}


@app.route("/artists/<int:id>/events")
def get_artist_events(id):
    artist = Artist.query.get(id)
    return {"events": artist.events}


@app.route("/events")
def get_all_events():
    events = Event.query.all()
    return {"events": [event.to_dict() for event in events]}


@app.route("/events/<int:id>")
def get_event(id):
    event = Event.query.get(id)
    return {"event": event.to_dict()}
