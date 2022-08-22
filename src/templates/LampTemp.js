//import LightAmpleGraphic from "../graphics/LightAmpleGraphic.svg"
//import LightShadeGraphic from "../graphics/LightShadeGraphic.svg"
import Lampgraphic from "../graphics/Lampgraphic.svg"

import { motion } from "framer-motion";


const LampTemp = () => {
    return (
        <>
            <motion.div
                className="col-start-3 col-end-5"
                animate={{ y: [-33, -4] }}
                transition={{ delay: 1.5 }}
            >
                <img className="transform -translate-y-10" src={Lampgraphic} width="139" height="157" alt="" />
            </motion.div>

        </>
    );
}

export default LampTemp;