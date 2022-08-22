
import { useState, useEffect } from "react";


function IntensitySlide() {

    const [bright, setBright] = useState(100);

    useEffect(() => {
        fetch(
            "https://192.168.8.100/api/T9NSd0MzWqfGCU8NOc7Y4pz0qJvRlVT6LLvQ1ysd/lights/55/state",
            {
                method: "PUT",
                body: JSON.stringify({
                    bri: bright,
                }),
            }
        );
    }, [bright]);


    return (
        <>
            <input
                type="range"
                min="0"
                max="255"
                step="5"
                defaultValue="128"
                onChange={(event) => {
                    setBright(parseInt(event.target.value));
                }}
                style={{
                    marginTop: "1rem",
                    width: "20rem",
                    height: "0.1rem",
                    borderRadius: "50%",
                    border: "rgb(155, 239, 0)",
                }}
            ></input>
        </>
    );
};

export default IntensitySlide;
