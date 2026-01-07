"use client"

import { useEffect, useState } from "react";

// Dynamically import lottie-react on the client to avoid referencing
// browser globals during server-side prerender which causes
// "document is not defined" on Netlify builds.
const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('lottie-react')
      .then((mod) => {
        if (mounted) setLottie(() => mod.default || mod);
      })
      .catch(() => {
        // If loading fails, swallow the error so build doesn't fail.
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Lottie) return null;

  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: width || '95%' }}
    />
  );
};

export default AnimationLottie;