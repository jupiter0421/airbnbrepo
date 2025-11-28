import Gallery from "../components/Gallery";
import TabContent from "../components/Tab";
import Carousel from "../components/Carousel";

import { cardsBook } from "../utiles/cards";


export default function Home() {

    const articles: string[] = [
        "Available for similar dates",
        "Stay in Breckenridge",
        "Popular homes in Vail",
        "Guests also checked out Keystone",
        "Homes in Frisco",
    ];

    return (
        <main className="mt-40 p-6 ">

            {/* ================= Carousel Section =================== */}
            {
                cardsBook.map((cards, index) =>
                    <Carousel key={"cards" + index} items={cards} article={articles[index]} />
                )
            }

            {/* ================= Gallery Section ================= */}
            {/* <Gallery /> */}

            {/* ================= TAB SECTION ================= */}
            <TabContent />
        </main>
    );
}
