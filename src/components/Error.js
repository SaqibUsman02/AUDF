import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../CSS/Error.css"

const Error = () => {
	const Navigate = useNavigate();
  return (
    <>
      <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>We are sorry, Page not found!</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<a onClick={()=> Navigate("/login")}>Go to Login Page</a>
		</div>
	</div>
    </>
  );
};

export default Error;
