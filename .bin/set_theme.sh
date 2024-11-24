#!/bin/bash

# Function to toggle the GTK theme
toggle_gtk_theme() {
    if [[ -f ~/.cache/user_active_theme ]]; then
        current_theme=$(cat ~/.cache/user_active_theme)
        if [[ "$current_theme" == "dark" ]]; then
            new_theme="light"
        else
            new_theme="dark"
        fi
    else
        new_theme="dark"
    fi



    echo "$new_theme" > ~/.cache/user_active_theme
}

# Check if a parameter is provided
if [[ $# -eq 0 ]]; then
    toggle_gtk_theme
elif [[ "$1" == "dark" || "$1" == "light" ]]; then

    echo "$1" > ~/.cache/user_active_theme
else
    echo "Invalid parameter. Please use 'dark' or 'light'."
fi

~/.bin/reload_colors.sh
