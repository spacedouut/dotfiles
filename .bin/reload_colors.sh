if [[ $# -eq 0 || ! $(grep -q noregen <<< "$*") ]]; then
    echo 'Colors will be regenerated from current wallpaper!'
    ~/.bin/generate_colors.sh
fi

ags --run-js "applyStyle();"
gradience-cli apply -p ~/.cache/matugen/compiled/gradience.json 
