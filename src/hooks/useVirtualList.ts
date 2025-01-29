import { RefObject, useCallback, useEffect, useState } from 'react';

const useVirtualList = <T>(
  items: T[],
  itemHeight: number,
  buffer: number = 5,
  containerRef: RefObject<HTMLDivElement>
) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const calculateVisibleItems = useCallback(
    (scrollTop: number, containerHeight: number) => {
      const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
      const endIndex = Math.min(
        items.length - 1,
        Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer
      );
      setVisibleItems(Array.from({ length: endIndex - startIndex + 1 }, (_, i) => i + startIndex));
    },
    [buffer, itemHeight, items.length]
  );

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        calculateVisibleItems(containerRef.current.scrollTop, containerRef.current.clientHeight);
      }
    };

    const initialHeight = window.innerHeight;
    if (containerRef.current) {
      calculateVisibleItems(containerRef.current.scrollTop, initialHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [calculateVisibleItems]);

  return { visibleItems, calculateVisibleItems };
};

export default useVirtualList;
