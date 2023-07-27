import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const objectToAnimate = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Vespa');
    // save the object in a ref for later use
    console.log(obj);
    objectToAnimate.current = obj;
  }

  function triggerAnimation() {
    objectToAnimate.current.emitEvent('mouseHover');
  }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/txymPli3a6dPPfTW/scene.splinecode"
        onLoad={onLoad}
      />
      {/* <button type="button" onClick={() => triggerAnimation()}>
        Trigger Spline Animation
      </button> */}
    </div>
  );
}