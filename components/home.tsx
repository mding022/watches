"use client";

import { Button } from "@/components/ui/button";
import EmblaCarousel from "@/components/EmblaCarousel";
import {
  Clock,
  ShieldCheck,
  Sparkles,
  Wallet,
  Truck,
  PackageCheck,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

export default function ModernWatchLanding() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [firstTitle, setFirstTitle] = useState(false);
  const [secondTitle, setSecondTitle] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setFirstTitle(true);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setSecondTitle(true);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen w-full font-sans">
      <header className="py-4 px-6 bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-center space-x-6">
          <h1 className="text-lg text-center font-serif flex-grow">
            <span className="text-lg">the</span>
            <span className="text-2xl">Timepiece</span>
            <span className="text-base text-stone-400">.ca</span>
          </h1>
        </div>
      </header>
      <main className="relative flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed inset-0 w-full h-full object-cover filter grayscale brightness-50 -z-10 fadeInAnimation"
            aria-hidden="true"
          >
            <source
              src="https://cdn.pixabay.com/video/2024/03/18/204582-925146042_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="inline-block text-gray-300"
              >
                Affordable,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="inline-block"
              >
                &nbsp;Luxurious.
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-xl font-semibold mb-8 text-stone-200"
            >
              Discover our collection of premium quality modded watches.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-200 text-lg font-bold"
              >
                <Link href="https://shop.thetimepiece.ca">Browse our Catalogue</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !showArrow ? 0 : 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute bottom-4">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>

        <section className="py-20 px-4 bg-transparent">
          <div className="pb-9 flex flex-col items-center">
            <motion.header
              ref={ref}
              className="text-6xl font-black tracking-bold sm:text-4xl md:text-5xl mb-5 text-center"
              variants={headerVariants}
              initial="hidden"
              animate={firstTitle ? "visible" : "hidden"}
              transition={{ duration: 1.1 }}
            >
              The Ultimate Collection.
            </motion.header>
            <EmblaCarousel slides={[0, 1, 2, 3, 4]} />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Clock,
                title: "Premium Movement",
                description:
                  "All our watches come with automatic movements for a smooth and reliable sweep.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Materials",
                description:
                  "We only use stainless steel and sapphire glass for our watches.",
              },
              {
                icon: Sparkles,
                title: "Elegant Designs",
                description:
                  "Styles for every occasion; formal, streetwear - we have it all.",
              },
              {
                icon: Wallet,
                title: "Affordable Luxury",
                description: "Premium quality without the premium price",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border-gray-400 border rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={secondTitle ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-zinc-50" />
                <h4 className="text-xl font-semibold mb-2 text-zinc-50">
                  {feature.title}
                </h4>
                <p className="text-zinc-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-white">
              Our Shipping Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Canada-wide Shipping",
                  description:
                    "We offer free, fast shipping across Canada on all watches.",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description:
                    "We partner with reliable courier services so your watch reaches you quickly.",
                },
                {
                  icon: PackageCheck,
                  title: "Placeholder",
                  description:
                    "placeholderplace holderplacehol derplaceholderplaceh olderplaceholder ",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md border-gray-400 border rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <step.icon className="w-12 h-12 mb-4 text-zinc-50" />
                  <h4 className="text-xl font-semibold mb-2 text-zinc-50">
                    {step.title}
                  </h4>
                  <p className="text-zinc-100">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
