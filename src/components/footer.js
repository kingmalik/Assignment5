import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Footer = ({ id }) => {
	
	const {
		data: article,
	
	} = useGetRequest("http://localhost:4000/articles/" + id);

	return (
		<footer class="footer">
    <div>
        <img class="img" src="images/itachi.jpeg" alt=""></img>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
                impedit libero, beatae animi provident nesciunt molestias ipsam
                nemo ad.
            </p>
    </div>

    <div class="second">
        <h3>Sign-up for our Newsletter</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
            impedit libero, beatae animi provident nesciunt molestias ipsam
            nemo ad!
        </p>
        <form action="type"><input type="text"></input><button>Subscribe</button></form>               
    </div>
    
    <div class="third">
        <h3>Connect with US</h3>
             <li>Contact</li>
             <li>Careers</li>
             <li>Subscriptions</li>
             <li>Help</li>
    </div>
</footer>
	);
};

export default Footer;