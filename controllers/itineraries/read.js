import Itinerary from "../../models/Itinerary.js";


let allItineraries =  async (req, res, next) => {
    try {
        let all = await Itinerary.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}


let itineraryById = async (req, res, next) => {
    try {
        let itineraryId = req.params.id; // Cambié cityId a itineraryId para mayor claridad
        console.log(`Searching for itinerary with ID: ${itineraryId}`);
        let itinerary = await Itinerary.findById(itineraryId);

        // Verificar si el itinerario existe
        if (!itinerary) {
            return res.status(404).json({
                message: 'Itinerary not found'
            });
        }

        return res.status(200).json({
            response: itinerary,
        });
    } catch (error) {
        console.error(error);
        next(error); // Asegúrate de pasar el error a next() para el manejo de errores global
    }
};


let itinerariesByCity = async (req, res, next) => {
    try {
        let cityName = req.params.city;
        console.log(`Searching for itineraries in city: ${cityName}`);
        let itineraries = await Itinerary.find({ cityId: cityName });
        return res.status(200).json({
            response: itineraries,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}


export { allItineraries, itineraryById, itinerariesByCity }