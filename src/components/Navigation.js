import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            {/* html의 태그의 경우 새로고침을 하게 되어 React도 다시 시작하게 만들기 때문에 React의 Link를 사용 */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;