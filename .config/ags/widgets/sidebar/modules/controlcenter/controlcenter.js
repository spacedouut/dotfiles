function ControlCenterItem(width, height, label, icon, func) {
    const button = Widget.Button({
        css: `min-width: ${width}px; min-height: ${height}px;`,
        child: Widget.Box({
            vertical: true,
            children: [
                Widget.Icon({
                    icon,
                    css: 'font-size: 25px;',
                    className: "sidebar-controlcenter-item-icon"
                }),
                Widget.Label({
                    label,
                    className: "sidebar-controlcenter-item-label"
                })
            ]
        })
    })
}

export function ControlCenter() {
    return Widget.Box({
        className: "sidebar-controlcenter-container",
        children: []
    })
}
