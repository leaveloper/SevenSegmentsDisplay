import { Rotate } from "./components/Rotate";
import { Segment } from "./components/Segment";
import { Translate } from "./components/Translate";
import './display.style.css';

function Display() {
  return (
    <div className="grid-container">
      <Segment className="segment-off segment-1" />
      <Segment className="segment-off segment-7" />
      <Segment className="segment-off segment-4" />
      <Rotate degrees={90}>
        <Translate x="-80%">
          <Segment className="segment-on segment-2" />
          <Segment className="segment-off segment-3" />
        </Translate>

        <Translate x="80%">
          <Segment className="segment-off segment-5" />
          <Segment className="segment-off segment-6" />
        </Translate>
      </Rotate>
    </div>
  );
}

export default Display;