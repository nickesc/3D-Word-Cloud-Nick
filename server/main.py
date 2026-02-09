from fastapi import FastAPI, HTTPException
from server.schemas import AnalyzeRequest
from server.services import crawl_article

app = FastAPI()


@app.get("/health")
async def health_check():
    return {"health": "ok"}


@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    if not request.url.startswith("https://" or "http://"):
        raise HTTPException(status_code=400, detail="Invalid URL")

    article = await crawl_article(request.url)

    return {"article": article}
