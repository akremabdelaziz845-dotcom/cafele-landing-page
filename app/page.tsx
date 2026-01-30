import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Mechanism from "@/components/Mechanism";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-brand-black min-h-screen selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <Features />
            <Mechanism />
            <OrderForm />
            <Footer />
        </main>
    );
}
