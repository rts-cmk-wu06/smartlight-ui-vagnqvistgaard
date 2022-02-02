//Doubles as a component wrapper

//import CirclescommonGraphic from "../graphics/CirclescommonGraphic.svg";
import TopcommonComp from "../components/TopcommonComp";
import HeadingComp from "../components/HeadingComp";
import BottomcommonComp from "../components/BottomcommonComp";


const Ctpanel = () => {
    return (

        <div className="w-screen h-screen bg-blue-800">

            <TopcommonComp />
            <HeadingComp />
            <BottomcommonComp />

        </div>

    );
}

export default Ctpanel;