#!/bin/bash

set -e

# Get today's date in YYYY-MM-DD format
TODAY=$(date +%Y-%m-%d)

# Read posting plan and find entry for today
FILE_TO_PUBLISH=""
while IFS=',' read -r publish_date filename title status; do
    if [ "$publish_date" = "$TODAY" ]; then
        FILE_TO_PUBLISH="$filename"
        break
    fi
done < docs/posting-plan.csv

# If no post scheduled for today, exit silently
if [ -z "$FILE_TO_PUBLISH" ]; then
    echo "No post scheduled for $TODAY"
    exit 0
fi

# Check if file exists
if [ ! -f "content/posts/$FILE_TO_PUBLISH" ]; then
    echo "Error: File not found - content/posts/$FILE_TO_PUBLISH"
    exit 1
fi

# Git operations
git add "content/posts/$FILE_TO_PUBLISH"
git commit -m "publish: $FILE_TO_PUBLISH ($TODAY)"
git push origin main

echo "Published: $FILE_TO_PUBLISH on $TODAY"
