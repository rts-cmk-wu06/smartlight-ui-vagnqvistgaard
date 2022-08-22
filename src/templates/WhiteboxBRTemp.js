import CloseappComp from "../components/CloseappComp";
import IntensityTemp from "../templates/IntensityTemp";
import ColorsTemp from "../templates/ColorsTemp"



const WhiteboxBRTemp = () => {
    return (

        <div className="w-screen h-wbc bg-slate-75 rounded-t-3xl ">
            <div className="flex flex-col w-close mx-6">
                <CloseappComp />
                <IntensityTemp />
                <ColorsTemp />

            </div>
        </div>

    );
}

export default WhiteboxBRTemp;