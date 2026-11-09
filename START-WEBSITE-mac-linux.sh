#!/bin/sh
# Starts the MER website on http://localhost:8000  (Ctrl+C to stop)
cd "$(dirname "$0")"
URL="http://localhost:8000/index.html"
( sleep 1; (command -v open >/dev/null && open "$URL") || (command -v xdg-open >/dev/null && xdg-open "$URL") ) &
if command -v python3 >/dev/null; then python3 -m http.server 8000; else python -m http.server 8000; fi
