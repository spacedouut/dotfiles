const hyprland = await Ser;

export const ActiveWindow = () => {
    const { active } = useService('hyprland');

    return (
        <scrollable hexpand vexpand hscroll="automatic" vscroll="never">
            <box vertical>
                <label
                    xalign={0}
                    truncate="end"
                    maxWidthChars={1}
                    className="bar-activewindow-top"
                >
                    {active.client.class.length === 0 ? 'Desktop' : active.client.class}
                </label>
                <label
                    xalign={0}
                    truncate="end"
                    maxWidthChars={1}
                    className="bar-activewindow-bottom"
                >
                    {active.client.title.length === 0 ? `Workspace ${active.workspace.id}` : active.client.title}
                </label>
            </box>
        </scrollable>
    );
};
