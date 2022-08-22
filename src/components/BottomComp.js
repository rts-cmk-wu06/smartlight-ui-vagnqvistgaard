import Bulbgraphic from "./../graphics/Bulbgraphic.svg"
import Homegraphic from "./../graphics/Homegraphic.svg"
import Coggraphic from "./../graphics/Coggraphic.svg"


const BottomcommonComp = () => {
    return (

        <div className="w-screen h-16 bg-white flex flex-row flex-nowrap justify-around align-middle">
            <img className="" src={Bulbgraphic} width='19' height='26' alt='' />
            <img className="" src={Homegraphic} width='23' height='26' alt='' />
            <img className="" src={Coggraphic} width='26' height='26' alt='' />

        </div>


    );
}

export default BottomcommonComp;