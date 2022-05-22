import { createRoot } from "react-dom/client";
import App from "./App";
import "./samples/electron-store"; // sample
import "./samples/preload-module"; // sample
import { setupMock } from "./mock/index"; // setup mock
import "rui-next/css"; // lib css
import "./styles/index.less"; // app styles

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// prod mock
if (!import.meta.env.DEV) {
  setupMock();
}

window.removeLoading();
