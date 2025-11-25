import { Heart } from "lucide-react";
import { cards } from "../utiles/cards";

const Gallery = () => {

    return (
        <>
            <section className="mb-16">
                <h3 className="text-xl font-semibold my-6">Available for similar dates</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {cards[0].map((card) => (
                        <div
                            key={card.id}
                            className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                        >
                            {/* Badge */}
                            <span className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                                Guest Favorite
                            </span>

                            {/* Favorite Button */}
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                <Heart size={20} className="text-gray-600" />
                            </button>

                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Card Detail */}
                            <div className="p-4">
                                <h5 className="text-md font-semibold">{card.title}</h5>
                                <h6 className="text-gray-600">
                                    ${card.price} for nights
                                    <span className="text-pink-500 ml-1">★ {card.rating}</span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-xl font-semibold my-6">Stay in Brechenridge</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {cards[1].map((card) => (
                        <div
                            key={card.id}
                            className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                        >
                            {/* Badge */}
                            <span className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                                Guest Favorite
                            </span>

                            {/* Favorite Button */}
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                <Heart size={20} className="text-gray-600" />
                            </button>

                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Card Detail */}
                            <div className="p-4">
                                <h5 className="text-md font-semibold">{card.title}</h5>
                                <h6 className="text-gray-600">
                                    ${card.price} for nights
                                    <span className="text-pink-500 ml-1">★ {card.rating}</span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className="text-xl font-semibold my-6">Popular Homes in Vail</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {cards[2].map((card) => (
                        <div
                            key={card.id}
                            className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                        >
                            {/* Badge */}
                            <span className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                                Guest Favorite
                            </span>

                            {/* Favorite Button */}
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                <Heart size={20} className="text-gray-600" />
                            </button>

                            {/* Image */}
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />

                            {/* Card Detail */}
                            <div className="p-4">
                                <h5 className="text-md font-semibold">{card.title}</h5>
                                <h6 className="text-gray-600">
                                    ${card.price} for nights
                                    <span className="text-pink-500 ml-1">★ {card.rating}</span>
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Gallery
