const apps = await Service.import("applications");
const { Gtk, Gdk } = imports.gi;
const Lang = imports.lang;

export function Sidebar() {
    return Widget.Window({
        name: "Sidebar",
        anchor: ["right", "top", "bottom"],
        layer: "overlay",
        keymode: "on-demand",
        child: Widget.EventBox({
            className: "sidebar-container",
            vertical: true,
        }),
    });
}
