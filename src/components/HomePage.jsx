import React from "react";
import HeroBg from "../assets/top.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUser,
  faArrowRight,
  faTruckFast,
  faWallet,
  faPercent,
  faHeadphones,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import comp1 from "../assets/company1.png";
import comp2 from "../assets/company2.png";
import comp3 from "../assets/company3.png";
import brnifitImg from "../assets/benifit.png";
import starsImg from "../assets/stars.png";
import ForeverImg from "../assets/forever.png";
import groverImg from "../assets/grover.png";
import skinImg from "../assets/skin.png";
import closeImg from "../assets/close.png";
import ProductList from "./ProductList";
import BottomImg from "../assets/bottom.png";

export default function HomePage() {
  return (
    <div>
      <div className="bg-green-50">
        <div className="hero w-999 relative m-auto h-666  flex items-center pt-10">
          <div className="left w-3/6 pr-16">
            <h1 className="text-7xl py-6  font-semibold">
              We're Serius For Food
            </h1>
            <p>
              Dolore ad reiciendis magnam voluptas velit consectetur, <br />
              quasi explicabo rerum repellat delectus.
            </p>
            <button className="my-5 py-4 px-8 bg-green-400 ">
              Get Started{" "}
              <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
            </button>
          </div>
          <div className="right relative w-3/6 pt-28 flex justify-center items-center">
            <div className="">
              <img className="w-99  mt-24" src={HeroBg} alt="" />
            </div>
            <div>
              <div className="rating bg-white py-3 px-3 rounded-full absolute left-0 top-2/3 w-56 text-center">
                <span>
                  5 Star Rating{" "}
                  <FontAwesomeIcon className="text-green-400" icon={faStar} />
                  <FontAwesomeIcon className="text-green-400" icon={faStar} />
                  <FontAwesomeIcon className="text-green-400" icon={faStar} />
                  <FontAwesomeIcon className="text-green-400" icon={faStar} />
                  <FontAwesomeIcon className="text-green-400" icon={faStar} />
                </span>
              </div>
              <div className="bg-white py-3 px-3 rounded-full absolute w-56 text-center right-6 top-2/4">
                <FontAwesomeIcon className="mr-2" icon={faUser} />
                <span>Good Quality Product</span>
              </div>
              <div className="review"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-999 m-auto my-6">
        <div className="left flex justify-between w-1/2">
          <div>
            <img src={comp1} />
          </div>
          <div>
            <img src={comp2} />
          </div>
          <div>
            <img src={comp3} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr className="w-999 m-auto" />
      <br />
      <br />
      <div className="w-999 m-auto flex justify-between">
        <div className="flex items-center py-5">
          <FontAwesomeIcon
            icon={faTruckFast}
            className="text-2xl mr-3 p-3 bg-green-100 text-green-500"
          />
          <div>
            <h3 className="text-lg font-medium">Free Shipping</h3>
            <p className="text-sm">Order Over $140</p>
          </div>
        </div>
        <div className="flex items-center py-5">
          <FontAwesomeIcon
            icon={faWallet}
            className="text-2xl mr-3 p-3 bg-green-100 text-green-500"
          />
          <div>
            <h3 className="text-lg font-medium">Quick Payment</h3>
            <p className="text-sm">100% Secure Payment</p>
          </div>
        </div>
        <div className="flex items-center py-5">
          <FontAwesomeIcon
            icon={faPercent}
            className="text-2xl mr-3 p-3 bg-green-100 text-green-500"
          />
          <div>
            <h3 className="text-lg font-medium">Special Promo</h3>
            <p className="text-sm">Get Special Promo</p>
          </div>
        </div>
        <div className="flex items-center py-5">
          <FontAwesomeIcon
            icon={faHeadphones}
            className="text-2xl mr-3 p-3 bg-green-100 text-green-500"
          />
          <div>
            <h3 className="text-lg font-medium">24/7 Support</h3>
            <p className="text-sm">Ready Support</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="w-999 m-auto" />
      <br />
      <br />
      <div className="w-999 m-auto flex py-20">
        <div className="left w-1/2 pr-8">
          <div className="w-11/12 flex justify-center px-7 pb-14  bg-slate-200">
            <img className="w-5/6" src={brnifitImg} alt="" />
          </div>
        </div>
        <div className="right w-1/2 flex flex-col justify-center">
          <p>Our Benifit</p>
          <br />
          <h2 className="text-5xl font-semibold 	">
            The More helthy <br />
            Food The Better
          </h2>
          <br />
          <div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-green-400 p-2 mr-3 font-bold text-2xl"
                icon={faCheck}
              />
              <p>Be Alive With Vegitable</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-green-400 p-2 mr-3 font-bold text-2xl"
                icon={faCheck}
              />
              <p> It's The Place To Be.</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-green-400 p-2 mr-3 font-bold text-2xl"
                icon={faCheck}
              />
              <p>Nonstop Veggie Food</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-green-400 p-2 mr-3 font-bold text-2xl"
                icon={faCheck}
              />
              <p>The Best Silk Dish In Town</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-green-400 p-2 mr-3 font-bold text-2xl"
                icon={faCheck}
              />
              <p>Truffles, Egg & Pumpkin Spice</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-999 m-auto" />
      <br />
      <div className="w-999 m-auto my-16 flex">
        <div className="left w-1/2">
          <p>Our Stars</p>
          <br />
          <h2 className="text-5xl font-semibold">
            Vegitable Food Goes <br />
            On And Always On
          </h2>
          <br />
          <div className="flex justify-between py-4 pr-6">
            <div className="py-3 text-center ">
              <h1 className="text-4xl text-green-500">1,500</h1>
              <p className="leading-10">Sold Product</p>
            </div>
            <div className="py-3 text-center ">
              <h1 className="text-4xl text-green-500">500</h1>
              <p className="leading-10">Positive Feedback</p>
            </div>
            <div className="py-3 text-center ">
              <h1 className="text-4xl text-green-500">400</h1>
              <p className="leading-10">Official Store</p>
            </div>
          </div>
          <button className="bg-green-500 py-4 px-6 text-white">
            Get Special Promo <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="right w-1/2 p-10">
          <div className="w-5/6 bg-slate-200 ml-6 pl-20 pb-20 ">
            <img src={starsImg} alt="" />
          </div>
        </div>
      </div>
      <div class="w-999 mx-auto">
        <p class="text-center leading-10 mb-4">Our Features</p>
        <h1 class="text-6xl font-medium text-center mb-10">Variety Of Foods</h1>

        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 p-2">
            <div class="bg-gray-100 p-4 rounded-lg">
              <img
                src={ForeverImg}
                alt="Veggies Are Forever"
                class="mb-4 rounded-lg"
              />
              <h2 class="text-xl font-semibold mb-2">Veggies Are Forever</h2>
              <p class="mb-4">We offer the following services</p>
              <button class="text-green-600 font-bold flex items-center">
                Discover Now <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div class="w-full md:w-1/4 p-2">
            <div class="bg-gray-100 p-4 rounded-lg">
              <img
                src={groverImg}
                alt="Veggie Food Groove"
                class="mb-4 rounded-lg"
              />
              <h2 class="text-xl font-semibold mb-2">Veggie Food Groove</h2>
              <p class="mb-4">We offer the following services</p>
              <button class="text-green-600 font-bold flex items-center">
                Discover Now <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div class="w-full md:w-1/4 p-2">
            <div class="bg-gray-100 p-4 rounded-lg">
              <img
                src={closeImg}
                alt="That Comes Close"
                class="mb-4 rounded-lg"
              />
              <h2 class="text-xl font-semibold mb-2">That Comes Close</h2>
              <p class="mb-4">We offer the following services</p>
              <button class="text-green-600 font-bold flex items-center">
                Discover Now <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div class="w-full md:w-1/4 p-2">
            <div class="bg-gray-100 p-4 rounded-lg">
              <img
                src={skinImg}
                alt="Good For Your Skin"
                class="mb-4 rounded-lg"
              />
              <h2 class="text-xl font-semibold mb-2">Good For Your Skin</h2>
              <p class="mb-4">We offer the following services</p>
              <button class="text-green-600 font-bold flex items-center">
                Discover Now <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <ProductList />
      <br />
      <br />
      <br />
      <div>
        {/* Header Section */}
        <div className="relative  w-999 m-auto">
          <img
            src={BottomImg}
            alt="Veggie Foods"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Veggie Foods? Ingredients You Want To Try
            </h1>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center hover:bg-green-700 transition duration-300">
              Get Started{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-100 text-gray-800 py-10 mt-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Foodies Section */}
            <div>
              <h2 className="text-green-600 text-xl font-bold mb-4">Foodies</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">About Us</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Company
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Company</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in touch Section */}
            <div>
              <h2 className="text-xl font-bold mb-4">Get in touch</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 px-4 border border-gray-300 rounded-lg w-full"
                />
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-gray-500">
            Copyright © 2021 Foodies.
          </div>
        </footer>
      </div>
    </div>
  );
}
