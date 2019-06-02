# socket.io_server

```js
import socket from './';

new socket(3000, [
  {
    name: 'test',
    action: function(message, client) {
      console.log(message); // message emit from client
      console.log(client.master); // id current client
      client.clients; // all clients connect on the socket
      client.actions.sendMessageToMaster('event', 'Hello world'); // Sending an event to the master client
      client.actions.sendMessageToOne(client.clients[0].id, 'event', 'Hello world'); // Sending a message to only one customer targeted by ID
      client.actions.sendMessageToOthers('event', 'Hello world'); // Send a message to all other customers
      client.actions.sendMessageToAll('event', 'Hello world'); // Send a message to all customers
      client.infos = { ...myInfos };
    },
    {
      logger: true, levelLogger: 0, personalLogger: console.log // options
    }
  }
]);
```
