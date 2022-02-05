import RoomcardComp from "../components/RoomcardComp";



const GridboxTemp = () => {
    //diff rooms delivered through setting props here... Later
    return (
        <div className="w-gr-bx grid grid-cols-2 grid-rows-3 gap-6 mx-6">
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />

        </div>
    );
}

export default GridboxTemp;