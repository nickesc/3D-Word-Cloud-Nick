from trafilatura import fetch_url, extract


async def crawl_article(url: str) -> str:
    return extract(fetch_url(url))
