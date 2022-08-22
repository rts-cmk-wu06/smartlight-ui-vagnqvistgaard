import { motion } from "framer-motion";


const TxtheadinglightsComp = () => {
    return (
        <motion.div
            className="text-yellow-320 text-xl font-bold pl-5 py-5 col-start-1 col-end-3 row-start-2 row-end-2"
            animate={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ delay: 1.5 }}
        >

            1 light
        </motion.div>
    );
}

export default TxtheadinglightsComp;