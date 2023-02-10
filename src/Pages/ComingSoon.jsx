import React from "react";
import Header from "../Components/Header";
const Home = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <section className="section hero">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <span>Coming Soon</span>
                                <h1 className="heading">Implementing a Web Security Solutions for both Local and international Customers.</h1>
                                <p className="paragraph">Careful Watchers is a Web Penetration Testing Company that helps you identify and fix the latest security issues keeping your web application safe using a combination of manual and automated penetration Testing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>               
            </main>
        </>
    );
}
 
export default Home;