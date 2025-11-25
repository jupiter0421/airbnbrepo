import { support } from '../utiles/tabcontents'
import { hoisting } from '../utiles/tabcontents'
import { airbnb } from '../utiles/tabcontents'

const Footer = () => {
    return (
        <footer>
            <div className="column  flex justify-between">
                <ul>
                    <b>support</b>
                    {support.map((supportItem) => <li>{supportItem}</li>)}
                </ul>
                <ul>
                    <b>Hosting</b>
                    {hoisting.map((hoistingItem) => <li>{hoistingItem}</li>)}
                </ul>
                <ul>
                    <b>Airbnb</b>
                    {airbnb.map((airbnbItem) => <li>{airbnbItem}</li>)}
                </ul>

            </div>
            <div className="copyright">
               <h5> © {Date()} Airbnb, Inc.· <span>TermsPrivacyYour</span> <span>Privacy</span> <span>Choices</span></h5> 
               <div className='href'>
                    <li></li>
               </div>
            </div>
        </footer>
    )
}

export default Footer