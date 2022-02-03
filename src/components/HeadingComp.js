import TxtcommonComp from './TxtcommonComp';
import UserimgComp from './UserimgComp';


const HeadingComp = () => {
    return (
        <div className='flex flex-row justify-between'>
            <TxtcommonComp />
            <UserimgComp />
        </div>
    );
}

export default HeadingComp;