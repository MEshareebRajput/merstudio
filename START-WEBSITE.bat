@echo off
title MER website (local server)
cd /d "%~dp0"
echo.
echo   Starting the MER website on http://localhost:8000
echo   Keep this window open while you look at the site. Close it to stop.
echo.
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000/index.html
  python -m http.server 8000
  goto :eof
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000/index.html
  py -m http.server 8000
  goto :eof
)
where npx >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8000/index.html
  npx --yes serve -l 8000 .
  goto :eof
)
echo   Python or Node.js was not found, so opening the site directly instead.
echo   (Everything still works; an internet connection is needed for fonts and animations.)
start "" "%~dp0index.html"
pause
