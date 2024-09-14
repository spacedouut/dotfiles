#!/bin/bash

[[ $- == *i* ]] || return

alias ls="ls -a --color=auto"
alias wallp="sh ~/.bin/change_wallpaper.sh"
alias toggletheme="sh ~/.bin/set_theme.sh"
alias install="yay -S"
alias install-local="sudo pacman -U"

pfetch
eval "$(starship init bash)"
