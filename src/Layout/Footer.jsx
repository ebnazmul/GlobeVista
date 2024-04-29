import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import Logo from "../Extra/Logo/Logo";


const Footer = () => {
    return (
        <div className="bg-gray-300 text-gray-900">
            <div className="max-w-7xl mx-auto p-5 md:p-10 lg:pt-20 md:flex justify-between pb-4">
            <div className="text-xl font-bold"><Logo/></div>
                <div>
                    <h2 className="text-xl mb-4">Contact Us</h2>
                    <ul className="*:flex *:gap-2 *:items-center space-y-2">
                        <li><FaPhone/> +1 432 84733</li>
                        <li><MdEmail/> support@globevista.com</li>
                        <li><FaLocationArrow/> 1022 N Telegraph Rd, Dearborn, Michigan</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl mb-4 mt-4 md:mt-0">Social</h2>
                    <ul className="*:flex *:gap-2 *:items-center space-y-2">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="text-center py-2 border-t">
                <p>All rights reserved &copy; GlobeVista.com 2024</p>
            </div>
        </div>
    );
};

export default Footer;