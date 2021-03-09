import * as OfflinePluginRuntime from "offline-plugin/runtime";
import axios from "axios";
import imagesloaded from "imagesloaded";

import "@fortawesome/fontawesome-pro/js/all";

import "./index.html";
import "./index.scss";

import "./scripts/variables";
import "./scripts/components/os/os";
import "./scripts/components/debug/debug";
import "./scripts/components/brand/brand";
import "./scripts/components/general/general";
import "./scripts/components/preloader/preloader";
import "./scripts/components/settings/settings";
import "./scripts/components/featured/featured";
import "./scripts/components/scroller/scroller";
import "./scripts/components/scroller/scroller_html";
import "./scripts/components/menu/menu";
import "./scripts/components/navigation/navigation";
import "./scripts/components/navigation/navigation_context";
import "./scripts/components/navigation/navigation_virtual_menu";
import "./scripts/components/navigation/navigation_scrollers";

import "./scripts/script";

OfflinePluginRuntime.install();
