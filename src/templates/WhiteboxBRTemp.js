import CloseappComp from "../components/CloseappComp";
import IntensityTemp from "../templates/IntensityTemp";



const WhiteboxBRTemp = () => {
    return (

        <div className="w-screen h-wbc bg-slate-75 rounded-t-3xl ">
            <div className="flex flex-row flex-wrap w-close mx-6">
                <CloseappComp />
                <IntensityTemp />


            </div>
        </div>

    );
}

export default WhiteboxBRTemp;