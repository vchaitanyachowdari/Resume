#!/bin/bash

# Performance Audit Script
# This script runs Lighthouse audits for the resume website

echo "==================================="
echo "Performance Audit for Resume Site"
echo "==================================="
echo ""

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo "Lighthouse is not installed. Installing globally..."
    npm install -g lighthouse
fi

# Start a local server
echo "Starting local server on port 8080..."
python3 -m http.server 8080 > /dev/null 2>&1 &
SERVER_PID=$!
sleep 2

echo "Server started with PID: $SERVER_PID"
echo ""

# Run Lighthouse audit for Desktop
echo "Running Lighthouse audit for DESKTOP..."
lighthouse http://localhost:8080 \
  --preset=desktop \
  --output=html \
  --output-path=./lighthouse-desktop-report.html \
  --quiet

echo "Desktop report saved to: lighthouse-desktop-report.html"
echo ""

# Run Lighthouse audit for Mobile
echo "Running Lighthouse audit for MOBILE..."
lighthouse http://localhost:8080 \
  --preset=mobile \
  --output=html \
  --output-path=./lighthouse-mobile-report.html \
  --quiet

echo "Mobile report saved to: lighthouse-mobile-report.html"
echo ""

# Stop the server
echo "Stopping server..."
kill $SERVER_PID

echo ""
echo "==================================="
echo "Audit Complete!"
echo "==================================="
echo ""
echo "View reports:"
echo "  Desktop: lighthouse-desktop-report.html"
echo "  Mobile:  lighthouse-mobile-report.html"
echo ""
