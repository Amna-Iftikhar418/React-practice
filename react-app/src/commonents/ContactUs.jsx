import Navbar from "./Navbar";
import "./ContactUs.css"
import ContactForm from "./ContactForm";

export default function ContactUs(){
    return(
        <div>
           
            <div className="container-text">
                <h1><strong>CONTACT US</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque unde tempora corrupti itaque voluptates repudiandae. Expedita et quaerat totam odit ut libero dolor nesciunt. A corporis pariatur id quibusdam.</p>
            </div>
            <div>
               <ContactForm/>
                
            </div>
        </div>
    );
}