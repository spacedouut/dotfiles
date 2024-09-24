#!/bin/bash

echo 'Step 1: Install yay package manager'

echo 'Checking for yay...'
if [[ -x /usr/bin/yay ]]; then
    echo "yay is already installed (we can skip this step!)"
else
    echo "yay not installed, installing now (may require sudo)"
    echo 'Step 1.1: Cloning repo'
    cd ~
    git clone https://aur.archlinux.org/yay-git.git 
    cd yay-git
    echo 'Step 1.2: Installing dependencies'
    sudo pacman -Sy --noconfirm go
    echo 'Step 1.3: Building & installing yay'
    makepkg -si --noconfirm 
    echo 'DONE!'
fi

echo 'Step 2: Installng Packages'
yay -Sy --noconfirm --needed - < ./packagelist 

echo 'Step 3: Copying Files'

echo 'Step 3.1: Linking diretories'
ln -sf ~/.dotfiles/.bin/ ~/.bin/
ln -sf ~/.dotfiles/.config/ ~/.config/

echo 'Step 3.2: Copying default matugen color presets'
mkdir ~/.cache/matugen
cp -r ./presets/blue/compiled/ ~/.cache/matugen/

echo 'Step 4: Setting up SDDM (You will need sudo to do this!)'
sudo systemctl enable sddm.service

echo 'aaaand we are done! I suggest a reboot to make sure everything works.'
echo 'Or just be a rebel and run Hyprland right now.'
