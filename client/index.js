import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "../src/components/App";

// hydrateRootによってクライアント側でbuttonなどをinteractiveにする、イベントハンドラをつける
hydrateRoot(document.getElementById("root"), <App />);
