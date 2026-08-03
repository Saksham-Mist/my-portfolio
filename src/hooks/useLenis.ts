'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

export function useLenis() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      duration: 1.2,
    });

    // Optional: Listen to scroll events
    lenis.on('scroll', (e) => {
      // Scroll-based effects can go here
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}