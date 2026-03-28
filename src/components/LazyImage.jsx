import { useEffect, useRef, useState } from 'react';

/**
 * LazyImage — drop-in replacement for <img>.
 * • Loads only when scrolled within 400px of viewport (IntersectionObserver)
 * • For Unsplash: shows a tiny blurred placeholder first, transitions to full-res
 * • loading="lazy" + decoding="async" for browser-native deferral
 * • No wrapper element — renders a single <img> so existing CSS is unaffected
 */
function getPlaceholder(src) {
  if (src && src.includes('unsplash.com')) {
    return src.split('?')[0] + '?w=30&q=10';
  }
  return null;
}

export default function LazyImage({ src, alt, className, style, ...rest }) {
  const placeholder = getPlaceholder(src);
  const [activeSrc, setActiveSrc] = useState(placeholder || src);
  const [sharp, setSharp] = useState(!placeholder); // true once full-res loaded
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={ref}
      src={activeSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        // Only mark sharp once the full-res version finishes loading
        if (e.currentTarget.src === src || !placeholder) setSharp(true);
      }}
      style={{
        filter: sharp ? 'none' : 'blur(10px)',
        transform: sharp ? 'none' : 'scale(1.03)',
        transition: 'filter 0.5s ease, transform 0.5s ease',
        ...style,
      }}
      {...rest}
    />
  );
}
