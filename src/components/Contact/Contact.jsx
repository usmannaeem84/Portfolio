import React from 'react'
import "./contact.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import gmail_icon from "../../assets/gmail.png"
import location_icon from "../../assets/location_icon.svg"
import LinkedIn_icon from "../../assets/LinkedIn.png"
import whatsapp_icon from "../../assets/whatsapp.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'



function Contact() {

const Base_Url="https://www.linkedin.com/in/usman-naeem-101614289/"

    const onSubmit = async (event) => {
        try {
            event.preventDefault();

            // Get form data
            const formData = new FormData(event.target);

            // Append access key
            formData.append("access_key", "b8199e00-cca6-4088-9cd0-4c225171e399");

            // Convert FormData to JSON
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });
            const json = JSON.stringify(object);

            // Send form data to Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: json
            });

            // Parse response
            const responseData = await response.json();

            // Check if submission was successful
            if (responseData.success) {
                console.log("Success", responseData);
            } else {
                console.error("Error:", responseData.message);
                alert("Failed to submit the form. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };




    return (
        <div id='Contact' className='contact'>

            <div className="contactTitle">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contactMain">


                <div className="left">

                    <h1>Let's talk</h1>
                    <p>I'am currently available to take new projects , So feel free to send message about anything that you want me to work on . you can contact anytime</p>

                    <div className="contactInfo">
                        <div className="info">
                            <img className='gmail' src={gmail_icon} alt="" />
                            <p>usman.naeem12257@gmail.com</p>
                        </div>
                        <div className="info">
                            <img className='whatsapp' src={whatsapp_icon} alt="" />
                            <p>03132444662</p>
                        </div>
                        <div className="info">
                            <img src={location_icon} alt="" />
                            <p>Karachi, Pakistan</p>
                        </div>
                        <div className="info">
                            <a   href="https://www.linkedin.com/in/usman-naeem-101614289/" target='_blank'>
                            <img className='whatsapp' src={LinkedIn_icon} alt="" />
                            <p>Usman Naeem</p>
                            </a>
                    </div>


                </div>

            </div >


            <form onSubmit={onSubmit} className="right">
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Enter your name' />
                <label htmlFor="">Email</label>
                <input type="text" name='email' placeholder='Enter your e-mail' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" placeholder='Enter your message' ></textarea>
                <button >Submit</button>

            </form>

        </div >

</div >

    )
}

export default Contact
