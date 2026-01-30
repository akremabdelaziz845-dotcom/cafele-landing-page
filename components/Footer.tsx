import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand-black border-t border-brand-grey/10 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white tracking-wider mb-4 block">CAFELE</Link>
                        <p className="text-brand-grey max-w-sm">Making your digital life simpler with innovative charging solutions.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-brand-grey">
                            <li><Link href="#" className="hover:text-brand-accent">Features</Link></li>
                            <li><Link href="#" className="hover:text-brand-accent">Specifications</Link></li>
                            <li><Link href="#" className="hover:text-brand-accent">Reviews</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-brand-grey">
                            <li><Link href="#" className="hover:text-brand-accent">About Us</Link></li>
                            <li><Link href="#" className="hover:text-brand-accent">Contact</Link></li>
                            <li><Link href="#" className="hover:text-brand-accent">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-grey/10">
                    <p className="text-brand-grey text-sm">© 2024 CAFELE. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="text-brand-grey hover:text-white transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="text-brand-grey hover:text-white transition-colors"><Instagram size={20} /></Link>
                        <Link href="#" className="text-brand-grey hover:text-white transition-colors"><Facebook size={20} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
