const EventEmitter = require('events');
class MyEmitter extends  EventEmitter {};
const myEmitter = new MyEmitter();
myEmitter.on('event',()=>{
  console.log('an event ocurred!');
});
setInterval(()=>myEmitter.emit('event'),500);