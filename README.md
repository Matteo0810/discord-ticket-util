# Discord Util

## Exemple

first, you need to require the module

```js
const TicketManager = require('discord-ticket');
```

then, you need to init the TicketManager 

```js
const ticketManager = new TicketManager({
    categoryID: "1455455551441",
    ticketNameTemplate: "super-ticket-of-"
});  //init the ticketManager with some option
```

finally, with you can create or delete ticket as you want

```js
...
const member = message.member; //get the member

ticketManager.createTicket(member) //put member as parameter to create ticket
ticketManager.deleteTicket(member) //put member as parameter to delete ticket
```

Exemple on discord bot
```js
const { Client } = require('discord.js'),
    TicketManager = require('discord-ticket'),
    client = new Client();

client.ticketManager = new TicketManager({
   categoryID: "1455455551441",
   ticketNameTemplate: "super-ticket-of"
});

client.on('message', message => {
    if(!message.guild || message.author.bot) return;

    const member = message.member;
    client.ticketManager.createTicket(member);
    client.ticketManager.deleteTicket(member);
});
```
