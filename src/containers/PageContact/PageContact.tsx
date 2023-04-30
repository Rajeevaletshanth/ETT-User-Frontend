import React, { FC,useState } from "react";
import { Helmet } from "react-helmet";
import SocialsList from "shared/SocialsList/SocialsList";
//import GoogleMapReact from "google-map-react";
//import LocationMarker from "components/AnyReactComponent/LocationMarker";
import { contactApi } from "services/apiServices";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import "./../../styles/style.css"

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Europe Tours & Travels, VIA ABRUZZI 94 MILAN 20131 ITALY",
  },
  {
    title: "💌 EMAIL",
    desc: "info@ettravels.com",
  },
  {
    title: "☎ PHONE",
    desc: " +39 351 609 3653",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    var data ={
      "email": email,
      "message":message,
      "name":name
    };
    const response=await contactApi(data);
    if(response.data){
      if(response.data.response==="success"){
       toast(response.data.response);
       setTimeout(() => {
        window.location.reload();
      }, 1000)
      }else{
        toast.error(response.data.message,{
          position:toast.POSITION.TOP_CENTER
        });
      }
    }
  }
  return (
    <div className="py-6">
      <ToastContainer />
      <Helmet>
        <title>CONTACT | EUROPE TOURS & TRAVELS</title>
      </Helmet>
        <h2 className="text-2xl font-semibold text-center">
            Contact Us
        </h2>
      <div className="flex bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl flex-col md:flex-row">
        <div className="lg:block lg:w-1/2 bg-cover bg-signup p-8">
          <div className="max-w-sm space-y-8 bg-neutral-100 dark:bg-neutral-900 p-8">
            {info.map((item, index) => (
              <div key={index}>
                <h3 className="uppercase font-semibold text-sm  tracking-wider">
                  {item.title}
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </span>
              </div>
            ))}
            <div>
              <h3 className="uppercase font-semibold text-sm  tracking-wider">
                🌏 SOCIALS
              </h3>
              <SocialsList className="mt-2" />
            </div>
          </div>

        </div>
        <div className="w-full p-8 lg:w-1/2">
          
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center  uppercase">
              or Contact with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form  onSubmit={(e) => {
              e.preventDefault();
              handleSubmit()
            }}>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required={true}
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required={true}
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                placeholder="Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required={true}
              >
              </textarea>
            </div>
            <div className="mt-8">
              <button className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
