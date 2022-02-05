import Bedroombutton from "./../graphics/Bedroombutton.svg"



const RoomcardComp = (props) => {
    //intermediate placeholders...
    let w = 56;
    let h = 42.5;
    //............................

    return (
        <div className="w-38 h-38 bg-white rounded-2xl drop-shadow-lg px-6 py-6">
            <img src={Bedroombutton} width={w} height={h} alt="" />
            <div>Black text</div>
            <div>Orange text</div>
        </div>
    );
}

export default RoomcardComp;