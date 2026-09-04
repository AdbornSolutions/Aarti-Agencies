import { useEffect, useState } from 'react';

function CatalogImage({ loader, alt, className = '', loading = 'lazy' }) {
  const [source, setSource] = useState('');

  useEffect(() => {
    let active = true;
    setSource('');
    loader()
      .then((url) => {
        if (active) setSource(url);
      })
      .catch(() => {
        if (active) setSource('');
      });
    return () => {
      active = false;
    };
  }, [loader]);

  if (!source) {
    return <div className={`animate-pulse bg-ink/10 ${className}`} aria-hidden="true" />;
  }

  return <img src={source} alt={alt} className={className} loading={loading} />;
}

export { CatalogImage };
