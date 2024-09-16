#!/bin/bash

# Function to toggle Wifi
toggle_wifi() { 
  case "$2" in
    on)
      nmcli radio wifi on
        ;;
    off)
        nmcli radio wifi off
        ;;
    toggle)
      if nmcli radio wifi | grep -q "enabled"; then
        nmcli radio wifi off
      else
        nmcli radio wifi on
      fi
      ;;
    *)
      echo "Invalid argument for WiFi: $2"
      ;;
  esac
}

# Function to toggle Bluetooth
toggle_bluetooth() {
  case "$2" in
    on)
      bluetoothctl power on
      ;;
    off)
      bluetoothctl power off
      ;;
    *)
      if bluetoothctl show | grep "Powered:" | grep -q "yes"; then
        bluetoothctl power off
      else
        bluetoothctl power on
      fi
      ;;
  esac
}

# Function to toggle Dark/Light mode (assuming KDE Plasma)
toggle_dark_mode() {
  case "$2" in
    on)
        sh ~/.bin/set_theme.sh dark
      ;;
    off)
        sh ~/.bin/set_theme.sh light
      ;;
    toggle)
        sh ~/.bin/set_theme.sh
      ;;
    *)
      echo "Invalid argument for Dark/Light mode: $2"
      ;;
  esac
}

# Main function
main() {
  case "$1" in
    wifi)
      toggle_wifi "$2"
      ;;
    bluetooth)
      toggle_bluetooth "$2"
      ;;
    dark)
      toggle_dark_mode "$2"
      ;;
    *)
      echo "Invalid parameter: $1"
      ;;
  esac
}

# Call the main function
main "$1" "$2"
