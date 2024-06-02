import React from 'react';
import mode from './Navbar';
import textmode from './Navbar.js';

export default function footer() {
    return (
        <div className={`bg-${mode} text-${textmode}`}>

            <footer className={`text-center text-lg-start bg-${mode} text-${textmode}`}>

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className={`me-5 d-none d-lg-block bg-${mode} text-${textmode}`}>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        {/* <a href="" className="me-4 text-reset">
                        <i className="bi bi-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                        <i className="bi bi-google"></i>
                        </a> */}
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className={`container text-center text-md-start mt-5 bg-${mode} text-${textmode}`}>
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className={`text-uppercase fw-bold mb-4 bg-${mode} text-${textmode}`}>
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 bg-${mode} text-${textmode}`}>

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>React</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Laravel</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className={`text-uppercase fw-bold mb-4 bg-${mode} text-${textmode}`}>
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className={`text-reset bg-${mode} text-${textmode}`}>Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className={`fas fa-phone me-3 bg-${mode} text-${textmode}`}></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>

        </div>
    )
}

// style={{"background-color: rgba(0, 0, 0, 0.05)" }}