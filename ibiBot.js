// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const https = require('https');

// The token of your bot - https://discordapp.com/developers/applications/me
const token = '';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  if (!message.author.bot) {
      var args = message.content.split(" ");
      if (args.length === 1 || args.length > 3) {
          if (args[0] === '!getval') {
              message.channel.send('usage: !getval [btc,eth,ltc] [coin amount (optional)]');
          }
      }
      else if (args.length === 2) {
          if (args[0] === '!getval') {
              if (args[1] === 'btc' || args[1] === 'BTC') {
                  https.get('https://api.coinbase.com/v2/prices/BTC-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body); 
                      });
                      res.on('end', function() {
                              message.channel.send(args[1] + ' is at $' + tmpjs.data.amount);
                      });
                  });
              }
              else if (args[1] === 'eth' || args[1] === 'ETH') {
                  https.get('https://api.coinbase.com/v2/prices/ETH-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body); 
                      });
                      res.on('end', function() {
                              message.channel.send(args[1] + ' is at $' + tmpjs.data.amount);
                      });
                  });
              }
              else if (args[1] === 'ltc' || args[1] === 'LTC') { 
                  https.get('https://api.coinbase.com/v2/prices/LTC-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body);
                      });
                      res.on('end', function() {
                              message.channel.send(args[1] + ' is at $' + tmpjs.data.amount);
                      });
                  });
              }
              else {
                  message.channel.send('usage: !getval [btc,eth,ltc] [coin amount (optional)]'); 
              }
          }
      }
      else if (args.length === 3) {
          var numCheck = parseFloat(args[2], 10);
          if (isNaN(numCheck)) {
            message.channel.send('argument after coin must be a number');
          }
          else {
              if (args[1] === 'btc' || args[1] === 'BTC') { 
                  https.get('https://api.coinbase.com/v2/prices/BTC-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body);
                      });
                      res.on('end', function() {
                              message.channel.send('' + numCheck + ' ' + args[1] + ' at $' + tmpjs.data.amount + ' per coin is' +
                              ' $' + (tmpjs.data.amount * numCheck).toFixed(5));
                      });
                  });
              }
              else if (args[1] === 'eth' || args[1] === 'ETH') { 
                  https.get('https://api.coinbase.com/v2/prices/ETH-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body);
                      });
                      res.on('end', function() {
                              message.channel.send('' + numCheck + ' ' + args[1] + ' at $' + tmpjs.data.amount + ' per coin is' +
                              ' $' + (tmpjs.data.amount * numCheck).toFixed(5));
                      });
                  });
              }
              else if (args[1] === 'ltc' || args[1] === 'LTC') { 
                  https.get('https://api.coinbase.com/v2/prices/LTC-USD/buy', (res) => {
                      res.setEncoding('utf8');
                      var tmpjs;
                      res.on('data', function (body) {
                              tmpjs = JSON.parse(body);
                      });
                      res.on('end', function() {
                              message.channel.send('' + numCheck + ' ' + args[1] + ' at $' + tmpjs.data.amount + ' per coin is' +
                              ' $' + (tmpjs.data.amount * numCheck).toFixed(5));
                      });
                  });
              }
              else {
                  message.channel.send('usage: !getval [btc,eth,ltc] [coin amount (optional)]'); 
              }
          }
      }
  }
});

// Log our bot in
client.login(token);