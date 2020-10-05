import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App(){
  return (
    <HashRouter>
      {/* 꼭 path와 component의 이름이 같을 필요는 없음 */}
      {/* 
        React의 Route는 같은 경로에 있는 모든 것을 rendering하기 때문에 exact={ true } 옵션이 없는 상태에서
        /about 경로로 이동하면 '/' 와 '/about' 둘 다 rendering되기 때문에 두개의 페이지가 곂쳐서 보이게 된다
        따라서 exact={ true } 옵션을 추가 하는데, 이 예시에서 이것은 정확히 '/'일 때만 rendering 하겠다 라는걸 명시해주는 것 
      */}
      <Route path="/" exact={ true } component={ Home } />
      <Route path="/about" component={ About } />
    </HashRouter>
  );
}

export default App;