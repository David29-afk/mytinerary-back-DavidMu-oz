import { Schema, model } from "mongoose";

let collection = 'itineraries'
// Esquema de Itinerario
const itinerarySchema = new Schema({
    cityId: { type: Schema.Types.ObjectId, ref: 'City', required: true }, // Referencia a la ciudad
    price: { type: Number, required: true },
    name: { type: String }, // Opcional
    nameItinerary: { type: String }, // Opcional
    photo: { type: String, required: true },
    photoUser: { type: String, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    hashtags: { type: [String] }
}, {
    timestamps: true
});


// Crear modelo
const Itinerary = model(collection, itinerarySchema);

// Exportar el modelo
export default Itinerary


