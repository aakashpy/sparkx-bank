import React from 'react'
import './HomePage.css'

const HomePage = (props) => {
    return (
        <>
            {props.navbar}
            <div className="container" >
                <img src="https://cdn.cdnparenting.com/articles/2019/04/14175650/278188052-H.jpg" class="img-fluid" alt="image" id="hero"/>
                <h1 id="abs">Welcome to The SPARKX Bank</h1>
            </div>
            <div className="container"id="main">
                <div><img id="img" src="https://cheapsslsecurity.com/blog/wp-content/uploads/2017/07/drupal-security.png" class="img-fluid img1"alt="security" /><h6 id="text1">Highly Secure</h6></div>
                <div><img id="img" src="https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?size=626&ext=jpg" class="img-fluid img2"alt="contact" /><h6 id="text2">24/7 Service</h6></div>
                <div><img id="img" src="https://images.moneycontrol.com/static-mcnews/2020/06/Indian-rupee-banking.jpg" class="img-fluid img3"alt="interest" /><h6 id="text3">High Interest</h6></div>
                <div><img id="img" src="https://media.istockphoto.com/photos/family-financial-management-mortgage-and-payday-loan-or-cash-advance-picture-id1058480452?k=20&m=1058480452&s=612x612&w=0&h=iJnPMJFY3VKvGy9LfB61o8gVnxk9ewS_9Ig6O-WNV18="
                class="img-fluid img4" alt="loans" /><h6 id="text4">Easy Loans</h6></div>
            </div>
            <div className="account mt-4 text5">
                <h4>Join to the SPARKX family by opening an account</h4>
                <button type="button" className="btn btn-success">Open Account</button>
            </div>
            {props.footer}
        </>
    )
}

export default HomePage