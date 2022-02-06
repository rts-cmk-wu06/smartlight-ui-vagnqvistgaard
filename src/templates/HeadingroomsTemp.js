import TxtbedroomComp from '../components/TxtbedroomComp';
import LampTemp from '../templates/LampTemp';



const HeadingroomsTemp = () => {
    return (
        <div className='w-screen h-hrt grid grid-cols-4 grid-rows-3'>
            <TxtbedroomComp />
            <LampTemp />

        </div>
    );
}

export default HeadingroomsTemp;