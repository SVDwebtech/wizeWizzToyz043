import browserSync from "browser-sync";
import config from "./browsersync.config.js";

const bs = browserSync.create();
bs.init(config);