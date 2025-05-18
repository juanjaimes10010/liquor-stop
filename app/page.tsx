import Image from "next/image";

import Header from '@/app/components/Header';
import Footer from "@/app/components/Footer";

import CardScroll from "./admin/components/CardScroll";

import '@/app/styles/globals.css';
import '@/app/styles/style.css';

import categories from '@/app/data/data.json'
import { Inventory } from "@/app/types/inventory";



export default function Home() {
    const data: Inventory = categories;
    return <>
    <Header />
    <main>
        <section  id="hero">
            <div className="container">
                <h1>Welcome to Liquor Stop</h1>

                <p>
                    Your one-stop shop for Spirits, Ready-to-Drink Cocktails, Fine Wines, and all the classNameics. 
                </p>

                <p>
                    Feeling lucky? Hit up our Gaming Room or grab your chance at millions with Mega Millions and Powerball tickets!
                </p>

                <a href="#inventory">
                    Explore Now
                </a>
            </div>
        </section>

        <section id="about-1">
            <div className="container">
                <div className="about">
                    <div className="about__content">    
                        <h2>Our Store</h2>
                        <p>
                            Your one-stop shop for all your liquor needs! We offer a wide selection of spirits, wines, and ready-to-drink cocktails. 
                            Whether you're looking for a classNameic whiskey, a refreshing vodka, or a fine wine, we have it all. 
                            Plus, don't forget to check out our gaming room and grab your chance at millions with Mega Millions and Powerball tickets!
                        </p>
                    </div>
                    <div className="about__image">
                        <Image width="1200" height="1200" src="/images/home.JPG" alt="Hard Liquor" />
                    </div>
                </div>
            </div>
        </section>

        <section id="about-2">
            <div className="container">
                <div className="about">
                    <div className="about__image">
                        <Image width="1200" height="1200" src="/images/video-games.jpg" alt="Hard Liquor" />
                    </div>
                    <div className="about__content">
                        <h2 className="glow">Feeling Lucky?</h2>
                        <p>
                            Don't forget to check out our gaming room and grab your chance at millions with Mega Millions and Powerball tickets!
                        </p>
                    </div>
                </div>

                <div id="videoGames">
                    <Image width="1200" height="1200" src="/images/gold-rush.jpeg" alt="" /><Image width="1200" height="1200" src="/images/video-games.jpg" alt="" /><Image width="1200" height="1200"  src="/images/gold-rush.jpeg" alt="" /><Image width="1200" height="1200" src="/images/video-games.jpg" alt="" />
                </div>

            </div>  
        </section>


        <section id="inventory">
            <div className="container">

                {data.map( category => {
                    return <section key={category.order}>
                        <h2>{category.name}</h2>
                        {category.subcategories.map( subcategory => {
                            return <article>
                                <h3>{subcategory.name}</h3>
                                <CardScroll>
                                    {subcategory.images.map( image => {
                                        return <Image width={1000} height={1000} src={image.src} alt="images" />
                                    })}
                                </CardScroll>
                            </article>
                        })}
                    </section>
                })}
            </div>
        </section>
    </main>
    <Footer />
  </>
}
