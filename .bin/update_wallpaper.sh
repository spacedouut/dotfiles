#!/bin/bash

WALLPAPER_FOLDER="/home/spaced/.config/wallpapers/"
WALLPAPER=$(find $WALLPAPER_FOLDER -type f | shuf -n 1)
echo "$WALLPAPER"
cp "$WALLPAPER" ~/.cache/current_wallpaper.jpg
~/.bin/generate_colors.sh
~/.bin/reload_colors.sh


