import React from 'react';
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Legals</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Refund Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Terms</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">About</h1>
                            <p>We have been on a journey of trust for 10 years. Here, you will find the highest quality laptops, PCs, phones, earphones, and many other new products.</p>
                            <img className="w-75" src="https://as1.ftcdn.net/jpg/05/92/23/38/1000_F_592233884_p9KK1cRJlLYfILVLbfT7ZgU0o8dUqZFx.jpg"  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <p className="text-white bodySmal">All Rights Reserved </p>
            </div>
        </div>

                            );
};

export default Footer;