import React, { useState } from "react";
import useGetRequest from "./useGetRequest";

const Showcase = ({ id }) => {
	
	const {
		data: article,
	
	} = useGetRequest("http://localhost:4000/articles/" + id);

	return (
		<section class="showcase">
            <span class="topic-showcase">Cars</span>
            
            <h1>An Article About Technology</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                        recusandae consequatur similique doloribus. Corporis, et a ullam
                        praesentium facere veritatis veniam? Aperiam ipsa totam veniam,
                        atque illo sed suscipit accusamus.
                        </p> 
            <button class="btn">Learn More</button> 
        </section>
	);
};

export default Showcase;