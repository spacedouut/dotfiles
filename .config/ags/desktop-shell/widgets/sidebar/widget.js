const apps = await Service.import("applications");
const { Gtk, Gdk } = imports.gi;
const Lang = imports.lang;
import { LeftSidebarContent, RightSidebarContent } from "./content.js";

export function SidebarL(monitor = 0) {
  return Widget.Window({
    monitor,
    name: `LeftSidebar${monitor}`,
    anchor: ["left", "top", "bottom"],
    layer: "overlay",
    keymode: "on-demand",
    exclusivity: "exclusive",
    visible: false,
    child: Widget.Box({
      className: "sidebar-container",
      vertical: true,
      child: LeftSidebarContent(),
    }),
  });
}

export function SidebarR(monitor = 0) {
  return Widget.Window({
    monitor,
    name: `RightSidebar${monitor}`,
    anchor: ["right", "top", "bottom"],
    layer: "overlay",
    keymode: "on-demand",
    exclusivity: "exclusive",
    visible: false,
    child: Widget.Box({
      className: "sidebar-container",
      vertical: true,
      child: RightSidebarContent(),
    }),
  });
}
