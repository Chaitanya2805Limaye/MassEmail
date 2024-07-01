<<<<<<< HEAD
import React, { useContext } from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Mass Emailing
        <br class="hidden lg:inline-block" />using lambda function
      </h1>
      <p class="mb-8 leading-relaxed text-2xl">Our Lambda function project enables you to reach a mass audience quickly and easily. With our scalable and reliable infrastructure, we can handle any amount of traffic and deliver your message to thousands or even millions of people. Whether you need to send out newsletters, promotional emails, or event invitations, our Lambda function makes it easy to reach your target audience and achieve your goals.</p>
      <div class="flex justify-center">
      <Link to="/send">  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button> </Link>
        {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Dashboard</button> */}
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://www.linkpicture.com/q/email_35.png" />
    </div>
  </div>
</section>
    )
}
=======
import React, { useContext } from "react";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font min-h-screen">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Reaching Mass
        <br class="hidden lg:inline-block" />using lambda function
      </h1>
      <p class="mb-8 leading-relaxed">Our Lambda function project enables you to reach a mass audience quickly and easily. With our scalable and reliable infrastructure, we can handle any amount of traffic and deliver your message to thousands or even millions of people. Whether you need to send out newsletters, promotional emails, or event invitations, our Lambda function makes it easy to reach your target audience and achieve your goals.</p>
      <div class="flex justify-center">
      <Link to="/">  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button> </Link>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Dashboard</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img class="object-cover object-center rounded" alt="hero" src="" /> */}
    </div>
  </div>
</section>
    )
}
>>>>>>> 727d961793c51216cbd62d9ce315dcf643d59d09
export default Welcome;