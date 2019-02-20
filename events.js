class EventEmitter{

	constructor(){
 		this.listaEscuchadores = {};
	}

  	on(event, escuchador){
    	if(typeof this.listaEscuchadores[event] === "undefined"){
      		this.listaEscuchadores[event] = [];
    	}
    	this.listaEscuchadores[event].push(escuchador);
 	}

  	emit(event, ...args){
    	if(this.listaEscuchadores[event] instanceof Array){
      		for(var i = 0; i < this.listaEscuchadores[event].lenght; i++){
        		this.listaEscuchadores[event][i](...args);
      		}
    	}
  	}
}

exports = module.exports = EventEmitter;