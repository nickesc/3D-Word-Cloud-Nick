python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements.txt

npm install --prefix app

# start frontend
mkdir -p logs
npm run dev --prefix app -- >logs/frontend.log 2>&1 &

# start backend
uvicorn server.main:app --port 8127


