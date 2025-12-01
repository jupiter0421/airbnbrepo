import { support, hoisting, airbnb } from '../utiles/tabcontents';
import { Globe, DollarSign, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-8 mt-12 text-left">
            {/* Footer Links */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
                <ul>
                    <h4 className="font-semibold mb-2">Support</h4>
                    {support.map((item, index) => (
                        <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>

                <ul>
                    <h4 className="font-semibold mb-2">Hosting</h4>
                    {hoisting.map((item, index) => (
                        <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>

                <ul>
                    <h4 className="font-semibold mb-2">Airbnb</h4>
                    {airbnb.map((item, index) => (
                        <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer Bottom */}
            <div className="border-t pt-4 text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                <div className='flex'>
                    <p className='mr-3'>© {new Date().getFullYear()} Airbnb, Inc.</p>

                    <div className="flex gap-4 flex-wrap">
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Privacy</a>
                        <a href="#" className="hover:underline flex items-center ">
                            <span> Your Choices</span>
                            <span className='mx-2'>
                                <svg width="26" height="12" fill="none" className="">
                                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff">
                                    </rect>
                                    <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F">
                                    </path>
                                    <path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round">
                                    </path>
                                    <path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round">
                                    </path>
                                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F">
                                    </rect>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                    <button className="flex items-center gap-1 hover:text-black">
                        <Globe className="w-5 h-5" /> English
                    </button>
                    <button className="flex items-center gap-1 hover:text-black">
                        <DollarSign className="w-5 h-5" /> USD
                    </button>
                    <ul className="flex gap-3" aria-label="Social media links">
                        <li> <a href="#">     <Facebook className="w-5 h-5" /> </a> </li>
                        <li> <a href="#">     <Twitter className="w-5 h-5" /> </a> </li>
                        <li> <a href="#">     <Instagram className="w-5 h-5" /> </a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
