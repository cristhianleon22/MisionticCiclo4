# -*- coding: utf-8 -*-
"""
Created on Wed Nov 10 20:12:29 2021

@author: AUX ING
"""


#modulos 
from flask import Flask
import os
from twilio.rest import Client
from flask import request
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)

@app.route("/")
def inicio():
    test = os.environ.get("T")
    return test

@app.route("/sms")
def sms():
   try:
        # Download the helper library from https://www.twilio.com/docs/python/install
        # Find your Account SID and Auth Token at twilio.com/console
        # and set the environment variables. See http://twil.io/secure
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        contenido = request.args.get("mensaje")
        destino = request.args.get("telefono")
        message = client.messages \
                        .create(
                             body=contenido,
                             from_='+18042590120',
                             to='+57'+ destino
                         )
        
        print(message.sid)
        return "enviado correctamente"
        
   except Exception as e:
       return "Error enviando el mensaje"
   
    
   
@app.route("/envio-correo")
def email():
    destino = request.args.get("correo_destino")
    asunto = request.args.get("asunto")
    mensaje= request.args.get("contenido")
    
    message = Mail(
    from_email='cristhiancleon@gmail.com',
    to_emails=destino,
    subject=asunto,
    html_content=mensaje)
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "correo enviado"
    
    except Exception as e:
        print(e.message)
        return "error enviando correo"

if __name__ == '__main__':
    app.run()
    