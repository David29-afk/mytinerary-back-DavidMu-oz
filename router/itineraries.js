import { Router } from "express";
import { allItineraries,itineraryById, itinerariesByCity } from "../controllers/itineraries/read.js";
import createItinerary from "../controllers/itineraries/create.js";
import updateItinerary from "../controllers/itineraries/update.js";
import deleteItinerary from "../controllers/itineraries/delete.js";



const router = Router()


router.get('/all', allItineraries)
router.get('/id/:id', itineraryById)
router.get('/city/:city', itinerariesByCity)
router.post('/create', createItinerary)
router.put('/update/:id', updateItinerary);
router.delete('/delete/:id', deleteItinerary);



export default router