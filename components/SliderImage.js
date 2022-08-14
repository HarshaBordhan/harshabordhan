import { animated, config, useSpring } from 'react-spring';
import Image from 'next/image';

const SliderImage = ({ src, alt, priority, showImage }) => {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: showImage ? 1 : 0,
    },
    config: config.molasses,
  });

  return (
    <animated.div style={spring}>
      <Image
        src={src}
        alt={alt}
        // width={265}
        // height={376}
        layout="fill"
        // objectFit="cover"
        priority={priority}
      />
    </animated.div>
  );
};

export default SliderImage;
