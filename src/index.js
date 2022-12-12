import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Text from "./Text";
import Footer from "./Footer";

// function Page() {
//   return (
//     <div>
//       <Header />
//       <Text />
//       <Footer />
//     </div>
//   );
// }

// ReactDOM.createRoot(<Page />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Text />
    <Footer />
  </React.StrictMode>
);
