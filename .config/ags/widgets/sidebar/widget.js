const apps = await Service.import("applications");
const { Gtk, Gdk } = imports.gi;
const Lang = imports.lang;
//import { SidebarContent } from "./content.js"

export function Sidebar() {
    return Widget.Window({
        name: "Sidebar",
        anchor: ["right", "top", "bottom"],
        layer: "overlay",
        keymode: "on-demand",
        child: Widget.Box({
            className: "sidebar-container",
            vertical: true, 
        }),
    });
}
