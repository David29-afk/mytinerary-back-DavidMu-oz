import Itinerary from "../../models/Itinerary.js";

let deleteItinerary = async (req, res, next) => {
    try {
        let itineraryId = req.params.id;

        let deletedItinerary = await Itinerary.findByIdAndDelete(itineraryId);

        if (!deletedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }

        return res.status(200).json({
            message: "Itinerary deleted successfully",
            response: deletedItinerary,
        });
    } catch (error) {
        next(error);
    }
};

export default deleteItinerary;