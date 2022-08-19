import React from 'react';

import './Blog.css';

const Blog = () => {
    return (
        <div className='content-box'>

<div className='contents-box text-center mt-6'>
              <h2 className='hadding  mt-5'> Welcome to my Blog</h2>
             <div className='border-hadding'></div>
        </div>
 
            

          <div className='text-content m-3 mb-4'>
              <h1>1 Difference between authorization and authentication</h1>
          <p>
            In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.
            </p>
            <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
          </div>
          <div className='text-content m-3 mt-5 mb-4'>
              <h3>2 Why are you using firebase</h3>
          <p>
          Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.

Tired of writing boring code for your backend, or can't even write it at all? Try Google Firebase. So what's Google Firebase, and why should you build your app around it?
            </p>
            <h5> What other options do you have to implement authentication?</h5>
           <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google</p>
          </div>
          <div className='text-content m-3 mt-5 mb-4'>
              <h3>3 What other services does firebase provide other than authentication</h3>
          <p>
          There are many services which Firebase provides, Most useful of them are:   </p>
            <h5> What other options do you have to implement authentication?</h5>
           <p>Many third-party service providers can help you in growing your business, by either providing specific services like Notifications by Twillio or by providing a vast range of services like AWS, Google Cloud Platform, which includes hosting, storage, authentication and what not. In this article, we are going to describe very useful Firebase services which are dependent on Google Cloud Platform. So to understand the Firebase services, we have to know about the Firebase.</p>
          </div>
        </div>
    );
};

export default Blog;