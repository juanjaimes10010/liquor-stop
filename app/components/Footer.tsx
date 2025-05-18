import '@/app/styles/globals.css';
import '@/app/styles/footer.css';

export default function Footer() {
    return (
        <footer id="contact">
            <div className="container">

                <div className="contact">
                    <div className="contact__content">
                        <h2>Sip and Relax</h2>
                        <p> 
                            Visit us at our store for a wide selection of spirits, wines, and ready-to-drink cocktails. 
                            Don't forget to check out our gaming room and grab lottery tickets!
                        </p>
                    </div>
                    <div className="contact__image">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5950.430309642306!2d-87.81517262481127!3d41.78057657125262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e36fe3a09c8d9%3A0xc2918a94e8700368!2sLiquor%20Stop!5e0!3m2!1sen!2sus!4v174581200961200!5m2!1sen!2sus"  
                            loading="lazy" 
                        ></iframe>
                    </div>
                </div>

                <p id="copyright">
                    &copy; 2023 Liquor Stop. All rights reserved.
                </p>  
            </div>
        </footer>   
    ) 
}