#!/bin/bash

# Thanks, chatGPT. 
# Check if yay or paru is already installed
if command -v yay &>/dev/null; then
    echo "Yay is already installed!"
    exit 0
elif command -v paru &>/dev/null; then
    echo "Paru is already installed!"
    exit 0
fi

# Prompt user for choice
echo "Neither Yay nor Paru is installed."
echo "Choose which AUR helper to install:"
echo "1. Yay"
echo "2. Paru"
read -rp "Enter your choice (1 or 2): " choice

# Function to install dependencies and the chosen AUR helper
install_helper() {
    sudo pacman -S --needed --noconfirm git base-devel
    temp_dir=$(mktemp -d)
    cd "$temp_dir" || exit
    git clone "https://aur.archlinux.org/$1.git"
    cd "$1" || exit
    makepkg -si
    cd ~ || exit
    rm -rf "$temp_dir"
}

case $choice in
1)
    echo "Installing Yay..."
    install_helper yay
    ;;
2)
    echo "Installing Paru..."
    install_helper paru
    ;;
*)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

echo "$1 has been successfully installed!"
