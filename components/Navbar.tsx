import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-brand-grey/10 bg-brand-black/80 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-white tracking-wider">CAFELE</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-brand-accent hover:bg-blue-700/80 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 flex items-center gap-2">
                        <ShoppingBag size={18} />
                        Buy Now
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link href="#features" className="block py-2 px-3 text-brand-grey hover:text-brand-accent transition-colors">Features</Link>
                        </li>
                        <li>
                            <Link href="#mechanism" className="block py-2 px-3 text-brand-grey hover:text-brand-accent transition-colors">Mechanism</Link>
                        </li>
                        <li>
                            <Link href="#gallery" className="block py-2 px-3 text-brand-grey hover:text-brand-accent transition-colors">Gallery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
