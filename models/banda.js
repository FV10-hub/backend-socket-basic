const { v4: uuidV4 } = require('uuid');//este paquete sirve para generar id unicos

class Banda { 
    
    constructor(name = 'no-name') { 
        this.id = uuidV4(); 
        this.name = name;
        this.votes = 0;

    }
}

module.exports = Banda;