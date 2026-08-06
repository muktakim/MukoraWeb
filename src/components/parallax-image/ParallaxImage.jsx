import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./parallax-image.scss";

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxImage (GSAP version — smooth & scrolly)
 *
 * Usage:
 *   <ParallaxImage src={service.image} alt={service.title} speed={0.4} />
 *
 * Props:
 *   src       - image URL (required)
 *   alt       - alt text
 *   speed     - strength of the vertical drift (0 = none, ~0.2–0.6 recommended). Negative reverses direction.
 *   scale     - how much the image zooms in over the scroll range (1 = no zoom, 1.15 = 15% zoom)
 *   scrub     - smoothing lag behind scroll. `true` = instant/1:1, a number (e.g. 0.6–1.5) = smoothed
 *               catch-up, higher number = laggier/silkier feel
 *   height    - CSS height of the container (default "500px")
 *   className - optional extra class on the wrapper
 */
function ParallaxImage({
  src,
  alt = "",
  speed = 0.4,
  scale = 1,
  scrub = 0.75,
  height = "500px",
  className = "",
}) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    // Total vertical travel distance, expressed as a % of the image's own height
    const yPercent = speed * 100;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -yPercent / 2, scale: 1 },
        {
          yPercent: yPercent / 2,
          scale, // subtle zoom-in as you scroll adds to the "scrolly" depth feel
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: wrapper,
            start: "top bottom",
            end: "bottom top",
            scrub, // number = smoothed/lagged catch-up instead of rigid 1:1 tracking
            invalidateOnRefresh: true,
          },
        }
      );
    }, wrapper);

    return () => ctx.revert(); // cleanup animation + ScrollTrigger instance on unmount
  }, [speed, scale, scrub]);

  return (
    <div
      ref={wrapperRef}
      className={`parallax-image-wrapper ${className}`}
      style={{ height }}
    >
      <img ref={imgRef} src={src} alt={alt} className="parallax-image" />
    </div>
  );
}

export default ParallaxImage;
