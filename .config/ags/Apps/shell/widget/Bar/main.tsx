import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

import { Time } from "./modules/time"
import { ActiveWindow } from "./modules/activeWindow"

//const time = Variable("").poll(1000, "date")

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return (
        <window
            className="StatusBar"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            anchor={Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            application={App}
        >
            <centerbox >
                {ActiveWindow()}
                <box />
                <button onClick={() => print("hello")} halign={Gtk.Align.CENTER}>
                    {Time()}
                </button>
            </centerbox>
        </window>
    )
}
