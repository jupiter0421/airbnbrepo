import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";

interface CarouselProps {
    items: {
        id: number;
        title: string;
        price: number;
        rating: number;
        img: string;
    }[],
    article: string
}

export default function Carousel({ items, article }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="block">
            <div className="  flex justify-between">
                <h2 className="text-2xl font-bold mb-6 text-left cursor-pointer">{article} {'>'}</h2>

                <div className="buttons relative ">

                    {/* Left button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute top-8 sm:top-0 right-12 bg-white shadow-md p-2 rounded-full z-20 hover:scale-125 transition "
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Right button */}
                    <button
                        onClick={scrollRight}
                        className="absolute top-8 sm:top-0 right-0  bg-white shadow-md p-2 rounded-full z-20 hover:scale-125 transition "
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

            </div>

            <div className="relative w-full my-10">


                {/* SLIDER */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto  scrollbar-hide scroll-smooth px-4"
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative min-w-[200px] bg-white shadow-sm hover:shadow-xl transition overflow-hidden"
                        >
                            {/* Badge */}
                            <button className="absolute top-3 left-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                                Guest Favorite
                            </button>

                            {/* Favorite Button */}
                            <button className="absolute top-3 right-3  p-2">
                                <Heart size={20} className="text-gray-600 hover:bg-transparent hover:scale-105 hover:bg-gray-100 " />
                            </button>

                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-2xl  cursor-pointer"
                            />

                            <div className="p-4">
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-gray-600">${item.price} for nights
                                    <span className="text-gray-600 font-medium">★ {item.rating}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
