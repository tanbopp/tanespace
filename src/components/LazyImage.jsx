import { useEffect, useRef, useState } from 'react';

/**
 * LazyImage — responsive lazy loader with blurred placeholder.
 * • Builds responsive srcset for Unsplash-hosted images (WebP + fallback)
 * • Shows tiny blurred placeholder (w=30) until in-view
 * • Uses <picture> so browser picks optimal format/resolution
 * • Defers creating srcset until intersection to avoid extra network
 */

function isUnsplash(src) {
  return src && src.includes('images.unsplash.com');
}

function baseUrl(src) {
  return src ? src.split('?')[0] : src;
}

export default function LazyImage({
  src,
  alt = '',
  className,
  style,
  widths = [400, 800, 1200, 1600, 1920],
  sizes = '100vw',
  quality = 80,
  placeholderWidth = 30,
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [sharp, setSharp] = useState(!isUnsplash(src));

  const base = baseUrl(src);
  const placeholder = isUnsplash(src) ? `${base}?w=${placeholderWidth}&q=10&auto=format` : src;

  // build srcset strings only for Unsplash (safe to add URL params)
  const webpSrcSet = isUnsplash(src)
    ? widths.map((w) => `${base}?w=${w}&q=${quality}&fm=webp ${w}w`).join(', ')
    : null;
  const fallbackSrcSet = isUnsplash(src)
    ? widths.map((w) => `${base}?w=${w}&q=${quality} ${w}w`).join(', ')
    : null;

  const smallestFull = isUnsplash(src) ? `${base}?w=${widths[0]}&q=${quality}` : src;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <picture>
      {inView && webpSrcSet && (
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      )}
      {inView && fallbackSrcSet && (
        <source srcSet={fallbackSrcSet} sizes={sizes} />
      )}

      <img
        ref={ref}
        src={inView ? smallestFull : placeholder}
        srcSet={inView && fallbackSrcSet ? fallbackSrcSet : undefined}
        alt={alt}
        className={className}
        loading={rest.fetchpriority === 'high' ? undefined : 'lazy'}
        decoding="async"
        onLoad={(e) => {
          const cur = e.currentTarget;
          if (cur && cur.src && cur.src.indexOf(`w=${placeholderWidth}`) === -1) setSharp(true);
        }}
        style={{
          filter: sharp ? 'none' : 'blur(10px)',
          transform: sharp ? 'none' : 'scale(1.03)',
          transition: 'filter 0.45s ease, transform 0.45s ease',
          ...style,
        }}
        {...rest}
      />
    </picture>
  );
}
