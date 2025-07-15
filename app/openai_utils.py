# claritybot/app/openai_utils.py
from dotenv import load_dotenv
load_dotenv()

import os, json
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

SYSTEM_PROMPT = (
    "ROLE: Cyber-Hygiene Mentor.\n"
    "Respond in JSON with keys: risk_rating, priority_fix, action_plan.\n"
    "action_plan must be 3–5 bullet steps."
)

def ask_openai(question: str) -> dict:
    """Prompt → OpenAI → clean python dict."""
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user",   "content": question},
        ],
        temperature=0.6,
    )

    raw = resp.choices[0].message.content.strip()

    # ---------- json parse ----------
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return {
            "risk_rating":  "Unknown",
            "priority_fix": "See text",
            "action_plan":  [raw],
        }

    # ---------- make sure action_plan is list ----------
    if isinstance(data.get("action_plan"), str):
        lines = data["action_plan"].split("\n")
        data["action_plan"] = [
            ln.lstrip("•-1234567890. ").strip()
            for ln in lines if ln.strip()
        ]
    return data
