from urllib.parse import urlparse
from fastapi import FastAPI, HTTPException
from server.schemas import AnalyzeRequest, AnalyzeResponse
from server.services import crawl_article, extract_keywords

app = FastAPI()


@app.get("/health")
async def health_check():
    return {"health": "ok"}


@app.post("/analyze", response_model=AnalyzeResponse)
async def analyze(request: AnalyzeRequest):
    if urlparse(request.url).scheme not in ("https", "http"):
        raise HTTPException(status_code=400, detail="Invalid URL")

    article = await crawl_article(request.url)
    if article is None:
        raise HTTPException(
            status_code=422,
            detail="Could not extract article content from URL.",
        )

    keywords = await extract_keywords(article)
    return AnalyzeResponse(keywords=keywords)
