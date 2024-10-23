import { Schema, model } from "mongoose";

let collection = 'cities'
let citySchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String }, // Optional
    description: { type: String }, // Optional
    currency: { type: String }, // Optional

},{
    timestamps:true
});


let City = model (collection, citySchema)

export default City

