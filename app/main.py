# claritybot/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.openai_utils import ask_openai

app = FastAPI(title="ClarityBot API")

# CORS so React localhost:5173 can call
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class AskRequest(BaseModel):
    question: str

@app.get("/")
def root():
    return {"msg": "ClarityBot is alive 🚀"}

@app.post("/ask")
async def ask_endpoint(payload: AskRequest):
    return ask_openai(payload.question)   # 🟢 return dict directly
