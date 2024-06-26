import { useEffect } from "react";
import { ToBoolArray } from "../../utils/ToBoolArray.util";
import { Rotate } from "./components/Rotate";
import { Segment } from "./components/Segment";
import { Translate } from "./components/Translate";
import './display.style.css';

interface Props {
  number?: number
}

function Display({ number = 0 }: Props) { 
  const getSegments = () => {
    const segmentsClasses: string[] = [
      "off",
      "off",
      "off",
      "off",
      "off",
      "off",
      "off",
    ];

    const boolArray = ToBoolArray(number, 4);
    
    const a: boolean = boolArray[0];
    const b: boolean = boolArray[1];
    const c: boolean = boolArray[2];
    const d: boolean = boolArray[3];

    if ((!a && c) || 
      (a && !b && !c) ||
      (!a && b && d) ||
      (!b && !c && !d)
      )
    {
      segmentsClasses[0] = "on";
    }

    if ((!a && !b) ||
        (!b && !c) ||
        (!a && !c && !d) ||
        (!a && c && d)
        )
    {
      segmentsClasses[1] = "on";
    }

    if ((!a && !c) ||
        (!a && d) ||
        (!b && !c) ||
        (!a && b)
        )
    {
      segmentsClasses[2] = "on";
    }

    if ((!a && !b && c) ||
        (a && !b && !c) ||
        (!b && !c && !d) ||
        (!a && c && !d) ||
        (!a && b && !c && d)
        )
    {
      segmentsClasses[3] = "on";
    }

    if ((!b && !c && !d) ||
        (!a && c && !d)
        )
    {
      segmentsClasses[4] = "on";
    }

    if ((!a && b && !c) ||
        (a && !b && !c) ||
        (!a && !c && !d) ||
        (!a && b && !d)
        )
    {
      segmentsClasses[5] = "on";
    }

    if ((!a && !b && c) ||
        (!a && b && !c) ||
        (a && !b && !c) ||
        (!a && c && !d)
        )
    {
      segmentsClasses[6] = "on";
    }

    return segmentsClasses;
  }

  let segmentsClasses: string[] = getSegments();

  return (
    <div className="grid-container">
      <Segment className={`segment-${segmentsClasses[0]} segment-1`} />
      <Segment className={`segment-${segmentsClasses[6]} segment-7`} />
      <Segment className={`segment-${segmentsClasses[3]} segment-4`} />
      <Rotate degrees={90}>
        <Translate x="-80%">
          <Segment className={`segment-${segmentsClasses[1]} segment-2`} />
          <Segment className={`segment-${segmentsClasses[2]} segment-3`} />
        </Translate>

        <Translate x="80%">
          <Segment className={`segment-${segmentsClasses[4]} segment-5`} />
          <Segment className={`segment-${segmentsClasses[5]} segment-6`} />
        </Translate>
      </Rotate>
    </div>
  );
}

export default Display;