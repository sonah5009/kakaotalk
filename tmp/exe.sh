#!/bin/bash

# Starting the Backend service
echo "Starting Backend Service..."
cd ./BE
uvicorn main:app --reload &

# Ensure backend starts after a slight delay
sleep 5

# Starting the Frontend service
echo "Starting Frontend Service..."
cd ../FE
# yarn dev &
npm run dev &

# Wait for the servers to start
sleep 5

# Determine the operating system
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    alias open='xdg-open'
    ;;
  'Darwin') 
    OS='Mac'
    ;;
  'WindowsNT')
    OS='Windows'
    alias open='start'
    ;;
  *)
    echo "Unknown OS"
    ;;
esac

# Open the browser
echo "Opening http://localhost:3000 in the default browser..."
open http://localhost:3000