import os, asyncio
from openai import AsyncOpenAI
from dotenv import load_dotenv
load_dotenv()

client = AsyncOpenAI()

async def ask_claritybot(question: str) -> str:
    response = await client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
          {"role": "system",
           "content": open("app/prompts/base_prompt.txt").read()},
          {"role": "user", "content": question}
        ],
        temperature=0.4,
    )
    return response.choices[0].message.content.strip()
