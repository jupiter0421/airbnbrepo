import React from "react";

const Homes = () => {
    return (
        <main>
            <div className="views">
                <div className="gallery">
                    <div className="gallerytitle">
                        <h3>available for similar dates</h3>
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

                <div className="gallery">
                    <div className="gallerytitle">
                        <h3>available for similar dates</h3>
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

            </div>

            <div className="inspiration-for-future">
                <h3>Inspiration for future getaways</h3>
                <div className="">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className="container tab-pane active"><br />
                            <h3>HOME</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br />
                            <h3>Menu 1</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br />
                            <h3>Menu 2</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Homes;


 