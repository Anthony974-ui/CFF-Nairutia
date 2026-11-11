# Minimal Date Invitation

A small Flask website with a responsive invitation, yes/no responses, date and time selection, and a copyable plan.

## 1. Run it on your computer

Install Python 3.10 or newer. Open a terminal in this project folder and run:

```bash
python -m venv .venv
```

Activate the environment:

**Windows PowerShell**
```powershell
.venv\Scripts\Activate.ps1
```

**macOS / Linux**
```bash
source .venv/bin/activate
```

Install packages and start the app:

```bash
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000` in your browser.

## 2. Personalize the invitation

Open `templates/index.html` and edit:
- `I'd like to take you` — the main invitation.
- The paragraph below it — your personal message.
- The page title in the `<title>` tag.

You can change colours in `static/style.css` near the top, inside `:root`.

## 3. Publish it so someone else can open the link

The easiest beginner route is GitHub + Render:

1. Create a GitHub account at https://github.com if you do not have one.
2. Create a new **public** repository, e.g. `my-date-invitation`.
3. Upload the project files and folders to that repository. Keep the folder structure intact.
4. Create/sign in to a Render account at https://render.com.
5. In Render, choose **New** → **Web Service** and connect your GitHub repository.
6. Render should detect `render.yaml`. If it asks for settings, use:
   - Runtime: Python
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`
7. Choose the free instance if it is available to your account, then deploy.
8. When deployment finishes, Render gives you a public address ending in `.onrender.com`. Open it and test it on your phone.
9. Send that public URL through WhatsApp.

Free hosting availability and sleep behaviour can change. A free service may take a little time to wake after inactivity.

## Important notes

- The chosen date/time is shown in the browser and can be copied. This starter project does **not** send you an automatic notification or save the other person's response to a database.
- It does not ask for names, phone numbers, passwords, or payment details.
- A public GitHub repository means the source code is visible. Do not put passwords, API keys, or private information in it.
- A local address like `127.0.0.1:5000` works only on your own computer. Share the Render URL, not the local address.
