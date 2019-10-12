import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="contact">
                <h2 className="t-section-header contact__headline">Submit a talk</h2>
                <p className="t-body contact__description">Share the latest technology, product, or discipline you have been working with. Each talk is 10 minutes including Q&A.</p>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="contact__form-field half first">
                        <label className="t-hidden" htmlFor="name">Name</label>
                        <input className="contact__form-input" type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="contact__form-field half">
                        <label className="t-hidden" htmlFor="email">Email</label>
                        <input className="contact__form-input" type="text" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="contact__form-field">
                        <label className="t-hidden" htmlFor="message">Talk Title</label>
                        <input className="contact__form-input" type="text" name="title" id="title" placeholder="Talk Title" />
                    </div>
                    <input className="btn contact__button" type="submit" value="Send" />
                </form>
            </section>
        </div>
    </section>
)

export default Contact;