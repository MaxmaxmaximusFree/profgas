
import React from 'react';
import styles from './Grid.module.scss';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  gap?: string;
}

const Grid: React.FC<GridProps> = ({ children, className, columns, gap }) => {
  const style = {
    gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : undefined,
    gap: gap || undefined,
  };

  return (
    <div className={`${styles.grid} ${className || ''}`} style={style}>
      {children}
    </div>
  );
};

export default Grid;
