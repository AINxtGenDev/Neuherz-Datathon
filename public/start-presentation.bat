@echo off
title AIT-HPE Datathon Presentation
echo.
echo ========================================
echo   AIT-HPE Strategic Partnership
echo   Datathon Presentation
echo ========================================
echo.
echo Starting local server...
echo.
echo Opening presentation in your browser...
echo (If browser doesn't open, go to: http://localhost:9090)
echo.
echo Press Ctrl+C to stop the server when done.
echo.

:: Try to open browser after a short delay
start "" http://localhost:9090

:: Start Python server (Python 3)
python -m http.server 9090 2>nul
if %errorlevel% neq 0 (
    :: Try python3 command
    python3 -m http.server 9090 2>nul
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Python is not installed!
        echo Please install Python from https://www.python.org/downloads/
        echo.
        pause
    )
)
