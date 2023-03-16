import React from "react";
import {Link} from "react-router-dom";

function Principles() {
    return (<div className="max-w-screen-xl mx-auto my-10 px-6">
        <h2 className="text-3xl font-bold mb-6">Deep Data Detectives (D3) Position on Data Principles and
            Responsible Principles</h2>
        <p className="text-lg mb-6">Controversies in the rise of AI have a transformative impact in people’s lives
            and virtually every industry with the potential to shape our future. As we consider data principles and
            best practices in the development of AI, Deep Data Detectives (D3) prioritizes the needs and intentions
            of untapped individuals and communities facing climate hazards, and social and economic
            vulnerabilities.</p>
        <h3 className="text-2xl font-bold mb-4">Our Data Principles include:</h3>
        <ol className="list-decimal list-inside mb-6">
            <li className="text-lg mb-2">Definition of social and economic issues: We collaborate with grassroots
                organizations to ensure that everyone has a driving seat in the decision-making process by
                assessing, designing and implementing AI solutions.
            </li>
            <li className="text-lg mb-2">Data is the foundation: AI models rely on data to make accurate predictions
                and decisions. We are committed to creating reliable and diverse datasets to train our models.
            </li>
            <li className="text-lg mb-2">Embedding equity in the right algorithms: We assess and test algorithms to
                understand their strengths and weaknesses and monitor performance while remaining open, yet
                cautious, to exploring Generative AI to expand capabilities and functionality. We believe in
                providing a valuable feedback loop to refine and improve models overtime.
            </li>
            <li className="text-lg">Transparency and Ethical considerations: AI is increasingly integrated into our
                lives, it is important to consider the ethical implications of AI systems. Transparency and fairness
                are critical considerations at our core when designing and implementing AI systems.
            </li>
        </ol>
        <h3 className="text-2xl font-bold mb-4">We follow Global Responsible Best Practices for implementing
            AI:</h3>
        <ul className="list-disc list-inside mb-6">
            <li className="text-lg mb-2">Use of human-centered design approach</li>
            <li className="text-lg mb-2">Use of Theory of Change to assess metrics and monitoring</li>
            <li className="text-lg mb-2">Use of Community Activation at grassroots levels to verify granular and
                baseline data
            </li>
            <li className="text-lg mb-2">Test, Assess, Adapt, and Pivot prioritizing our communities needs and
                intentions
            </li>
            <li className="text-lg mb-2">Be patient to the limitations of our dataset and model</li>
            <li className="text-lg">Use of continuing evaluation tools embedded in our gaming community platform
            </li>
        </ul>
        <Link className="my-colour underline" to="/">RETURN TO HOME PAGE</Link>
    </div>);
}

export default Principles;
