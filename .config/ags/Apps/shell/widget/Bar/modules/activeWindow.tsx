import { bind } from "astal"
import Hyprland from "gi://AstalHyprland"

const hypr = Hyprland.get_default()

export function ActiveWindow() {
    const window = bind(hypr, "focusedClient")

    return <box className="FocusedWindow" vertical="true">
        {window.as(client => (
            client && <label 
                label={bind(client, "class").as(String)}
                className="FocusedWindow-Class" 
            />
        ))}
        {window.as(client => (
            client && <label 
                label={bind(client, "title").as(String)} 
                className="FocusedWindow-Title" 
            />
        ))}

    </box>
}
