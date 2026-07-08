import { useState, useCallback } from 'react';

interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
  items: LightboxItem[];
}

export interface LightboxItem {
  src: string;
  title: string;
  category: string;
}

export function useLightbox() {
  const [state, setState] = useState<LightboxState>({
    isOpen: false,
    currentIndex: 0,
    items: [],
  });

  const openLightbox = useCallback((items: LightboxItem[], index: number) => {
    setState({ isOpen: true, currentIndex: index, items });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.items.length,
    }));
  }, []);

  const prevImage = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
    }));
  }, []);

  return {
    isOpen: state.isOpen,
    currentIndex: state.currentIndex,
    currentItem: state.items[state.currentIndex],
    items: state.items,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  };
}
