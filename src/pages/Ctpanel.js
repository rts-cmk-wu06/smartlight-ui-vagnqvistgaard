//Doubles as a component wrapper


//import CirclescommonGraphic from "../graphics/CirclescommonGraphic.svg";
import TopComp from "../components/TopComp";
import HeadingTemp from "../templates/HeadingTemp";
import BottomComp from "../components/BottomComp";
import WhiteboxTemp from "../templates/WhiteboxTemp";


//customized color 
const Ctpanel = () => {
    return (

        <div className="w-screen h-screen bg-blue-950">

            <TopComp />
            <HeadingTemp />
            <WhiteboxTemp />
            <BottomComp />


        </div>

    );
}

export default Ctpanel;