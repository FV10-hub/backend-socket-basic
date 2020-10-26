const { io } = require('../index');
const Banda = require('../models/banda');
const Bandas = require('../models/bandas');
const bandas = new Bandas();

bandas.addBanda( new Banda('Queen'));
bandas.addBanda( new Banda('Bon Jovi'));
bandas.addBanda( new Banda('Metallica'));
bandas.addBanda( new Banda('Hermetica'));
bandas.addBanda(new Banda('Don Omar'));

console.log(bandas);

io.on('connect', client => {

    client.emit('bandas-activas', bandas.getBandas());

    //voto
    client.on('vote-banda', (payload) => {
        bandas.votesBandas(payload.id);
        io.emit('bandas-activas', bandas.getBandas());
    });
    
    client.on('emitir-mensaje', (payload) => {
        console.log(payload);
        client.emit('nuevo-mensaje', payload);
    });
    //add
    client.on('add-banda', (payload) => {
        bandas.addBanda(new Banda(payload.name));
        io.emit('bandas-activas', bandas.getBandas());
    });

    //delete
    client.on('delete-banda', (payload) => {
        bandas.deleteBanda(payload.id);
        io.emit('bandas-activas', bandas.getBandas());
    });

});

