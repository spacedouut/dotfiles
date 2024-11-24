import { ApplauncherContent } from "./modules/applauncher.js";
import { OverviewMenu } from "./modules/overview.js";

const date = Variable("", {
    poll: [500, 'date "+%A, %B %d %Y"'],
});

export function LeftSidebarContent() {
    const title = Widget.Label({
        label: `Hello, ${Utils.exec("whoami")}!`,
        className: "sidebar-gemini-greeting"
    });

    return Widget.Box({
        child: ApplauncherContent({
            width: 300,
            height: 950,
            spacing: 12,
        }),
    });
}

export function RightSidebarContent() {
    const title = Widget.Label({
        label: date.bind(),
    });

    return Widget.Box({
        child: OverviewMenu(),
    });
}
