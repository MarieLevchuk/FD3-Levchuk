import {EventEmitter} from 'events';

let shopEvents = new EventEmitter(); 

shopEvents.on('showInfo', function(text){
  console.log(text);
})

export default shopEvents;