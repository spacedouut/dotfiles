export function ControlCenterItem(width, height, label, icon, func, type) {
    let item = null;
    switch (type) {
        case "button":
            item = Widget.Button({
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
            item.connect('clicked', () => {
                button.set_active(!item.active)
                func(item.active)
            })
        case "slider":
            
    }
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
    button.connect('clicked', () => {
        button.set_active(!button.active)
        func(button.active)
    })
}

export function ControlCenter() {
    return Widget.Box({
        className: "sidebar-controlcenter-container",
        children: []
    })
}
