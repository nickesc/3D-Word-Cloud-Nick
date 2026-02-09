from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    url: str = Field(..., description="The URL of the article to analyze")


class AnalyzeResponse(BaseModel):
    keywords: list[tuple[float, str]] = Field(
        ..., description="The keywords extracted from the article"
    )

