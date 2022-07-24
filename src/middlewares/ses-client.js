'use strict'
require('dotenv').config()


const AWS = require('@aws-sdk/client-ses')

const API_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY= process.env.AWS_SECRET_KEY;

const client = new AWS.SES({ region: "us-east-1", credentials: {
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: API_ACCESS_KEY
} });


function sendEmail(destination, value) {
    return client.sendEmail({
        Source: 'n.santos1897@gmail.com',
        Destination: {
            ToAddresses: [destination]
        },
        Message: {
            Subject: {
                Charset: 'utf-8',
                Data: 'EURO is on the move!'
            },
            Body: {
                Text: {
                    Charset: 'utf-8',
                    Data: `Euro price is now R$${Number(value).toFixed(2)}. You will receive R$${Number(value * 5130).toFixed(2)}`
                }
            }
        }
    })
}


module.exports =  { sendEmail }