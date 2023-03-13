import * as React from "react";
import img from "../../img.png"

const Progress = () => {
    return (<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-8">
        <span className="text-lg">OUR PROGRESS</span>
        <p className="mb-8 font-sizes">Maximizing Impact: Connecting Good Intentions with AI and Data-Driven
            Insights</p>
        <span>Breaking New Ground Into Research With Three Pilots</span>
        <img className="mx-auto" src={img}/>
    </div>)
}

export default Progress;