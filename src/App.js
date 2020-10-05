import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App(){
  return (
    <HashRouter>
      {/* 꼭 path와 component의 이름이 같을 필요는 없음 */}
      <Route path="/about" component={ About } />
    </HashRouter>
  );
}

export default App;