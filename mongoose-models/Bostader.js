module.exports = function(mongoose){

  // Product mongoose schema
  var bostad = mongoose.Schema({
    egenID: {type: Number, required: true},
    region: {type: String, required: false},
    stad: {type: Object, required: false},
    adress: {type: String, required: true},
    typAvBostad: {type: String, required: true},
    pris: {type: Number, required: true},
    hyra: {type: Number, required: false},
    antalRum: {type: Number, required: false},
    antalBadrum: {type: Number, required: false},
    antalGarage: {type: Number, required: false},
    info: {type: String, required: true},
    bilder: {type: Array, required: false},
    våning: {type: Number, required: false},
    harBalkong: {type: Boolean, required: false},
    harHiss: {type: Boolean, required: false},
    datum: {type: String, required: false},
    harVaritAktivLenge: {type: Boolean, required: false},
    harVaritAktivJetteLenge: {type: Boolean, required: false},
    harTomt: {type: Boolean, required: false},
    maklare: {type: String, required: false},

  });

  // Create & return model
  return mongoose.model("Bostad", bostad);
};

