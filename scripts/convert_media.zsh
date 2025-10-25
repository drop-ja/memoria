#!/bin/zsh
set -euo pipefail

MEDIA_DIR="/Users/kanata/dev/memoria/repos/memoria/demo-site/public/ai-media"
THREADS=$(sysctl -n hw.ncpu 2>/dev/null || echo 4)

echo "Converting MP4 -> WEBM (VP9 + Opus)..."
find "$MEDIA_DIR" -type f -iname "*.mp4" -print0 | while IFS= read -r -d '' f; do
  out="${f%.*}.webm"
  if [[ -e "$out" && "$out" -nt "$f" ]]; then
    echo "Skip (up-to-date): $out"
    continue
  fi
  echo "-> $out"
  ffmpeg -y -hide_banner -loglevel error -stats \
    -i "$f" \
    -c:v libvpx-vp9 -b:v 0 -crf 32 -row-mt 1 -threads "$THREADS" \
    -auto-alt-ref 1 -pix_fmt yuv420p \
    -c:a libopus -b:a 96k \
    "$out"
done

echo "Converting JPG -> WEBP..."
find "$MEDIA_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' f; do
  out="${f%.*}.webp"
  if [[ -e "$out" && "$out" -nt "$f" ]]; then
    echo "Skip (up-to-date): $out"
    continue
  fi
  echo "-> $out"
  ffmpeg -y -hide_banner -loglevel error -stats \
    -i "$f" \
    -c:v libwebp -lossless 0 -compression_level 6 -q:v 80 \
    "$out"
done

echo "Done."


