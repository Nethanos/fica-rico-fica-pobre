'use strict'

const { sendEmail } = require("./middlewares/ses-client");

async function getValue() {
    const response = await (await fetch("https://api.uphold.com/v0/ticker/EUR-BRL")).json();
    return response;
}
 async function check(currentValue) {
    const nextValue = await getValue();

    if(Math.abs(nextValue - currentValue) > (currentValue * 0,1)) {
        sendEmail('n.santos1897@gmail.com',nextValue.bid).then(() => `Email sent`)
        .catch((e) => console.error(e));
    }

    return nextValue;
}


module.exports = { check, getValue }