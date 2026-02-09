from bs4 import BeautifulSoup
import requests


async def crawl_article(url: str) -> str:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    return soup.get_text()
