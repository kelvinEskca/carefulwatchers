import Header from "../Components/Header";

const Register = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <section className="section waitlist">
                    <div className="wrapper">
                        <div className="boxes">
                            <div className="box">
                                <h3 className="heading">Join the waitlist</h3>
                                <p className="paragraph">See how carefulwatchers can transform your organization's security-awareness.</p>
                            </div>

                            <div className="box">
                                <form action="https://formsubmit.co/support@carefulwatchers.co.uk" method="POST" className="form">
                                    <div className="label-row">
                                        <label htmlFor="#">
                                            <input type="text" placeholder="First Name" />
                                        </label>

                                        <label htmlFor="#">
                                            <input type="text" placeholder="Last Name" />
                                        </label>
                                    </div>

                                    <label htmlFor="#"><input type="email" placeholder="Email Address" /></label>

                                    <label htmlFor="#"><input type="text" placeholder="Company" /></label>

                                    <label htmlFor="#"><button>Join The Waitlist</button></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
 
export default Register;