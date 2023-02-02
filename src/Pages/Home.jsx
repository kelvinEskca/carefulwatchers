import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Home = () => {
    const [faq,setFaq] = useState(0);
    const accordion = (id) =>{
        setFaq(faq === id ? 0 : id);
    }
    return (
        <>
            <Header/>
            <main className="main">
                <section className="section hero">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <span>Waitlist Sign Up</span>
                                <h1 className="heading">Implementing a Web Security Solutions for both Local and international Customers.</h1>
                                <p className="paragraph">Careful Watchers is a Web Penetration Testing Company that helps you identify and fix the latest security issues keeping your web application safe using a combination of manual and automated penetration Testing.
                                </p>
                                
                                <Link to='/register'><button>Join Waitlist</button></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section update">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <span>Subject: Bug Report !</span>
                                <div className="details">
                                    <div className="top">
                                        <div className="circle"><h3 className="heading">C</h3></div>
                                        <div className="text">
                                            <h3 className="heading">Sender : Careful Watchers</h3>
                                            <p className="paragraph">To: {`<vulnerable@example.com>`}</p>
                                        </div>
                                    </div>

                                    <div className="colored-bg">
                                        <h3 className="heading">Hi vulnerable@example.com Team,</h3>
                                        <p className="paragraph">We are Careful Watchers, a group of  cybersecurity professionals that help organizations identify vulnerabilities and do well by reporting them so they could be fix.</p>
                                        <span><p className="paragraph">In our recent findings, a critical vulnerability was identified on your domain (website)</p></span>
                                    </div>

                                    <p className="paragraph">This vulnerability can give room for unauthorized sensitive data access if exploited by malicious actors, and other secondary attacks.</p>
                                    <p className="paragraph">We will be glad to share the detail of our findings with you and your team.</p>

                                    <p className="paragraph">We await to hear from you as soon as possible.</p>
                                    <p className="paragraph">Thanks,</p>
                                    <p className="paragraph">CarefulWatchers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section features">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <img src="../images/problem.png" alt="problem" />
                                <span>Problem</span>
                                <h3 className="sub-heading">Web app monitoring and audit services are highly required due to security concerns raised by the rising popularity of websites with web applications. The likelihood of having harmful information increases as web applications are more easily created and shared, Careful Watchers offers a realtime web security solutions as listed:</h3>
                            </div>

                            <div className="box">
                                <img src="../images/solution.png" alt="solution" />
                                <span>Our Solution</span>
                                <h3 className="sub-heading"><b>Vulnerability scanning and Assessment</b>, <b>Hot Based Scanning</b>, <b>Database Scanning</b>, <b>Full Domain Directory Enumeration.</b>,<b>Cloud Hosting Vulnerability Enumeration.</b>, <b>Remediation, Mitigation Of Threats</b>,<b>and Removal Of Virus/Malware and more</b></h3>
                            </div>
                        </div>
                        
                    </div>
                </section>

                <section className="section faq">
                    <div className="wrapper">
                        <h3 className="sub-heading">Frequently Asked Questions (FAQ) </h3>
                        <div className="boxes">
                            <div className={`box ${faq === 1 ? "drop" : ""}`} onClick={()=>{accordion(1)}}>
                                <div className={`top`}>
                                    <h3 className="heading">Who are we ? ( Careful Watchers )</h3>
                                    <h3 className="heading">{faq === 1 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">Careful Watchers is a Web Penetration Testing Company that helps you identify and fix the latest security issues, keeping your web application safe using a combination of manual and automated penetration Testing.</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 2 ? "drop" : ""}`} onClick={()=>{accordion(2)}}>
                                <div className={`top`}>
                                    <h3 className="heading">Why is there a Careful Watchers  Wait-list?</h3>
                                    <h3 className="heading">{faq === 2 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">A website waitlist can be important for several reasons. First, it allows businesses or organizations to gauge interest in a product or service before it is officially released. This can help them plan for inventory and resources needed. Additionally, a waitlist can create a sense of exclusivity and anticipation, which can drive demand.</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 3 ? "drop" : ""}`} onClick={()=>{accordion(3)}}>
                                <div className={`top`}>
                                    <h3 className="heading">What is a penetration testing?</h3>
                                    <h3 className="heading">{faq === 3 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">A question not enough people ask is this; Carefulwatchers assume that, many people often neglect this due to the lack of awareness. </p>

                                    <p className="paragraph">A penetration test is a security assessment that simulates an attack by a malicious party on a network or application in order to identify security flaws. This test is coordinated ahead of time and executed with an attempt to avoid damaging any system. At the end of the test, your pen testing firm like Carefulwatchers will provide you with a report that includes found issues and weaknesses along with suggestions for how to remediate them</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 4 ? "drop" : ""}`}  onClick={()=>{accordion(4)}}>
                                <div className={`top`}>
                                    <h3 className="heading">Why do I need a (Web) Penetration Test? </h3>
                                    <h3 className="heading">{faq === 4 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">A web penetration Testing, also known as a web pen test, is a security assessment standard which Careful Watchers uses various techniques to test the security of a website or web application. This includes identifying vulnerabilities, such as SQL injection or cross-site scripting (XSS) attacks, and then attempting to exploit them to gain unauthorized access to sensitive data or disrupt the normal functioning of the website. </p>

                                    <p className="paragraph">With our professional web pen testers, organizations can proactively identify and address security weaknesses before they can be exploited by malicious actors. This can help to protect against data breaches, loss of reputation and financial losses.</p>

                                    <p className="paragraph">The fact is, it’s only a hacker that can stop its fellow hacker (s) , i.e Only a group of professional hackers like CarefulWatchers can really evaluate what can be broken, what harm can be done, and what can be done about it.</p>

                                    <p className="paragraph">So as your pentest firm, Carefulwatchers will perform checks for all the hidden and known vulnerabilities and we will guide you fully on how to remediate them completely .
</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 5 ? "drop" : ""}`}  onClick={()=>{accordion(5)}}>
                                <div className={`top`}>
                                    <h3 className="heading">How much does a Web Penetration Test cost? </h3>
                                    <h3 className="heading">{faq === 5 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">The cost of a web vulnerability assessment varies depending on several factors, including the scope of the test, the size and complexity of the website or web application being tested, and the testers' experience and qualifications. A web penetration test can cost from around a five thousand dollars to tens of thousands of dollars. It's always a good idea to get a quote from a reputable web penetration testing company.  </p>

                                    <p className="paragraph">We also offer discounts for multiple-year contracts, ensuring your organization both has a consistent pen testing partner and can stretch security budgets further.</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 6 ? "drop" : ""}`} onClick={()=>{accordion(6)}}>
                                <div className={`top`}>
                                    <h3 className="heading">How long does a Penetration Testing take? </h3>
                                    <h3 className="heading">{faq === 6 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">The duration of a web penetration testing project can vary depending on a number of factors, such as the size and complexity of the targeted application, the scope of the testing, and the availability of resources.  </p>

                                    <p className="paragraph">Penetration testing duration actually depends on the target (s) and since it involves thorough and complete assessment, it is not suited for short, quick response.</p>

                                    <p className="paragraph">But Careful Watchers tend to see a project starting immediately after the agreement has been reached and about 2 weeks, we would have been sending the initial reports  but some projects  can also go multiple weeks or even months -depending on the size of the applications, network IP addresses, and all other in-scope assets (targets).</p>

                                    <p className="paragraph">Our team works diligently to match the scope details with the security needs of your organization and our response time isn’t too long.</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 7 ? "drop" : ""}`} onClick={()=>{accordion(7)}}>
                                <div className={`top`} >
                                    <h3 className="heading">When do I need a  Pentest? </h3>
                                    <h3 className="heading">{faq === 7 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">Everybody wants to keep their businesses running and maintain a good reputation with their customers. So, Partnering with a qualified penetration testing firm like CarefulWatchers  that can work from the mindset of an attacker is the best way to truly improve the security of your systems.   </p>

                                    <p className="paragraph">It’s a good idea to periodically test any system that is handling sensitive data with a penetration test. And if you’re changing the software you generate or write by adding new features, refactoring or changing code, or upgrading to new versions, it may be a good time to do an application penetration test.</p>

                                    <p className="paragraph">The need to pentest is an obligatory and not even optional, a pentest must be carry out before the launch of a web application</p>

                                    <p className="paragraph">However, for already launched and existing organization, it’s never too late to subscribe to a penetration testing” service and the perfect time to do it is Now.</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 8 ? "drop" : ""}`} onClick={()=>{accordion(8)}}>
                                <div className={`top`} >
                                    <h3 className="heading">How soon can you start on my project? </h3>
                                    <h3 className="heading">{faq === 8 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">Almost immediately, after the mutual agreement is reached!</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 9 ? "drop" : ""}`} onClick={()=>{accordion(9)}}>
                                <div className={`top`} >
                                    <h3 className="heading">Does CarefulWatchers Offer Automated Or Manual Penetration Testing?</h3>
                                    <h3 className="heading">{faq === 9 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">Careful Watchers  is a Professional Web Penetration Testing firm with highly skilled and experience professional that works mostly with manual techniques. Beware of a pentest firm that only uses just automated tools. They probably aren’t doing a thorough job and will likely be leaving your organization vulnerable to attack .</p>
                                </div>
                            </div>

                            <div className={`box ${faq === 10 ? "drop" : ""}`} onClick={()=>{accordion(10)}}>
                                <div className={`top`}>
                                    <h3 className="heading">What do we need to provide before you can carry out a Pentest on my project?</h3>
                                    <h3 className="heading">{faq === 10 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">First, we try to familiarize ourselves with your company & the scope of work so that we’re able to create an accurate proposal. We intentionally gather this information so that we will not come back requesting for more testing time (and additional costs.) The more information you’re willing to share, the better assessment we can provide.</p>

                                    <p className="paragraph">And then we arrange a conversation to reach a RoE </p>
                                </div>
                            </div>

                            <div className={`box ${faq === 11 ? "drop" : ""}`} onClick={()=>{accordion(11)}}>
                                <div className={`top`}>
                                    <h3 className="heading">Does CarefulWatchers only offer Web Penetration Testing service?  </h3>
                                    <h3 className="heading">{faq === 11 ? ("-") : ("+")}</h3>
                                </div>

                                <div className="bottom">
                                    <p className="paragraph">CarefulWatchers is focused mainly on web penetration testing but adequately renders Cyber Security services such as Security Consulting Services, Web Security Policy Writing, Third-Party Risk Assessment, Employee Awareness Training etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section hero end">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <span>Waitlist Sign Up</span>
                                <h1 className="heading">We have got you covered!</h1>
                                <p className="paragraph">We are in business to design Web Security solutions for ourvarious clients - domestic and corporate. Asides from ourccore services, we also offer consultancy, training and technical support to our numerous clients</p>
                                <Link to='/register'><button>Join Waitlist</button></Link>
                            </div>

                            <div className="box">
                                <h3 className="heading">Thank you for your interest in our penetration testing services and for joining our waiting list!</h3>
                                <p className="paragraph"> We're working hard to optimize our services so that we can better serve our customers, and we're hoping for long-term success.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /> 
        </>
        
        
    );
}
 
export default Home;