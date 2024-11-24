#!/bin/bash

[[ $- == *i* ]] || return

alias ls="ls -a --color=auto"
alias wallp="sh ~/.bin/update_wallpaper.sh"
alias toggletheme="~/.bin/set_theme.sh"
alias install="yay -S"
alias install-local="sudo pacman -U"
alias launch="hyprctl dispatch exec"

pfetch
eval "$(starship init bash)"
