import Itinerary from "../../models/Itinerary.js";

let updateItinerary = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;
        let updatedData = req.body;

        let updatedItinerary = await Itinerary.findByIdAndUpdate(itineraryId, updatedData, { new: true });

        if (!updatedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }

        return res.status(200).json({
            response: updatedItinerary,
        });
    } catch (error) {
        next(error);
    }
};

export default updateItinerary;