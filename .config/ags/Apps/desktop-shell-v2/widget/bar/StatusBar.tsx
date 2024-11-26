import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

// Module Imports
import './modules/time'

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return (
        <window
            className="StatusBar"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT}
            application={App}
        >
            <centerbox>
                <button onClicked="echo hello" halign={Gtk.Align.CENTER}>
                    Welcome to AGS!
                </button>
                <box />
                <button onClick={() => print("hello")} halign={Gtk.Align.CENTER}>
                    {Time()}
                </button>
            </centerbox>
        </window>
    )
}
