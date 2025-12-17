#!/bin/bash

echo ""
echo "========================================"
echo "  AIT-HPE Strategic Partnership"
echo "  Datathon Presentation"
echo "========================================"
echo ""

# Change to script directory
cd "$(dirname "$0")"

echo "Starting local server on port 9090..."
echo ""

# Open browser after short delay
(sleep 1 && open "http://localhost:9090") &

echo "Opening presentation in Safari..."
echo "(If browser doesn't open, go to: http://localhost:9090)"
echo ""
echo "Press Ctrl+C or close this window to stop."
echo ""

# Start Python server
python3 -m http.server 9090
