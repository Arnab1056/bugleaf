@echo off
echo ==========================================
echo BugLeaf GitHub Pages Setup
echo ==========================================
echo.
set /p USERNAME=Enter your GitHub username: 
echo.
git init
git add .
git commit -m "Initial BugLeaf website"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/%USERNAME%/bugleaf.git
git push -u origin main
echo.
echo Done. Now enable:
echo GitHub Repository ^> Settings ^> Pages ^> Source ^> GitHub Actions
echo.
pause
