import Gdk from 'gi://Gdk';
import GLib from 'gi://GLib';

import { Bar, BarCornerTopleft, BarCornerTopright } from "./widgets/bar/widget.js";

App.config({
    style: "./style.css",
    windows: [
        Bar(0),
        Bar(1), 
        BarCornerTopleft(0), 
        BarCornerTopright(0),
        BarCornerTopleft(1), 
        BarCornerTopright(1)

    ],
});
