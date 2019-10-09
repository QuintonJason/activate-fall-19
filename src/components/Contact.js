import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="field half first">
                        <label className="t-hidden" htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="field half">
                        <label className="t-hidden" htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label className="t-hidden" htmlFor="message">Talk Title</label>
                        <input type="text" name="title" id="title" placeholder="Talk Title" />
                    </div>
                    <input className="btn" type="submit" value="Send Message" />
                </form>
            </section>
        </div>
    </section>
)

export default Contact;