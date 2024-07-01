
import React, { useState } from "react";
import Input from "../components/Input";
import axios from 'axios';

const Send = () => {
  const [emails, setEmails] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmails = async (event) => {
    event.preventDefault();
    const emailList = emails.split(',').filter(email => email.trim() !== '');
    const payload = {
      emails: emailList.join(','),
      subject: subject,
      message: message
    };
    console.log('payload:', payload);

    try {
      const response = await axios.post('', payload);
      console.log('response:', response);
      alert('Email sent successfully');
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      alert('Error sending email');
    }
  };

  const handleEmailsChange = (event) => {
    console.log('emails:', event.target.value);
    setEmails(event.target.value);
  };

  const handleSubjectChange = (event) => {
    console.log('subject:', event.target.value);
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    console.log('message:', event.target.value);
    setMessage(event.target.value);
  };

  return (
    <section className="text-gray-400 body-font bg-gray-900 min-h-screen">
      <div className="container px-10 px-5 py-24 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl font-bold mb-6">Send Bulk Emails</h1>
        <form onSubmit={sendEmails} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
          <Input placeholder="Emails (separated by commas)" name="emails" type="text" className="text-white-600 text-black" value={emails} onChange={handleEmailsChange} />
          <Input placeholder="Subject" name="subject" type="text" className="text-white-600 text-black" value={subject} onChange={handleSubjectChange} />
          <textarea placeholder="Message" name="message" className="border border-grey-400 p-2 mb-2 rounded-md w-full h-32 text-black" value={message} onChange={handleMessageChange} />
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Emails
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Send;

import React, { useState } from "react";
import Input from "../components/Input";
// global.Buffer = global.Buffer || require('buffer').Buffer;
// import { SES } from 'aws-sdk/clients/ses';
const Send = () => {
  const [emails, setEmails] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmails = async (event) => {
    event.preventDefault();
    const ses = new SES({
      accessKeyId: '', // replace with your IAM user's access key
      secretAccessKey: '' // replace with your IAM user's secret key
    });
    const emailList = emails.split(',');
    const params = {
      Destination: {
        ToAddresses: emailList
      },
      Message: {
        Body: {
          Html: {
            Data: message
          }
        },
        Subject: {
          Data: subject
        }
      },
      Source: '' // replace with your email address
    };

    try {
      const response = await ses.sendEmail(params).promise();
      console.log(response);
      alert('Email sent successfully');
    } catch (error) {
      console.error(`Error sending email: ${error}`);
      alert('Error sending email');
    }
  };

  return (
    <section className="text-gray-400 body-font bg-gray-900 min-h-screen">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-bold mb-6">Send Bulk Emails</h1>
        <form onSubmit={sendEmails} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism mx-auto">
          <Input placeholder="Emails (separated by commas)" name="emails" type="text" className="text-white-600" value={emails} onChange={(event) => setEmails(event.target.value)} />
          <Input placeholder="Subject" name="subject" type="text" className="text-white-600" value={subject} onChange={(event) => setSubject(event.target.value)} />
          <textarea placeholder="Message" name="message" className="border border-grey-400 p-2 mb-2 rounded-md w-full h-32" value={message} onChange={(event) => setMessage(event.target.value)} />
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send Emails
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Send;
