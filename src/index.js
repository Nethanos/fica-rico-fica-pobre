'use strict'

const { check, getValue } = require('./app')


async function start() {
    let currentValue = await getValue();

    setInterval(async () => {
        currentValue = await check(currentValue);
        console.log(currentValue);
    }, 5000)

}

start();