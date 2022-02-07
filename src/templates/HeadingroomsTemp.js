

import TxtbedroomComp from '../components/TxtbedroomComp';
import LampTemp from '../templates/LampTemp';
import TxtheadinglightsComp from '../components/TxtheadinglightsComp';
import LightTypeselectorsComp from '../components/LightTypeselectorsComp';



const HeadingroomsTemp = () => {
    return (
        <div className='w-screen h-hrt grid grid-cols-4 grid-rows-3'>
            <TxtbedroomComp />
            <LampTemp />
            <TxtheadinglightsComp />
            <LightTypeselectorsComp />

        </div>
    );
}

export default HeadingroomsTemp;