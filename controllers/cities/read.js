import City from "../../models/City.js";

let allCities =  async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}

let cityById =  async (req, res, next) => {
    try {
        let cityId = req.params.id
        console.log(`Searching for city with ID: ${cityId}`);
        let city = await City.findById(cityId)
        return res.status(200).json({
            response: city,
        })
    } catch (error) {
        console.error(error);
       next(error)
}
}

export { allCities, cityById }