import Bedroombutton from "./../graphics/Bedroombutton.svg"



const RoomcardComp = (props) => {
    //intermediate props placeholders...
    let w = 56;
    let h = 42.5;
    let br = Bedroombutton;
    let btxt = 'Bedroom';
    let otxt = '4 lights';
    //............................

    return (
        <div className="w-38 h-38 bg-white rounded-2xl drop-shadow-lg px-6 py-6">
            <img src={br} width={w} height={h} alt="" />
            <div className="font-bold pt-3">{btxt}</div>
            <div className="text-yellow-310 font-bold">{otxt}</div>
        </div>
    );
}

export default RoomcardComp;