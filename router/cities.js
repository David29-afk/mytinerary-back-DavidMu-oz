import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import { createCity, updateCity, deleteCity } from "../controllers/cities/create.js";


const router = Router()

router.get('/all', allCities)
router.get('/id/:id', cityById)
router.post('/create', createCity)
router.put('/update/:id', updateCity);
router.delete('/delete/:id', deleteCity);





export default router