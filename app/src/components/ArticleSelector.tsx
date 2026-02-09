function ArticleSelector({articles}: {articles: string[]}) {
    return (
        <select>
            <option value="" selected>
                Select an article
            </option>
            {articles.map((article) => (
                <option key={article} value={article}>
                    {article}
                </option>
            ))}
        </select>
    );
}

export default ArticleSelector;
