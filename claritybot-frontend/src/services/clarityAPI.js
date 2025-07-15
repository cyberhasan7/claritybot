// src/services/clarityAPI.js
export async function analyzeRisk(prompt) {
  const res = await fetch("http://127.0.0.1:8000/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: prompt }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();          // 🎯 backend already sends dict
}
