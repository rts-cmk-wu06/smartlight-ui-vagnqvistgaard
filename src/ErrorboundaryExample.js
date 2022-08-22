import React from "react";
import * as Sentry from "@sentry/react";

import { Example } from "../example";

function FallbackComponent() {
    return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;
// Alternatively:
// const myFallback = () => <FallbackComponent />;

class App extends React.Component {
    render() {
        return (
            <Sentry.ErrorBoundary fallback={myFallback} showDialog>
                <Example />
            </Sentry.ErrorBoundary>
        );
    }
}

export default App;