import { RoundedCorner } from "../../.common/widgets/cairo_roundedcorner.js"
import { enableClickthrough } from "../../.utils/clickthrough.js";
import { Time, Date } from "./modules/date.js";
import { ActiveWindow } from "./modules/window.js";
import { Media } from "./modules/media.js";
import { Tray } from "./modules/tray.js";
import { Divider } from "./modules/divider.js";

export function Bar(monitor = 0) {
    const left = Widget.Box({
        spacing: 8,
        className: 'bar-widgets-left',
        children: [
            ActiveWindow()
        ],
    });

    const center = Widget.Box({
        spacing: 8,
        className: 'bar-widgets-center',
        children: [Media()],
    });

    const right = Widget.Box({
        hpack: "end",
        className: 'bar-widgets-right',
        spacing: 8,
        children: [Tray(), Divider(), Date(), Time()],
    });

    return Widget.Window({
        monitor,
        name: `bar${monitor}`,
        anchor: ["left", "right", "top"],
        className: 'bar',
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            spacing: 8,
            vertical: false,
            startWidget: left,
            centerWidget: center,
            endWidget: right,
            className: 'bar-widgets'
        }),
        setup: enableClickthrough
    });
}

export const BarCornerTopleft = (monitor = 0) => Widget.Window({
    monitor,
    name: `barcornerL${monitor}`,
    layer: 'top',
    anchor: ['top', 'left'],
    exclusivity: 'normal',
    visible: true,
    child: RoundedCorner('topleft', { className: 'bar-corner', }),
    setup: enableClickthrough,
});

export const BarCornerTopright = (monitor = 0) => Widget.Window({
    monitor,
    name: `barcornerR${monitor}`,
    layer: 'top',
    anchor: ['top', 'right'],
    exclusivity: 'normal',
    visible: true,
    child: RoundedCorner('topright', { className: 'bar-corner', }),
    setup: enableClickthrough,
});

export const BarCornerBottomleft = (monitor = 0) => Widget.Window({
    monitor,
    name: `barcornerBL${monitor}`,
    layer: 'top',
    anchor: ['bottom', 'left'],
    exclusivity: 'normal',
    visible: true,
    child: RoundedCorner('bottomleft', { className: 'bar-corner', }),
    setup: enableClickthrough,
});

export const BarCornerBottomright = (monitor = 0) => Widget.Window({
    monitor,
    name: `barcornerBR${monitor}`,
    layer: 'top',
    anchor: ['bottom', 'right'],
    exclusivity: 'normal',
    visible: true,
    child: RoundedCorner('bottomright', { className: 'bar-corner', }),
    setup: enableClickthrough,
});
