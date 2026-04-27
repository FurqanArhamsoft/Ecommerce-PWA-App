import { ArrowRight, Sparkles } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"
import Image from "next/image"
import Link from "next/link"
import heroBanner from "../assets/images/banner_store.jpg";


export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient" >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-amber-900/70 z-10"></div>
            <Image
                src={heroBanner }
                alt="Hero Background"
                fill
                className="object-cover"
            />
            <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse"></div>

            <div className="relative z-20 text-center max-w-6xl mx-auto px-4 text-white">
                <AnimatedSection animation="fade-up">
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
                        DEFINE YOUR
                        <span className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400">
                            ELEGANCE
                        </span>
                    </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                    <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-amber-100 max-w-4xl mx-auto font-light leading-relaxed">
                        Discover premium clothing that speaks to your unique personality.
                        Crafted with precision, designed for perfection.
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={600}>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/products" className="btn-primary text-lg">
                            <Sparkles className="mr-3 w-5 h-5" />
                            SHOP COLLECTION
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                        <Link href="/about" className="btn-secondary text-lg">
                            OUR STORY
                        </Link>
                    </div>
                </AnimatedSection>
            </div>

            {/* Scroll indicator */}
            <AnimatedSection animation="fade-up" delay={600} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-6 h-12 border-2 border-amber-400 rounded-full flex justify-center">
                    <div className="w-1 h-4 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
                </div>
            </AnimatedSection>
        </section >
    )
}