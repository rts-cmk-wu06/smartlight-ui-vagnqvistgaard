import TopComp from "../components/TopComp";
import HeadingroomsTemp from "../templates/HeadingroomsTemp";
import BottomComp from "../components/BottomComp";
import WhiteboxBRTemp from "../templates/WhiteboxBRTemp";




const Broompanel = () => {
    return (

        <div className="w-screen h-screen bg-blue-950">

            <TopComp />
            <HeadingroomsTemp />
            <WhiteboxBRTemp />
            <BottomComp />

        </div>
    );
}

export default Broompanel;