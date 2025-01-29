import './VirtualList.css';

import React, { useRef } from 'react';

import useVirtualList from '../../../hooks/useVirtualList.ts';

type VirtualListProps<T> = {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  buffer?: number;
};

const VirtualList = <T,>({ items, itemHeight, renderItem, buffer = 5 }: VirtualListProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { visibleItems, calculateVisibleItems } = useVirtualList(
    items,
    itemHeight,
    buffer,
    containerRef
  );

  const totalHeight = items.length * itemHeight;

  const handleScroll = () => {
    if (containerRef.current) {
      calculateVisibleItems(containerRef.current.scrollTop, containerRef.current.clientHeight);
    }
  };

  return (
    <div ref={containerRef} className="virtual-list" onScroll={handleScroll}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: index * itemHeight,
              width: '100%',
            }}
          >
            {renderItem(items[index], index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
