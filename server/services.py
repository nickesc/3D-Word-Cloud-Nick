from trafilatura import fetch_url, extract
from rake_nltk import Rake

import nltk

nltk.download("stopwords")
nltk.download("punkt_tab")


async def crawl_article(url: str) -> str | None:
    article = fetch_url(url)
    return extract(article) if article else None


async def extract_keywords(text: str) -> list[str]:
    rake = Rake()
    if not text.strip():
        return []
    rake.extract_keywords_from_text(text)
    ranked_phrases = rake.get_ranked_phrases_with_scores()
    return ranked_phrases

