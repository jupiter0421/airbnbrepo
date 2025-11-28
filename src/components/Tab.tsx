import { useState } from "react";
import { tableItems, Popular, Beach, Culture } from "../utiles/tabcontents";

const TABS = {
    Popular,
    Culture,
    Beach,
} as const;

const TabContent = () => {
    const [activeTab, setActiveTab] = useState<(typeof tableItems)[number]>("Popular");

    return (
        <section>
            <h3 className="text-xl font-semibold mb-4">
                Inspiration for future getaways
            </h3>

            {/* Tabs */}
            <div className="border-b flex gap-6">
                {tableItems.map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 font-medium capitalize transition-all ${activeTab === tab
                            ? "border-b-2 border-pink-500 text-pink-500"
                            : "text-gray-700 hover:text-black"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-10">
                {TABS[activeTab]?.map((item, index) => (
                    <div
                        key={index}
                        className="p-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
                    >
                        <h4 className="text-lg font-bold">{item}</h4>
                        <h5 className="text-gray-500">{item} rentals</h5>
                    </div>
                ))}
                <div
                    className="p-2 rounded-xl hover:bg-gray-100 cursor-pointer transition"
                >
                    <h4 className="text-lg font-bold">Show more</h4>
                </div>
            </div>
        </section>
    );
};

export default TabContent;
