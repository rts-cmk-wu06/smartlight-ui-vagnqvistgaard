import React from "react";
//import * as Sentry from "@sentry/react";

import RoomcardComp from "../components/RoomcardComp";


const FallBackComponent = () => {
    return <div>Ooops, my bad....</div>
}

const fallBack = <FallBackComponent />;


const GridboxTemp = () => {
    //diff rooms delivered through setting props here... Later
    return (
        <div className="w-gr-bx grid grid-cols-2 grid-rows-3 gap-6 mx-6">
            {/*<Sentry.ErrorBoundary fallback={fallBack} showDialog>*/}
            <RoomcardComp />
            {/*</Sentry.ErrorBoundary>*/}
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
            <RoomcardComp />
        </div>
    );
}

export default GridboxTemp;