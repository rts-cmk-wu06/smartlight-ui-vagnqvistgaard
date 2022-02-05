import TopTemp from "../components/TopComp";
//import HeadingComp from "../components/HeadingComp";
import BottomComp from "../components/BottomComp";
import WhiteboxTemp from "../templates/WhiteboxTemp";




const Broompanel = () => {
    return (

        <div className="w-screen h-screen bg-blue-950">

            <TopTemp />
            <WhiteboxTemp />
            <BottomComp />

        </div>
    );
}

export default Broompanel;