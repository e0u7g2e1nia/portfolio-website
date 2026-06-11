#!/usr/bin/env bash
set -e
BASE="public/assets/ai-collab/workflow"

conv() {
  local src="$1" w="$2" fps="${3:-10}"
  local dst="${src%.*}.gif"
  ffmpeg -y -i "$src" -vf "fps=$fps,scale=$w:-1:flags=lanczos,palettegen" /tmp/_palette.png 2>/dev/null
  ffmpeg -y -i "$src" -i /tmp/_palette.png \
    -lavfi "fps=$fps,scale=$w:-1:flags=lanczos[x];[x][1:v]paletteuse" "$dst" 2>/dev/null
  echo "✓ $dst"
}

# 手机竖屏录屏 → 360px 宽
for f in "$BASE/工作流-碎片记录+日记整理+批注"/*.MOV; do conv "$f" 360 10; done

# 取色器小窗录屏 → 480px 宽
for f in "$BASE/小工具-取色器"/*.mov; do conv "$f" 480 10; done

echo "All done."
