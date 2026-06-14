#!/bin/bash

# Get tomorrow's date
TOMORROW=$(date -d "+1 day" +%Y-%m-%d 2>/dev/null || date -v+1d +%Y-%m-%d)

# Read posting plan and find tomorrow's post
while IFS=',' read -r publish_date filename title status; do
    if [ "$publish_date" = "$TOMORROW" ]; then
        echo "📝 **내일 올릴 글 브리핑** ($TOMORROW)"
        echo ""
        echo "📌 파일: $filename"
        echo "📝 제목: $title"
        echo "상태: $status"
        exit 0
    fi
done < docs/posting-plan.csv

echo "⚠️ $TOMORROW에 예정된 글이 없습니다."
echo "posting-plan.csv를 확인해주세요."
