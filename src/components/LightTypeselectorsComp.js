import LightTypeselectorsGraphic from "../graphics/LightTypeselectorsGraphic.svg"

import { motion } from "framer-motion";

const LightTypeselectorsComp = () => {
    return (

        <motion.div
            className="w-98 col-start-1 col-end-8 row-start-3 row-end-4 ml-1 mb-2 opacity-25"
            animate={{ x: [500, 0] }}
            transition={{ delay: 1.5 }}>
            <img src={LightTypeselectorsGraphic} width="402" height="45" alt="" />
        </motion.div>

    );
}

export default LightTypeselectorsComp;