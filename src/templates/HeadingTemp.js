import TxtcommonComp from '../components/TxtcommonComp';
import UserimgComp from '../components/UserimgComp';


const HeadingTemp = () => {
    return (
        <div className='flex flex-row justify-between'>
            <TxtcommonComp />
            <UserimgComp />
        </div>
    );
}

export default HeadingTemp;