import Gdk from "gi://Gdk";
import GLib from "gi://GLib";

import {
    Bar,
    BarCornerTopleft,
    BarCornerTopright,
    BarCornerBottomright,
    BarCornerBottomleft,
} from "./widgets/bar/widget.js";
import { MediaWidget } from "./widgets/media/widget.js";
import { NotificationManager } from "./widgets/notifications/widget.js";
import { SidebarL, SidebarR } from "./widgets/sidebar/widget.js";

export const COMPILED_STYLE_DIR = `${GLib.get_user_cache_dir()}/ags`;

async function applyStyle() {
    //Utils.exec(`rm -r ${COMPILED_STYLE_DIR}`);
    Utils.exec(`mkdir -p ${COMPILED_STYLE_DIR}`);
    Utils.exec(`touch ${COMPILED_STYLE_DIR}/style.css`);
    Utils.exec(
        `sass ${App.configDir}/scss/main.scss ${COMPILED_STYLE_DIR}/style.css`,
    );
    App.resetCss();
    App.applyCss(`${COMPILED_STYLE_DIR}/style.css`);
    console.log("[LOG] Styles loaded");
}

globalThis["applyStyle"] = applyStyle
Utils.monitorFile(`${App.configDir}/scss`, applyStyle);

applyStyle().catch(print);

App.config({
    windows: [
        Bar(0),
        Bar(1),
        BarCornerTopleft(0),
        BarCornerTopright(0),
        BarCornerTopleft(1),
        BarCornerTopright(1),
        BarCornerBottomleft(0),
        BarCornerBottomright(0),
        BarCornerBottomleft(1),
        BarCornerBottomright(1),
        MediaWidget(),
        NotificationManager(),
        SidebarL(0),
        SidebarR(0),
        SidebarL(1),
        SidebarR(1)

    ],
});
