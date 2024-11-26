import { App, Astal, Gtk, Gdk } from "astal/gtk3"
import { Variable } from "astal"

const time = Variable("").poll(500, "date")

export function Time() {
    return <label className="Date" label={time()} />
}
