from fastapi import FastAPI
from app.core.agent import ask_claritybot

app = FastAPI(title="SoloStormAI – ClarityBot")

@app.get("/")
def root():
    return {"msg": "ClarityBot is alive 🚀"}

@app.post("/ask")
async def ask(question: str):
    answer = await ask_claritybot(question)
    return {"answer": answer}
