# using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

_FROM_EMAIL = 'info@apolloxmusic.xyz'

def send_email(
            to_emails, 
            subject, 
            html_content, 
            from_email=_FROM_EMAIL
            ):
    message = Mail(
        from_email=from_email,
        to_emails=to_emails,
        subject=subject,
        html_content=html_content)
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)

    return 

if __name__ == '__main__':
    send_email(
        ['kylung2008@gmail.com', 'kylung@berkeley.edu'], 
        subject='hello from ApolloX Music', 
        html_content='<strong>Hi, welcome to ApolloX Music! Please check out our website at </strong> <a>https://www.apolloxmusic.xyz/</a> <strong>!</strong>'
    )
