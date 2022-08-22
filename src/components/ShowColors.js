import ColorBall from './ColorBall';

import '../styles/MeetTheLight.css';

//bør nok ordnes dynamisk, m. array.map og noget...

function ShowColors() {



    return (
        <>
            <div className="ColorBallWrapper">
                <ColorBall r="138" g="12" b="18" />
                <ColorBall r="255" g="191" b="0" />
                <ColorBall r="36" g="168" b="51" />
                <ColorBall r="55" g="125" b="242" />
                <ColorBall r="255" g="165" b="0" />
                <ColorBall r="48" g="213" b="200" />
            </div>
        </>
    )


}

export default ShowColors;