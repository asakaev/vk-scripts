var config = require('./config.json');
var VK = require('vksdk');

var vk = new VK({
  'appId': config['app_id'],
  'appSecret': config['secret_key']
});

var access_token = '';
//
//vk.on('serverTokenReady', function(_o) {
//  // Here will be server access token
//  vk.setToken(_o.access_token);
//});
//


vk.setToken(access_token);
//vk.setSecureRequests(true);

vk.request('users.get', {}, function(_dd) {
  console.log(_dd);
});


//vk.on('appServerTokenReady', function() {
//  vk.request('secure.getAppBalance', function(err, res) {
//    console.log(err);
//    console.log(res);
//  });
//  // и так далее...
//});


//
//
//vk.on('serverTokenReady', function (_o) {
//  console.log('TOKEN?: ' + JSON.stringify(_o));
//
//  // Here will be server access token
//  vk.setToken(_o.access_token);
//});
//
//vk.setSecureRequests(true);
//
//vk.request('secure.getSMSHistory', {}, function (_dd) {
//  console.log(_dd);
//});