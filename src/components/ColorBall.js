import { useState, useEffect } from "react";
import ColorConverter from "cie-rgb-color-converter";

//const Color = (props) => {
function ColorBall(props) {

    let xy = ColorConverter.rgbToXy(props.r, props.g, props.b);
    const [color, setColor] = useState([]);

    useEffect(() => {
        fetch(
            "https://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/lights/55/state",
            {
                method: "PUT",
                body: JSON.stringify({
                    xy: [color.x, color.y],
                }),
            }
        );
    }, [color]);

    return (
        <>
            <div
                onClick={() => {
                    setColor(xy);
                }}
                style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
                }}
            ></div>
        </>
    );
};

export default ColorBall;