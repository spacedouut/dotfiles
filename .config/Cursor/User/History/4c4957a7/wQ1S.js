const username = Variable()

Utils.execAsync('whoami')
    .then(out => username.setValue(out))

function GreetingModule() {
    return Widget.Box({
        className: 'sidebar-overview-greeting-container',
        children: [
            Widget.Label({ className: 'sidebar-overview-greeting-icon', label: "󰣇 " }),
            Widget.Label({ className: 'sidebar-overview-greeting-label', label: `Hello, ${username.value}` }),
            Widget.Button({
                className: 'sidebar-overview-greeting-power',
                on_clicked: () => Utils.exec('shutdown'),
                child: Widget.Icon("system-shutdown")
            }),
            Widget.Button({
                className: 'sidebar-overview-greeting-reboot',
                on_clicked: () => Utils.exec('reboot'),
                child: Widget.Icon("view-refresh")
            })
        ]
    })
}
function ControlCenterButton(icon, command) {
    return Widget.Button({
        className: 'sidebar-overview-controlcenter-button',
        on_clicked: () => command(),
        child: Widget.Icon(icon)
    })
}

function ControlCenterModule() {
    return Widget.Box({
        className: 'sidebar-overview-controlcenter-container',
        children: [

        ]
    })
}

function CalendarModule() {
    return Widget.Box({
        child: Widget.Calendar({
            showDayNames: true,
            showDetails: false,
            showHeading: true,
            showWeekNumbers: false,
            detail: (self, y, m, d) => {
                return `<span color="white">${y}. ${m}. ${d}.</span>`
            },
            onDaySelected: ({ date: [y, m, d] }) => {
                print(`${y}. ${m}. ${d}.`)
            },
        })
    })
}

export function OverviewMenu() {
    return Widget.Box({
        vertical: true,
        children: [GreetingModule()]
    })
}
