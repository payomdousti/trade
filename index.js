const Rx = require("rxjs/Rx");
const Gdax = require("gdax");
// const btc = new Gdax.WebsocketClient(["BTC-USD"]);
const eth = new Gdax.WebsocketClient(["ETH-USD"]);

// const key = 'fac2ccf2299fea7e8f11fa631b0c98fb';
// const b64secret = '13tPN/aeiJT5ozRC1eyhYzK1NMfHWvdmqai9C5IKYd2+Epc1r+WtvoQveOzywRHvcGEomLg7ZZmDbL9tLLZGsw==';
// const passphrase = '17x21hskbes';
//
// const apiURI = 'https://api.gdax.com';
// const sandboxURI = 'https://api-public.sandbox.gdax.com';
//
// const authedClient = new Gdax.AuthenticatedClient(key, b64secret, passphrase, apiURI);
//
// authedClient.getAccounts(data => {
//   console.log(data);
// });

const ethStream = Rx.Observable.fromEvent(eth, "message")
  .filter(data => {
    return data.type === 'done' && data.price;
  })
  .map(data => {
    return data.price;
  })
  .subscribe(value => console.log(value));

// const btcStream = Rx.Observable.fromEvent(btc, "message")
//   .windowTime(10)
//   .filter(data => {
//     return data.type === 'done';
//   })
//   .map(data => {
//     return data.price;
//   })
//   .max();

// Rx.Observable.merge(btcStream, ethStream)
//   .subscribe(value => console.log(value));
