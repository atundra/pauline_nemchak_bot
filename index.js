const { Composer } = require('micro-bot');
const app = new Composer();

const BASE_STRING = 'ах';
const AHAH_MAX_LENGTH = 4;

const START_MESSAGE = 'Отправь мне команду /ahah чтобы получить порцию ахахов';

const getRandomAhah = _ => BASE_STRING.padStart(Math.ceil(Math.random() * (AHAH_MAX_LENGTH - 1)) * BASE_STRING.length + BASE_STRING.length, BASE_STRING);

app.command('start', ctx => ctx.reply(START_MESSAGE))
app.command('ahah', ctx => ctx.reply(getRandomAhah()));

module.exports = app;
