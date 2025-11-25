import { useState } from "react";
import { tableItems } from '../utiles/tabcontents'
import { Popular } from '../utiles/tabcontents'
import { Beach } from '../utiles/tabcontents'
import { Arts_culture } from '../utiles/tabcontents'


const TabContent = () => {
    const [activeTab, setActiveTab] = useState("Popular");

    return (
        <>
            <section>
                <h3 className="text-xl font-semibold mb-4">Inspiration for future getaways</h3>

                {/* Tabs */}
                <div className="border-b flex gap-6">
                    {tableItems.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-2 font-medium capitalize ${activeTab === tab
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
                <div className="mt-6 grid grid-cols-8 gap-12">
                    {(activeTab === tableItems[0]) && (
                        Popular.map((item, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold m-2">{item}</h4>
                                <h5>{item} rentals </h5>
                            </div>
                        ))

                    )}
                    {(activeTab === tableItems[1]) && (
                        Arts_culture.map((item, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold m-2">{item}</h4>
                                <h5>{item} rentals </h5>
                            </div>
                        ))

                    )}
                    {(activeTab === tableItems[2]) && (
                        Beach.map((item, index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold m-2">{item}</h4>
                                <h5>{item} rentals </h5>
                            </div>
                        ))

                    )}
                </div>
            </section></>
    )
}

export default TabContent