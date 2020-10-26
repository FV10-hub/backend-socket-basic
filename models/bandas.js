const Banda = require("./banda");

class Bandas {
    
    constructor() {
        this.bandas = []; 
    }

    addBanda(banda = new Banda()) {
        this.bandas.push(banda);
    }
    getBandas() {
        return this.bandas;
    }

    deleteBanda(id = '') {
        this.bandas = this.bandas.filter(banda => banda.id !== id);
        return this.bandas;
    }

    votesBandas(id = '') { 
        this.bandas = this.bandas.map(banda => {
            if (banda.id === id) {
                banda.votes += 1;
                return banda;
            } else { 
                return banda;
            }
        });
    }
}

module.exports = Bandas;