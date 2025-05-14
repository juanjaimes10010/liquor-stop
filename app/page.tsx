import Image from "next/image";
import '@/app/styles/style.css';

export default function Home() {
  return <>
    <header>
        <div className="container">
            <div>
                <h1 id="logo">Liquor Stop</h1>
            </div>
            <a id="phone" href="tel:+1-123-456-7890">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
            </a>    
            <nav>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about-1">About</a></li>
                    <li><a href="#inventory">Inventory</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
          </div>
    </header>
    <main>
        <section  id="hero">
            <div className="container text-center">
                <h1>Welcome to Liquor Stop</h1>
                <p>
                    Your one-stop shop for Spirits, Ready-to-Drink Cocktails, Fine Wines, and all the classNameics. 
                </p>
                <p>
                    Feeling lucky? Hit up our Gaming Room or grab your chance at millions with Mega Millions and Powerball tickets!
                </p>
                <a href="#inventory" className="btn bg-sky text-white">
                    Explore Now
                </a>
            </div>
        </section>
        <section id="about-1">
            <div className="container split">
                <div>
                        
                    <h2 className="text-center text-white">Our Store</h2>
                    <p className="text-white">
                        Your one-stop shop for all your liquor needs! We offer a wide selection of spirits, wines, and ready-to-drink cocktails. 
                        Whether you're looking for a classNameic whiskey, a refreshing vodka, or a fine wine, we have it all. 
                        Plus, don't forget to check out our gaming room and grab your chance at millions with Mega Millions and Powerball tickets!
                    </p>
                </div>
                <div>
                    <Image width="200" height="200" src="/images/home.JPG" alt="Hard Liquor" />
                </div>
            </div>  
        </section>
        <section id="about-2">
            <div className="container">
                <div className="split">
                    <div>
                        <Image width="200" height="200" src="/images/video-games.jpg" alt="Hard Liquor" />
                    </div>
                    <div>
                            
                        <h2 className="text-center">Feeling Lucky?</h2>
                        <p>
                            Don't forget to check out our gaming room and grab your chance at millions with Mega Millions and Powerball tickets!
                        </p>
                    </div>
                </div>
                <div id="video-games">
                    <Image width="200" height="200" src="/images/gold-rush.jpeg" alt="" /><Image width="200" height="200" src="/images/video-games.jpg" alt="" /><Image width="200" height="200"  src="/images/gold-rush.jpeg" alt="" /><Image width="200" height="200" src="/images/video-games.jpg" alt="" />
                </div>
            </div>  
        </section>
        <section id="inventory">
            <div className="container">
                <section>
                    <h2>Liquor</h2>
                    <article>
                        <h3>Spirits</h3>
                        <div className="scroll">
                                
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            
                        </div>
                    </article>
                    <article>
                        <h3>Wines & Champagne</h3>
                        <div className="scroll">
                                
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Ready To Drink</h2>
                    <article>
                        <h3>Single Server</h3>
                        <div className="scroll">
                                
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            
                        </div>
                    </article>
                    <article>
                        <h3>Bottles & Packs</h3>
                        <div className="scroll">
                                
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Beverages</h2>
                    <article>
                        <h3>Mixers</h3>
                        <div className="scroll">

                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-2.jpeg" alt="Hard Liquor" />
                            <Image width="200" height="200" src="/images/hard-liquor-1.jpeg" alt="Hard Liquor" />
                        
                        </div>
                    </article>
                    <article>
                        <h3>Juices, Sodas & Water</h3>
                        <div className="scroll">

                            <Image width="200" height="200" src="/images/beverage-1.JPG" alt="" />
                            <Image width="200" height="200" src="/images/beverage-2.JPG" alt="" />
                            <Image width="200" height="200" src="/images/beverage-3.JPG" alt="" />

                        </div>
                    </article>
                </section>
                <section>
                    <h2>Miscellanious</h2>
                    <article>
                        <h3>Apparel</h3>
                        <div className="scroll">

                            <Image width="200" height="200" src="/images/apparel-1.JPG" alt="" />
                            <Image width="200" height="200" src="/images/apparel-2.JPG" alt="" />
                            <Image width="200" height="200" src="/images/apparel-3.JPG" alt="" />
                            <Image width="200" height="200" src="/images/apparel-4.JPG" alt="" />
                            <Image width="200" height="200" src="/images/apparel-5.JPG" alt="" />

                        </div>
                    </article>
                </section>
            </div>
        </section>
    </main>
    <footer id="contact">
        <div className="container">
            <div className="split">
                <div>
                    <h2>Sip and Relax</h2>
                    <p> 
                        Visit us at our store for a wide selection of spirits, wines, and ready-to-drink cocktails. 
                        Don't forget to check out our gaming room and grab lottery tickets!
                    </p>
                </div>
                <div>
                    <iframe 
                        className="w-full h-96"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5950.430309642306!2d-87.81517262481127!3d41.78057657125262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e36fe3a09c8d9%3A0xc2918a94e8700368!2sLiquor%20Stop!5e0!3m2!1sen!2sus!4v1745820096200!5m2!1sen!2sus"  
                        loading="lazy" 
                    ></iframe>
                </div>
            </div>
            <p id="copyright" className="text-center">
                &copy; 2023 Liquor Stop. All rights reserved.
            </p>  
        </div>
    </footer>    

  </>
}
