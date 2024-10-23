import City from "../../models/City.js";

let createCity = async (req, res, next) => {
    try {
        let city = req.body
        let all = await City.create (city)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

let updateCity = async (req, res, next) => {
    try {
        let cityId = req.params.id;
        let updatedData = req.body;

        let updatedCity = await City.findByIdAndUpdate(cityId, updatedData, { new: true });

        if (!updatedCity) {
            return res.status(404).json({ message: "City not found" });
        }

        return res.status(200).json({
            response: updatedCity,
        });
    } catch (error) {
        next(error);
    }
};

let deleteCity = async (req, res, next) => {
    try {
        let cityId = req.params.id;

        let deletedCity = await City.findByIdAndDelete(cityId);

        if (!deletedCity) {
            return res.status(404).json({ message: "City not found" });
        }

        return res.status(200).json({
            message: "City deleted successfully",
            response: deletedCity,
        });
    } catch (error) {
        next(error);
    }
};



export { createCity, updateCity, deleteCity }