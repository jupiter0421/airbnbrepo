import Gallery from "../components/Gallery";
import TabContent from "../components/Tab";

export default function Home() {
    

    return (
        <main className="px-6 py-10 max-w-6xl mx-auto">

            {/* ================= GALLERY SECTION ================= */}
            <Gallery />
            
            {/* ================= TAB SECTION ================= */}
            <TabContent />
        </main>
    );
}
