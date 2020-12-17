import React from "react";
import { animated, useSpring, Donut } from "react-spring";

const Donut = () => {
    const AnimatedDonut = animated(Donut)
    // ...
    const props = useSpring({ value: 100, from: { value: 0 } })
return <AnimatedDonut percent={props.value} />
}

export default Donut;