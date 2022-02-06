import TopComp from "../components/TopComp";
import HeadingroomsTemp from "../templates/HeadingroomsTemp";
import BottomComp from "../components/BottomComp";
import WhiteboxComp from "../components/WhiteboxComp";




const Broompanel = () => {
    return (

        <div className="w-screen h-screen bg-blue-950">

            <TopComp />
            <HeadingroomsTemp />
            <WhiteboxComp />
            <BottomComp />

        </div>
    );
}

export default Broompanel;