@echo off
echo Iniciando backend...
start cmd /k "cd backend && npm start"

timeout /t 2 >nul

echo Iniciando frontend...
start cmd /k "cd frontend && npm run dev"
