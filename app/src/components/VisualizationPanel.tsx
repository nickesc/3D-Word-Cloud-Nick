import type {Keyword} from "../types";

function VisualizationPanel({keywords, url}: {keywords: Keyword[]; url: string}) {
    return (
        <section id="visualization-panel">
            <div id="visualization">
                <h2>URL: {url}</h2>
                <ul>
                    {keywords.map((k) => (
                        <li key={`${k.keyword}-${k.score}`}>
                            {k.keyword} ({k.score})
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default VisualizationPanel;
