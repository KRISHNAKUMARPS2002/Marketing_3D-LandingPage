"use client";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import LanguageDropdown from "@/app/components/LanguageDropdown"; // Make sure path is correct

// Animation component for the background
const AnimatedSphere = () => {
  return (
    <Sphere args={[1.5, 32, 32]} position={[3, 0, 0]}>
      <meshStandardMaterial color="#ff5e62" wireframe />
    </Sphere>
  );
};

// For the gradient circle effect like in the Jeton site
const GradientOrb = () => {
  return (
    <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 blur-xl opacity-70 animate-pulse" />
  );
};

const WelcomePage = () => {
  return (
    <section className="w-full overflow-hidden min-h-screen bg-gradient-to-r from-pink-500 to-orange-400 relative">
      {/* Background animation */}
      <GradientOrb />
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full p-6">
          <nav className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold text-3xl text-white"
              >
                Marketing.
              </motion.p>
            </div>
            <div className="flex gap-6 items-center">
              {/* Using your LanguageDropdown component */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <LanguageDropdown />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative h-[40px] w-[100px] overflow-hidden border border-white rounded-lg text-white group"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Log in
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Log in
                </span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative h-[40px] w-[100px] overflow-hidden bg-white text-black rounded-lg group"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                  Sign up
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Sign up
                </span>
              </motion.button>
            </div>
          </nav>
        </header>

        {/* Main content with flex-grow to push footer down */}
        <main className="flex-grow flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="max-w-4xl mx-auto text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              One app <br /> for all needs
            </h1>
            <p className="text-xl text-white mb-10">
              Single account for all your payments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md text-white rounded-xl px-6 py-3 border border-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>
                Download on the App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-md text-white rounded-xl px-6 py-3 border border-white/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                </svg>
                Get it on Google Play
              </motion.button>
            </div>
          </motion.div>
        </main>

        {/* Footer with navigation tabs */}
        <footer className="w-full flex justify-center pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 flex gap-6"
          >
            <button className="flex items-center gap-2 text-white px-4 py-2 rounded-full bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
              </svg>
              Personal
            </button>
            <button className="text-white px-4 py-2">Business</button>
            <button className="text-white px-4 py-2">Company</button>
          </motion.div>
        </footer>
      </div>
    </section>
  );
};

export default WelcomePage;
