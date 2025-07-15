# 🧪 QA Test Matrix – ClarityBot

| Test Case | Email                         | LinkedIn Username | Expected Result                  |
|-----------|-------------------------------|-------------------|----------------------------------|
| 1         | test@example.com              | real-username     | Risk: Low                        |
| 2         | breached@sample.com           | real-username     | Risk: High / Medium              |
| 3         | notanemail                    | real-username     | ❌ Error message shown           |
| 4         | (empty)                       | (empty)           | ❌ No scan / warning shown       |
| 5         | valid@email.com               | real-username     | ✅ Fallback if API fails         |
| 6         | valid@email.com               | wrongusername123  | ✅ GPT handles gracefully        |
