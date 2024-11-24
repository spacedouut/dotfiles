const { query } = await Service.import("applications");
const WINDOW_NAME = "applauncher";

/** @param {import('resource:///com/github/Aylur/ags/service/applications.js').Application} app */
const AppItem = (app) =>
    Widget.Button({
        on_clicked: () => {
            App.closeWindow(WINDOW_NAME);
            app.launch();
        },
        className: "sidebar-applauncher-item",
        attribute: { app },
        child: Widget.Box({
            children: [
                Widget.Icon({
                    icon: app.icon_name || "",
                    size: 42,
                    className: "sidebar-applauncher-item-icon",
                }),
                Widget.Label({
                    class_name: "sidebar-applauncher-item-title",
                    label: app.name,
                    xalign: 0,
                    vpack: "center",
                    truncate: "end",
                }),
            ],
        }),
    });

export function ApplauncherContent({
    width = 500,
    height = 500,
    spacing = 12,
}) {
    // list of application buttons
    let applications = query("").map(AppItem);

    // container holding the buttons
    const list = Widget.Box({
        vertical: true,
        children: applications,
        spacing,
        className: "sidebar-applauncher-list",
    });

    // repopulate the box, so the most frequent apps are on top of the list
    function repopulate() {
        applications = query("").map(AppItem);
        list.children = applications;
    }

    // search entry
    const entry = Widget.Entry({
        hexpand: true,
        css: `margin-bottom: ${spacing}px;`,
        className: "sidebar-applauncher-entry",

        // to launch the first item on Enter
        on_accept: () => {
            // make sure we only consider visible (searched for) applications
            const results = applications.filter((item) => item.visible);
            if (results[0]) {
                App.toggleWindow(WINDOW_NAME);
                results[0].attribute.app.launch();
            }
        },

        // filter out the list
        on_change: ({ text }) =>
            applications.forEach((item) => {
                item.visible = item.attribute.app.match(text ?? "");
            }),
    });

    return Widget.Box({
        vertical: true,
        css: `margin: ${spacing * 2}px;`,
        children: [
            entry,

            // wrap the list in a scrollable
            Widget.Scrollable({
                hscroll: "never",
                css: `min-width: ${width}px;` + `min-height: ${height}px;`,
                child: list,
            }),
        ],
        setup: (self) =>
            self.hook(App, (_, windowName, visible) => {
                if (windowName !== WINDOW_NAME) return;

                // when the applauncher shows up
                if (visible) {
                    repopulate();
                    entry.text = "";
                    entry.grab_focus();
                }
            }),
    });
}
