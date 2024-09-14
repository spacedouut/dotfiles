matugen image ~/.cache/current_wallpaper.jpg --mode $(cat ~/.cache/user_active_theme)

ags --run-js "applyStyle();"
gradience-cli apply --preset ~/.cache/matugen/compiled/gradience.json --gtk both
