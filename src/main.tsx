import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.jsx"; // Adjust the import path as necessary

// Styles
import "@styles/tailwind.css";
import "nprogress/nprogress.css";
// import "antd/dist/reset.css";

import NProgressSuspense from "@components/NProgressSuspense";

const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // {/* <React.StrictMode> */}
  <Suspense fallback={<NProgressSuspense />}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Suspense>
  // {/* </React.StrictMode> */}
);
