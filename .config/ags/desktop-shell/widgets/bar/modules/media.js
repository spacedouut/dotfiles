const mpris = await Service.import("mpris");

export function Media() {
  const label = Utils.watch("", mpris, "player-changed", () => {
    if (mpris.players[0]) {
      const { track_artists, track_title } = mpris.players[0];
      return `${track_artists.join(", ")} - ${track_title}`;
    } else {
      return "No Audio";
    }
  });

  return Widget.Button({
    class_name: "bar-media",
    on_primary_click: () => App.toggleWindow("Media"),
    on_scroll_up: () => mpris.getPlayer("")?.next(),
    on_scroll_down: () => mpris.getPlayer("")?.previous(),
    child: Widget.Label({ label, className: "bar-media-text" }),
  });
}
