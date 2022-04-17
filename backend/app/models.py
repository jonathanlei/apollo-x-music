""" db model for nft marketplace """
from turtle import back
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref


db = SQLAlchemy()

# db design
""" TODO: add table for NFT Token offer (status: deline, accept) """


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    wallet_address = db.Column(db.String(255), primary_key=True)
    email = db.Column(db.String(255), nullable=True, unique=True)
    phone = db.Column(db.String(30), nullable=True, unique=True)
    nfts = db.relationship('Nft', backref="owners")
    events = db.relationship(
        'Event', secondary="events_users", backref="users")

    def to_dict(self):
        return {
            "wallet_address": self.wallet_address,
            "email": self.email,
            "phone": self.phone,
            "events": self.events,
        }


class Artist(db.Model):
    """ table for storing Artist details """
    __tablename__ = 'artists'
    id = db.Column(db.Interger, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(35), nullable=False)
    last_name = db.Column(db.String(35), nullable=True)
    bio = db.Column(db.Text, nullable=True)
    instagram = db.Column(db.Text, nullable=False)
    spotify = db.Column(db.Text, nullable=False)
    youtube = db.Column(db.Text, nullable=False)
    personal_website = db.Column(db.Text, nullable=False)
    events = db.relationship("Event", backref="artists")

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "bio": self.bio,
            "instagram": self.instagram,
            "spotify": self.spotify,
            "youtube": self.youtube,
            "personal_website": self.personal_website,
        }


class Event(db.Model):
    """ table for storing music events """
    # TODO: refunding mechinism??
    __tablename__ = "events"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    artist = db.Column(db.Integer, db.ForeignKey("artists.id"), nullable=False)
    description = db.Column(db.Text, nullable=False)
    ticket_amount = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime(timezone=True), nullable=False)
    attendees = db.relationship(
        "User", secondary="events_users", backref="events")
    # TODO: check fundraising goals?
    # how to represent NFTs??

    def to_dict(self):
        return {
            "id": self.id,
            "artist": self.artist,
            "min_fundraising_goal": self.min_fundraising_goal,
            "date": self.date,
            "description": self.description,
            "fundrasing_deadline": self.fundrasing_deadline,
        }


class Nft(db.Model):
    """ table for storing nft metas """
    __tablename__ = 'nfts'
    event_id = db.Column(db.Integer, db.ForeignKey(
        "events.id"), nullable=False)
    contract_address = db.Column(db.Text, primary_key=True)
    image_uri = db.Column(db.Text, nullable=False)
    owner_wallet_address = db.Column(db.Integer, db.ForeignKey(
        "users.wallet_address"), nullable=True)

    def to_dict(self):
        return {
            "event_id": self.event_id,
            "contract_address": self.contract_address,
            "image_uri": self.image_uri,
            "owner_wallet_address": self.owner_wallet_address,
        }


class UserEvent(db.Model):
    __tablename__ = 'users_events'
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"))
    user_wallet_address = db.Column(db.Integer, db.ForeignKey(
        "users.wallet_address"))
    events = db.relationship('Event', backref="users_events")
