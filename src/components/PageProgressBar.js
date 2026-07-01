'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset/Stop loading when pathname or search parameters change
    setLoading(false);
    setProgress(0);
  }, [pathname, searchParams]);

  useEffect(() => {
    let timer;
    if (loading) {
      setProgress(10);
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timer);
            return 90;
          }
          return prev + (100 - prev) * 0.12; // Logarithmic slow down
        });
      }, 120);
    } else {
      setProgress(100);
      timer = setTimeout(() => {
        setProgress(0);
      }, 250);
    }
    return () => {
      clearInterval(timer);
      clearTimeout(timer);
    };
  }, [loading]);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Detect if it is an internal page transition
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        href !== pathname &&
        targetAttr !== '_blank' &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        setLoading(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [pathname]);

  if (progress === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        backgroundColor: '#2E3092', // Matches your theme primary color
        width: `${progress}%`,
        zIndex: 99999,
        transition: 'width 0.2s ease, opacity 0.25s ease',
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: 'none',
      }}
    />
  );
}
