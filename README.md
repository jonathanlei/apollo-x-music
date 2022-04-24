# apollo-x-music

## Installation

```
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```

## Usage

### backend

```
$ cd <ApolloXMusic_dir>/backend/
# prepare twilio related environment variables
# option 1: local testing
$ source twilio.env # (local)
# option 2: deploy to server - SETUP twilio-related environment variables -- SENDGRID_API_KEY & TWILIO_AUTH_TOKEN from sendgrid and twilio account, respectively. And add them to the server's environment variables.
```

### frontend

```
$ cd <ApolloXMusic_dir>/frontend/ApolloWebsite/apollo/
$ npm install
$ npm start
```
