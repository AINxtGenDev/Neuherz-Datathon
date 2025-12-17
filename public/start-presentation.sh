#!/bin/bash

echo ""
echo "========================================"
echo "  AIT-HPE Strategic Partnership"
echo "  Datathon Presentation"
echo "========================================"
echo ""
echo "Starting local server on port 9090..."
echo ""

# Change to script directory
cd "$(dirname "$0")"

# Function to open browser based on OS
open_browser() {
    sleep 1
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open "http://localhost:9090"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v xdg-open &> /dev/null; then
            xdg-open "http://localhost:9090"
        elif command -v gnome-open &> /dev/null; then
            gnome-open "http://localhost:9090"
        else
            echo "Please open http://localhost:9090 in your browser"
        fi
    fi
}

# Open browser in background
open_browser &

echo "Opening presentation in your browser..."
echo "(If browser doesn't open, go to: http://localhost:9090)"
echo ""
echo "Press Ctrl+C to stop the server when done."
echo ""

# Start Python server
if command -v python3 &> /dev/null; then
    python3 -m http.server 9090
elif command -v python &> /dev/null; then
    python -m http.server 9090
else
    echo ""
    echo "ERROR: Python is not installed!"
    echo "Please install Python:"
    echo "  - macOS: brew install python3"
    echo "  - Ubuntu/Debian: sudo apt install python3"
    echo "  - Fedora: sudo dnf install python3"
    echo ""
    exit 1
fi
