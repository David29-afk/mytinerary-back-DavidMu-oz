import "dotenv/config.js"
import '../../config/database.js'
import Itinerary from "../Itinerary.js";


const itineraries = [
    {
        cityId: "671812d06817cc634497ac9d",
        photo: "https://img.freepik.com/foto-gratis/paisaje-niebla-matutina-montanas-globos-aerostaticos-al-amanecer_335224-794.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "John Doe",
        nameItinerary: "City Explorer",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#adventure", "#sightseeing", "#food"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-1_23-2148196100.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9d",
        photo: "https://img.freepik.com/foto-gratis/entrada-laguna-azul-rocas-lava-musgo-verde-al-atardecer-islandia_335224-689.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Jane Smith",
        nameItinerary: "Nature Lover",
        price: 4,
        duration: 7,
        likes: 0,
        hashtags: ["#culture", "#vacation", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-1_23-2148196200.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9d",
        photo: "https://img.freepik.com/foto-gratis/cascada-barco-limpio-china-natural_1417-1356.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Robert Brown",
        nameItinerary: "Solo Traveler",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["#sightseeing", "#food", "#adventure"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-2_23-2148196300.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9d",
        photo: "https://img.freepik.com/foto-gratis/camino-sinuoso-junto-al-campo-flores-petalos-amarillos_422131-69.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Alice Johnson",
        nameItinerary: "Happy Adventure",
        price: 5,
        duration: 8,
        likes: 0,
        hashtags: ["#vacation", "#explore", "#culture"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-2_23-2148196400.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9d",
        photo: "https://img.freepik.com/foto-gratis/disparo-idilico-enorme-montana-cubierta-vegetacion-cuerpo-agua-su-base_181624-21444.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Mary Davis",
        nameItinerary: "Cultural Experience",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#adventure", "#sightseeing", "#vacation"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-3_23-2148196500.jpg"
    },
    {
        cityId: "671812d06817cc634497aca0",
        photo: "https://img.freepik.com/foto-gratis/impresionante-vista-otonal-carretera-rodeada-hermosas-coloridas-hojas-arboles_181624-18178.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Michael Lee",
        nameItinerary: "Urban Explorer",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#culture", "#food", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-4_23-2148196600.jpg"
    },
    {
        cityId: "671812d06817cc634497aca0",
        photo: "https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "James Miller",
        nameItinerary: "Coastal Adventure",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#beach", "#sun", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-5_23-2148196700.jpg"
    },
    {
        cityId: "671812d06817cc634497aca0",
        photo: "https://img.freepik.com/foto-gratis/camino-pilot-mountain-carolina-norte-nublado-dia-invierno_181624-24543.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Liam King",
        nameItinerary: "Forest Retreat",
        price: 1,
        duration: 3,
        likes: 0,
        hashtags: ["#nature", "#relax", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-6_23-2148196800.jpg"
    },
    {
        cityId: "671812d06817cc634497aca0",
        photo: "https://img.freepik.com/foto-gratis/hermosa-foto-cascada-que-baja-montanas_181624-1282.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Grace Nelson",
        nameItinerary: "Dance Night Out",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#dance", "#nightlife", "#fun"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-4_23-2148196900.jpg"
    },
    {
        cityId: "671812d06817cc634497aca0",
        photo: "https://img.freepik.com/foto-gratis/humedo-vietnam-flujo-montana-flujo-rural_1417-1357.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Mason Carter",
        nameItinerary: "Street Photography",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#streetphotography", "#explore", "#art"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-7_23-2148197000.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9e",
        photo: "https://img.freepik.com/foto-gratis/muelle-madera-marron_198523-110.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Abigail Baker",
        nameItinerary: "Happy Moments",
        price: 1,
        duration: 3,
        likes: 0,
        hashtags: ["#happiness", "#explore", "#fun"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-5_23-2148197100.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9e",
        photo: "https://img.freepik.com/foto-gratis/temporada-otono-montana-fuji-lago-kawaguchiko-japon_335224-94.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Logan Moore",
        nameItinerary: "Sunset Watch",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#sunset", "#explore", "#nature"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-8_23-2148197200.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9e",
        photo: "https://img.freepik.com/foto-gratis/camino-sinuoso-bosque_181624-27698.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Sofia Turner",
        nameItinerary: "Mountain Adventure",
        price: 5,
        duration: 4,
        likes: 0,
        hashtags: ["#mountains", "#adventure", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-6_23-2148197300.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9e",
        photo: "https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Oliver Roberts",
        nameItinerary: "Campus Tour",
        price: 2,
        duration: 5,
        likes: 0,
        hashtags: ["#education", "#explore", "#fun"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-9_23-2148197400.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9f",
        photo: "https://img.freepik.com/foto-gratis/hojas-otono-coloridas-hermosas_1232-2662.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Noah Harris",
        nameItinerary: "Bike Adventure",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#biking", "#nature", "#adventure"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-10_23-2148197500.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9f",
        photo: "https://img.freepik.com/foto-gratis/selva-lago-vacaciones-movimiento-primavera-otono_1417-1268.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Emily Foster",
        nameItinerary: "Horizon View",
        price: 2,
        duration: 4,
        likes: 0,
        hashtags: ["#hiking", "#nature", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-7_23-2148197600.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9f",
        photo: "https://img.freepik.com/foto-gratis/colorida-cascada-majestuosa-bosque-parque-nacional-otono_554837-661.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Ella White",
        nameItinerary: "Snow Getaway",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#snow", "#winter", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-8_23-2148197700.jpg"
    },
    {
        cityId: "671812d06817cc634497ac9f",
        photo: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-cumbre-clave-lago-marian-nueva-zelanda_181624-43215.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Jacob Brown",
        nameItinerary: "Beach Fun",
        price: 4,
        duration: 6,
        likes: 0,
        hashtags: ["#beach", "#fun", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-11_23-2148197800.jpg"
    },
    {
        cityId: "671812d06817cc634497aca6",
        photo: "https://img.freepik.com/foto-gratis/flujo-vacaciones-hoja-selva-fondo-cascada_1417-1258.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Isaac Clarke",
        nameItinerary: "Photography Walk",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#photography", "#explore", "#nature"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-12_23-2148197900.jpg"
    },
    {
        cityId: "671812d06817cc634497aca6",
        photo: "https://img.freepik.com/foto-gratis/barquero-remar-barco-rio-arashiyama-temporada-otono-junto-al-rio-kyoto-japon_335224-22.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Sophia Green",
        nameItinerary: "Foodie Adventure",
        price: 2,
        duration: 4,
        likes: 0,
        hashtags: ["#food", "#explore", "#culture"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-9_23-2148198000.jpg"
    },
    {
        cityId: "671812d06817cc634497aca6",
        photo: "https://img.freepik.com/foto-gratis/morskie-oko-tatry_1204-510.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Ava Wright",
        nameItinerary: "Nature Retreat",
        price: 5,
        duration: 7,
        likes: 0,
        hashtags: ["#nature", "#relax", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-10_23-2148198100.jpg"
    },
    {
        cityId: "671812d06817cc634497aca6",
        photo: "https://img.freepik.com/foto-gratis/hermosa-foto-paisaje-natural-otono_181624-25934.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Liam Bennett",
        nameItinerary: "Adventure Seeker",
        price: 3,
        duration: 5,
        likes: 0,
        hashtags: ["#adventure", "#explore", "#travel"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-13_23-2148198200.jpg"
    },
    {
        cityId: "67193fbcd42cafe966db41ee",
        photo: "https://img.freepik.com/foto-gratis/hermosa-chica-disfrutando-campos-flores-mirador-amanecer-provincia-tak_335224-1118.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Emma Hughes",
        nameItinerary: "Playful Day",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["#fun", "#explore", "#joy"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-11_23-2148198300.jpg"
    },
    {
        cityId: "67193fbcd42cafe966db41ee",
        photo: "https://img.freepik.com/foto-gratis/phu-chi-fa-niebla-al-amanecer-provincia-chiang-rai-tailandia_335224-1105.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "David Johnson",
        nameItinerary: "Lake Relaxation",
        price: 4,
        duration: 5,
        likes: 0,
        hashtags: ["#lake", "#relax", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-14_23-2148198400.jpg"
    },
    {
        cityId: "67193fbcd42cafe966db41ee",
        photo: "https://img.freepik.com/foto-gratis/hombre-feliz-jugando-con-su-perro_23-2149472841.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Ethan King",
        nameItinerary: "Dog Play Day",
        price: 1,
        duration: 2,
        likes: 0,
        hashtags: ["#pets", "#fun", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-15_23-2148198500.jpg"
    },
    {
        cityId: "67193fbcd42cafe966db41ee",
        photo: "https://img.freepik.com/foto-gratis/hermosos-arboles-cerezos-flor-que-florecen-primavera_335224-878.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Samuel Taylor",
        nameItinerary: "Business Meeting",
        price: 2,
        duration: 3,
        likes: 0,
        hashtags: ["#business", "#meeting", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-hombre-16_23-2148198600.jpg"
    },
    {
        cityId: "67193fbcd42cafe966db41ee",
        photo: "https://img.freepik.com/foto-gratis/hermosa-foto-paisaje-salvaje-al-atardecer_181624-52160.jpg?uid=R60235045&ga=GA1.1.1695286958.1729629275&semt=ais_hybrid",
        name: "Olivia Wilson",
        nameItinerary: "Gym Routine",
        price: 5,
        duration: 6,
        likes: 0,
        hashtags: ["#fitness", "#health", "#explore"],
        photoUser: "https://img.freepik.com/foto-gratis/foto-perfil-mujer-12_23-2148198700.jpg"
    }
];


async function saveItineraries() {
    try {
        await Itinerary.insertMany(itineraries);
        console.log("Itineraries saved successfully!");
    } catch (error) {
        console.error("Error saving itineraries:", error);
    }
}

saveItineraries();


