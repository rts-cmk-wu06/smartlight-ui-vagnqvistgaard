import TxtcommonComp from './TxtcommonComp';
import UserimgComp from './UserimgComp';


const HeadingComp = () => {
    return (
        <div className='flex flex-row justify-around'>
            <TxtcommonComp />
            <UserimgComp />
        </div>
    );
}

export default HeadingComp;