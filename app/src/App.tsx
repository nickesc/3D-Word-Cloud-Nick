import "./App.css";
import {useState, useCallback} from "react";
import Header from "./components/Header";
import UrlInput from "./components/UrlInput";
import VisualizationPanel from "./components/VisualizationPanel";
import type {Keyword} from "./types";

function App() {
    const [url, setUrl] = useState("");
    const [keywords, setKeywords] = useState<Keyword[]>([]);

    const onAnalyze = useCallback(async (nextUrl: string) => {
        try {
            setUrl(nextUrl);
            setKeywords([]);
            console.log(nextUrl);
        } catch (err) {
            setKeywords([]);
            console.error(err);
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <VisualizationPanel />
                <UrlInput onAnalyze={onAnalyze} />
            </main>
        </>
    );
}

export default App;
