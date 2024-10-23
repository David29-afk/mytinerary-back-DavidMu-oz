import "dotenv/config.js"
import '../../config/database.js'
import City from '../City.js'


const cities = [
    {
        name: "New York",
        photo: "https://img.freepik.com/foto-gratis/vista-estatua-libertad-ciudad-nueva-york_23-2150860843.jpg?semt=ais_hybrid",
        country: "United States",
        continent: "North America",
        description: "The largest city in the United States, known for its skyline and cultural diversity.",
        currency: "USD",
        area: 789
    },
    {
        name: "Tokyo",
        photo: "https://img.freepik.com/foto-gratis/mujer-asiatica-vistiendo-kimono-tradicional-japones-temple-tokio-japon_335224-205.jpg?semt=ais_hybrid",
        country: "Japan",
        continent: "Asia",
        description: "A bustling metropolis known for its modern architecture and vibrant culture.",
        currency: "JPY",
        area: 2191
    },
    {
        name: "Paris",
        photo: "https://img.freepik.com/foto-gratis/famosa-torre-eiffel-paris-hermosos-colores_268835-830.jpg?semt=ais_hybrid",
        country: "France",
        continent: "Europe",
        description: "The capital city of France, famous for its art, fashion, and the Eiffel Tower.",
        currency: "EUR",
        area: 105
    },
    {
        name: "Cairo",
        photo: "https://img.freepik.com/foto-gratis/vista-monumento-mundial-celebrar-dia-patrimonio-mundial_23-2151297241.jpg?semt=ais_hybrid",
        country: "Egypt",
        continent: "Africa",
        description: "The capital of Egypt, known for its ancient history and proximity to the Pyramids.",
        currency: "EGP",
        area: 606
    },
    {
        name: "Sydney",
        photo: "https://img.freepik.com/foto-gratis/arquitectura-monumento-antiguo-celebracion-dia-patrimonio-mundial_23-2151297181.jpg?semt=ais_hybrid",
        country: "Australia",
        continent: "Australia",
        description: "Known for its Sydney Opera House and beautiful harbor.",
        currency: "AUD",
        area: 12368
    },
    {
        name: "Rio de Janeiro",
        photo: "https://img.freepik.com/foto-gratis/toma-aerea-hermosa-playa-copacabana-rio-janeiro-brasil-cielo-atardecer_181624-7183.jpg?semt=ais_hybrid",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its beaches, Carnival festival, and the Christ the Redeemer statue.",
        currency: "BRL",
        area: 1182
    },
    {
        name: "Moscow",
        photo: "https://img.freepik.com/foto-gratis/catedral-cristo-salvador-moscu_1398-3903.jpg?semt=ais_hybrid",
        country: "Russia",
        continent: "Europe",
        description: "The capital city, known for its historical architecture and rich cultural heritage.",
        currency: "RUB",
        area: 2561
    },
    {
        name: "Beijing",
        photo: "https://img.freepik.com/foto-gratis/hermoso-tiro-angulo-verde-azulado-puerta-templo-rojo-gallery-place-chinatown_181624-8396.jpg?semt=ais_hybrid",
        country: "China",
        continent: "Asia",
        description: "The capital of China, famous for its modern and ancient architecture.",
        currency: "CNY",
        area: 16410
    },
    {
        name: "Delhi",
        photo: "https://img.freepik.com/foto-gratis/foto-fascinante-famoso-historico-taj-mahal-agra-india_181624-16028.jpg?semt=ais_hybrid",
        country: "India",
        continent: "Asia",
        description: "The capital territory of India, known for its rich history and diverse culture.",
        currency: "INR",
        area: 1484
    },
    {
        name: "Cape Town",
        photo: "https://img.freepik.com/foto-gratis/hermoso-paisaje-montanoso-playa-cabo-buena-esperanza-ciudad-cabo-sudafrica_181624-7100.jpg?semt=ais_hybrid",
        country: "South Africa",
        continent: "Africa",
        description: "Known for its stunning landscapes and Table Mountain.",
        currency: "ZAR",
        area: 400
    },
    {
        name: "Berlin",
        photo: "https://img.freepik.com/foto-gratis/edificio-banco-cca_1268-14720.jpg?semt=ais_hybrid",
        country: "Germany",
        continent: "Europe",
        description: "The capital city known for its art scene and modern landmarks.",
        currency: "EUR",
        area: 891
    },
    {
        name: "Buenos Aires",
        photo: "https://img.freepik.com/foto-gratis/vista-centro-angeles-parque-arquitecturas-urbanas-fuente_649448-2543.jpg?semt=ais_hybrid",
        country: "Argentina",
        continent: "South America",
        description: "The capital city known for its European-style architecture and rich culture.",
        currency: "ARS",
        area: 203
    },
    {
        name: "Bangkok",
        photo: "https://img.freepik.com/foto-gratis/templo-wat-arun-crepusculo-bangkok-tailandia_335224-772.jpg?semt=ais_hybrid",
        country: "Thailand",
        continent: "Asia",
        description: "The capital city known for its vibrant street life and cultural landmarks.",
        currency: "THB",
        area: 1568
    },
    {
        name: "Istanbul",
        photo: "https://img.freepik.com/foto-gratis/ver-traves-arco-puerta-mezquita-azul-estambul-es-turquia_628469-117.jpg?semt=ais_hybrid",
        country: "Turkey",
        continent: "Asia/Europe",
        description: "A city that straddles Europe and Asia across the Bosphorus Strait.",
        currency: "TRY",
        area: 5461
    }
];

City.insertMany(cities)