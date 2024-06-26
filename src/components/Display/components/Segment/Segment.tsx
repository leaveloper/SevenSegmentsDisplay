import { CSSProperties } from 'react';
import './segment.style.css';

interface Props {
  className?: string;
  style?: CSSProperties;
}

function Segment({ className, style }: Props) {
  return (
    <div className={`segment ${className}`} style={{ ...style }}></div>
  )
}

export default Segment;