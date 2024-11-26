const Network = await Service.import("network");
const Bluetooth = await Service.import("bluetooth");

const username = Variable();

Utils.execAsync("whoami").then((out) => username.setValue(out));

function GreetingModule() {
    return Widget.Box({
        className: "sidebar-overview-greeting-container",
        children: [
            Widget.Label({
                className: "sidebar-overview-greeting-icon",
                label: "󰣇 ",
            }),
            Widget.Label({
                className: "sidebar-overview-greeting-label",
                label: `Hello, ${username.value}`,
            }),
            Widget.Button({
                className: "sidebar-overview-greeting-power",
                on_clicked: () => Utils.exec("shutdown now"),
                child: Widget.Icon("system-shutdown"),
            }),
            Widget.Button({
                className: "sidebar-overview-greeting-reboot",
                on_clicked: () => Utils.exec("reboot"),
                child: Widget.Icon("view-refresh"),
            }),
        ],
    });
}
function ControlCenterButton(icon, setup) {
    return Widget.Button({
        className: "sidebar-overview-controlcenter-button",
        child: Widget.Icon(icon),
        setup,
    });
}

function ControlCenterModule() {
    return Widget.Box({
        className: "sidebar-overview-controlcenter-container",
        children: [
            ControlCenterButton("network-wireless", function(self) {
                self.onClicked = () => Network.toggleWifi();
                self.onSecondaryClicked = () =>
                    Utils.execAsync("hyprctl dispatch exec nm-connection-editor");
                self.hook(Network, (button) => {
                    button.toggleClassName(
                        "sidebar-button-active",
                        [Network.wifi?.internet, Network.wired?.internet].includes(
                            "connected",
                        ),
                    );
                    button.tooltipText =
                        `${Network.wifi?.ssid} | Right-click to configure` || "Unknown";
                });
            }),
            ControlCenterButton("bluetooth", function(self) {
                self.onClicked = () => {
                    if (Bluetooth?.enabled) {
                        Utils.exec("rfkill block bluetooth");
                    } else {
                        Utils.exec("rfkill unblock bluetooth");
                    }
                };

                self.hook(Bluetooth, (button) => {
                    button.toggleClassName("sidebar-button-active", Bluetooth?.enabled);
                });
            }),
            ControlCenterButton("night-light", function(self) {
                const dark = Variable(
                    Utils.readFile("/home/spaced/.cache/user_active_theme"),
                );
                console.log(dark.value);
                const active = dark.value == "light" ? false : true;
                self.toggleClassName("sidebar-button-active", active);
                const monitor = Utils.monitorFile(
                    "/home/spaced/.cache/user_active_theme",
                    (file, event) => {
                        dark.setValue(Utils.readFile(file));
                        const active = dark.value == "dark";
                        self.toggleClassName("sidebar-button-active", active);
                    },
                );
                self.onClicked = () => {
                    Utils.execAsync("sh /home/spaced/.bin/set_theme.sh")
                };
            }),
            ControlCenterButton(
                "preferences-desktop-screensaver",
                function(self) { },
            ),
            ControlCenterButton(
                "preferences-desktop-screensaver",
                function(self) { },
            ),
        ],
    });
}

function CalendarModule() {
    return Widget.Box({
        child: Widget.Calendar({
            showDayNames: true,
            showDetails: false,
            showHeading: true,
            showWeekNumbers: false,
            detail: (self, y, m, d) => {
                return `<span color="white">${y}. ${m}. ${d}.</span>`;
            },
            onDaySelected: ({ date: [y, m, d] }) => {
                print(`${y}. ${m}. ${d}.`);
            },
        }),
    });
}

export function OverviewMenu() {
    return Widget.Box({
        vertical: true,
        children: [GreetingModule(), ControlCenterModule()],
    });
}
