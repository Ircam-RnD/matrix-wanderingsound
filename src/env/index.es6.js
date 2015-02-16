var clientSide = require('soundworks/client');
var client = clientSide.client;

client.init('/env');

class Env extends clientSide.Module {
  constructor() {
    super('env', true);

    var socket = client.socket;

    socket.on('perf_control', (soloistId, pos, d, s) => {
      //console.log('env perf_control', soloistId, pos, d, s);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  var sync = new clientSide.SetupSync();
  var env = new Env();

  client.start(client.serial(sync, env));
});