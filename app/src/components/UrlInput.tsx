import type {ChangeEvent, SubmitEvent} from "react";
import {useState} from "react";
import "./UrlInput.css";

function UrlInput({onAnalyze, articles}: {onAnalyze: (url: string) => Promise<void>; articles: string[]}) {
    const [url, setUrl] = useState("");
    const [selectedArticle, setSelectedArticle] = useState("");

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setUrl(event.target.value);
    }

    function handleSelect(article: string) {
        setSelectedArticle(article);
        setUrl(article);
    }

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        await onAnalyze(url);
    }

    return (
        <form id="url-input-form" onSubmit={handleSubmit}>
            <div id="url-input-form-left">
                <input
                    type="text" //
                    placeholder="Enter article URL"
                    value={url}
                    onChange={handleInputChange}
                    disabled={!!selectedArticle}
                />
                <select
                    value={selectedArticle} //
                    onChange={(e) => handleSelect(e.target.value)}
                >
                    <option value="">Custom URL</option>
                    {articles.map((article) => (
                        <option key={article} value={article}>
                            {article}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Analyze</button>
        </form>
    );
}

export default UrlInput;
