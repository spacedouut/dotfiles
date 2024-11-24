import { App, Astal, Gtk, Gdk } from "astal/gtk3";
import { Variable } from "astal";

const time = Variable("").poll(1000, "date");

export default function Bar(gdkmonitor: Gdk.Monitor) {
    return new Astal.Window({
        className: "Bar",
        gdkmonitor,
        exclusivity: Astal.Exclusivity.EXCLUSIVE,
        anchor: Astal.WindowAnchor.TOP | Astal.WindowAnchor.LEFT | Astal.WindowAnchor.RIGHT,
        application: App,
        child: new Astal.CenterBox({
            children: [
                new Astal.Button({
                    onClicked: "echo hello",
                    halign: Gtk.Align.CENTER,
                    label: "Welcome to AGS!",
                }),
                new Astal.Box(),
                new Astal.Button({
                    onClick: () => console.log("hello"),
                    halign: Gtk.Align.CENTER,
                    child: new Astal.Label({
                        label: time(),
                    }),
                }),
            ],
        }),
    });
}
