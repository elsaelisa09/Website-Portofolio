import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles engine initialized!");
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: { color: "#000000" },
          particles: {
            number: {
              value: 50,
              density: { enable: true, area: 800 },
            },
            color: { value: "#6F2DA8" },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "bounce",
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse", // Particles will move away from the cursor
              },
              onClick: {
                enable: true,
                mode: "push", // Add particles when clicked
              },
            },
            modes: {
              repulse: {
                distance:40, // Jarak partikel yang terpengaruh oleh kursor
                duration: 0.4,  // Durasi efek repulse
              },
              push: {
                quantity: 7, // Jumlah partikel yang ditambahkan ketika klik
              },
            },
          },
        }}
        canvasClassName="!w-full !h-full"
      />
    </div>
  );
};

export default ParticlesBackground;
