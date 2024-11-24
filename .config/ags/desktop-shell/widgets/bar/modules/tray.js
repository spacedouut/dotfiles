const { Gravity } = imports.gi.Gdk;
const SystemTray = await Service.import("systemtray")

const SysTrayItem = (item) => Widget.Button({
    className: 'bar-tray-item',
    child: Widget.Icon({hpack: 'center'}).bind('icon', item, 'icon'),
    setup: (self) => self
        .hook(item, (self) => self.tooltipMarkup = item['tooltip-markup'])
    ,
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (btn, event) => item.menu.popup_at_widget(btn, Gravity.SOUTH, Gravity.NORTH, null),
});

export const Tray = (props = {}) => {
    const trayContent = Widget.Box({
        className: 'bar-tray-content',
        spacing: 8,
        setup: (self) => self
            .hook(SystemTray, (self) => {
                self.children = SystemTray.items.map(SysTrayItem);
                self.show_all();
            })
    });
    const trayRevealer = Widget.Revealer({
        revealChild: true,
        transition: 'slide_left',
        transitionDuration: 500,
        child: trayContent,
    });
    return Widget.Box({
        ...props,
        spacing: 8,
        children: [trayRevealer],
    });
}
