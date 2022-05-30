import {useRef, useState} from "react";
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import menuAnimation from '../../assets/animations/menu.json';

export default function Menu({ pressAction }) {
  const animation = useRef(null);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    pressAction();
    animation.current?.setSpeed(2.5);
    animation.current?.playSegments(
      open ? [60, 0] : [0, 60],
      true
    );
    setOpen(!open);
  };

  return (
    <div
      onClick={handleClick}
      className={"ml-auto w-fit menu-bg p-1"}
    >
      <Lottie
        loop={false}
        autoplay={false}
        lottieRef={animation}
        animationData={menuAnimation}
        style={{ height: 35, width: 35}}
      />
    </div>
  );
}

Menu.propTypes = {
  pressAction: PropTypes.func.isRequired
};