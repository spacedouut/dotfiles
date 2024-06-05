const Hyprland = await Service.import("hyprland");

export const ActiveWindow = () => {
    try {
        //const Hyprland = (await import('resource:///com/github/Aylur/ags/service/hyprland.js')).default;
        return Widget.Scrollable({
            hexpand: true, vexpand: true,
            hscroll: 'automatic', vscroll: 'never',
            child: Widget.Box({
                vertical: true,
                children: [
                    Widget.Label({
                        xalign: 0,
                        truncate: 'end',
                        maxWidthChars: 1, // Doesn't matter, just needs to be non negative
                        className: 'bar-activewindow-top',
                        setup: (self) => self.hook(Hyprland.active.client, label => { // Hyprland.active.client
                            label.label = Hyprland.active.client.class.length === 0 ? 'Desktop' : Hyprland.active.client.class;
                        }),
                    }),
                    Widget.Label({
                        xalign: 0,
                        truncate: 'end',
                        maxWidthChars: 1, // Doesn't matter, just needs to be non negative
                        className: 'bar-activewindow-bottom',
                        setup: (self) => self.hook(Hyprland.active.client, label => { // Hyprland.active.client
                            label.label = Hyprland.active.client.title.length === 0 ? `Workspace ${Hyprland.active.workspace.id}` : Hyprland.active.client.title;
                        }),
                    })
                ]
            })
        });
    } catch {
        return null;
    }
};
