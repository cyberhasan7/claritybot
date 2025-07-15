
# 🛡️ ClarityBot – Your AI Cyber Risk Analyzer

ClarityBot is a full-stack AI-powered cybersecurity assistant that analyzes your cyber risk based on real-world data breaches and your LinkedIn profile summary. Built with FastAPI, OpenAI, and a custom 3D React UI – it's fast, sleek, and genuinely useful.

![ClarityBot Screenshot](./screenshot.png) <!-- You can replace this with your actual image -->

---

## 🚀 Live Demo
**Coming Soon** – Deploying via Render + Vercel

---

## 🎯 Features

✅ Analyze your cyber hygiene in seconds  
✅ AI-generated risk rating: High / Medium / Low  
✅ Priority fix suggestion  
✅ Action plan with 3–5 practical steps  
✅ Beautiful 3D glassmorphism UI (pure CSS)  
✅ FastAPI backend with OpenAI integration  
✅ Clean React frontend using Tailwind  
✅ Audio feedback (ding!) on completion  

---

## 🧠 How It Works

You enter:
- **Leak count** (e.g., 4)
- **Breach names** (e.g., LinkedIn, Dropbox)
- **LinkedIn summary** (your professional profile)

ClarityBot sends this to the backend →  
FastAPI formats a prompt →  
OpenAI GPT analyzes the risk →  
Returns structured JSON →  
Frontend displays clean results instantly.

---

## 💻 Tech Stack

| Frontend | Backend  | AI      | Styling   |
|----------|----------|---------|-----------|
| React    | FastAPI  | OpenAI  | Tailwind  |

---

## 🏗️ Project Structure

```bash
claritybot/
├── app/
│   ├── main.py           # FastAPI entry
│   └── openai_utils.py   # Prompt handling + response parsing
├── frontend/
│   ├── App.jsx           # Main UI logic
│   ├── index.css         # Tailwind styles
│   └── glassform.css     # Glassmorphism + cube animation
├── .env                  # OpenAI API Key
└── README.md
````

---

## ⚙️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/claritybot.git
cd claritybot
```

2. **Install backend dependencies**

```bash
pip install -r requirements.txt
```

3. **Create a `.env` file**

```env
OPENAI_API_KEY=your-api-key-here
```

4. **Run FastAPI backend**

```bash
uvicorn app.main:app --reload
```

5. **Start React frontend**

```bash
npm install
npm run dev
```

---

## 📸 Sample Output

**Input:**

* Leak count: 4
* Breaches: LinkedIn, Canva, Dropbox, Adobe
* LinkedIn: Software developer with 6+ years in fintech

**Output:**

```
risk_rating: "High"
priority_fix: "High"
action_plan:
- Change passwords for all accounts
- Enable two-factor authentication
- Monitor accounts for suspicious activity
- Use a password manager
- Review privacy settings
```

---

## 🧠 Author

Built with ❤️ by **H. Hasan Ali**
Beginner → Builder → Future CTO
*“This is my first real project — and I’m just getting started.”*

---

## 🌟 Future Add-ons

* Export action plan to PDF
* Login system + session history
* Public deployment + feedback form
* Dark mode / Light mode toggle

---

