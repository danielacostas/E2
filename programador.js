const later = require('later');
const EventEmitter = require('./events');

class Programador extends EventEmitter {

	constructor(horaytemperatura){
		super();
		later.date.localTime();
		if(horaytemperatura instanceof Array){
      		for(var i = 0; i < horaytemperatura.lenght; i++){
        	var conf = horaytemperatura[i];
        	later.setInterval(
          		() => this.emit('ideal', conf.temperatura),
          		later.parse.text('at' + conf.hora)
      		);
    		}	
		}
	}
}

exports = module.exports = Programador;