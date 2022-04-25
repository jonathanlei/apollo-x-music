import os
from twilio.rest import Client


def send_sms(body_text, to_phone_number):
    account_sid = "AC22e9a90d111f6d63b2ba3555ac0ddad3"
    auth_token = os.environ.get("TWILIO_AUTH_TOKEN")
    client = Client(account_sid, auth_token)

    message = client.messages.create(
        messaging_service_sid="MGe15933f46eace51cd507a38373573840",
        body=body_text,
        to=to_phone_number,
    )

    print(message)
    return


if __name__ == "__main__":
    send_sms(body_text="Apollo Music Sending SMS Test", to_phone_number="+15108595106")
