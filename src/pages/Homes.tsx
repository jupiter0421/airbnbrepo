import React from "react";

const Homes = () => {
    return (
        <>
            <div className="views">
                <div className="gallerytitle">

                </div>
                <div className="gallery-item">
                    <div className="card" >
                        <button className="showCard">Guest Favorite</button>
                        <button>favorite *</button>
                        <img width="200" height="200" src="../assets/images/img01.jpg" alt="img01" />

                    </div>
                    <div className="card-detail">
                        <h5>Home in Breckenridge</h5>
                        <h6>$4445 for nights <span>* 4.95</span></h6>

                    </div>

                </div>

            </div>
            <div className="inspiration-for-future">
                <h3>Inspiration for future getaways</h3>
                <div className="">
                    <div className="tabs">

                    </div>
                    <div className="tabcontent">

                    </div>
                </div>

            </div>
        </>
    )
}

export default Homes;


