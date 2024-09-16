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
        on_clicked: () => Utils.exec("shutdown"),
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
function ControlCenterButton(icon, setup, command) {
  return Widget.Button({
    className: "sidebar-overview-controlcenter-button",
    on_clicked: command(this),
    child: Widget.Icon(icon),
    setup: setup(this),
  });
}

function ControlCenterModule() {
  return Widget.Box({
    className: "sidebar-overview-controlcenter-container",
    children: [
      ControlCenterButton(
        "network-wireless",
        function (self) {
          self.active = Utils.exec(
            'if [[ $(nmcli radio wifi) == "disabled" ]]; then echo false; else echo true; fi',
          );
        },
        function (self) {
          if (self.active) {
            Utils.ExecAsync("nmcli radio wifi off");
            self.active = false;
          } else {
            Utils.ExecAsync("nmcli radio wifi on");
            self.active = true;
          }
        },
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
