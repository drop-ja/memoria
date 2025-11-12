#!/bin/bash

# 対象のディレクトリを指定（カレントディレクトリを指定するなら . ）
TARGET_DIR="./"

# .mp4 → .webm 変換
while IFS= read -r -d '' mp4file; do
  webmfile="${mp4file%.mp4}.webm"
  echo "Converting $mp4file → $webmfile"
  ffmpeg -i "$mp4file" -c:v libvpx -b:v 1M -c:a libvorbis "$webmfile"
done < <(find "$TARGET_DIR" -type f -name "*.mp4" -print0)

