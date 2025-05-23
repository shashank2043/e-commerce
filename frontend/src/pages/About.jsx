import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is a dynamic e-commerce platform dedicated to offering a
            wide range of trendy and affordable clothing for men, women, and
            children. With a user-friendly interface and seamless shopping
            experience, Forever makes fashion accessible to everyone. The
            platform features the latest styles in casual wear, formal outfits,
            and seasonal collections, keeping customers up-to-date with current
            fashion trends.
          </p>
          <p>
            Known for its fast shipping, secure payment options, and responsive
            customer support, Forever ensures a reliable and satisfying shopping
            journey. Whether you're looking for everyday basics or standout
            pieces for special occasions, the platform provides a curated
            selection that caters to diverse fashion tastes and preferences,
            helping customers stay stylish all year round.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to make fashion accessible, affordable, and inclusive
            for everyone. We strive to offer high-quality clothing that reflects
            the latest trends while promoting individuality and confidence.
            Through innovation and customer focus, we aim to deliver a seamless
            shopping experience. At Forever, style meets purpose in every piece
            we offer.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We ensure top-notch quality through rigorous checks and a commitment
            to excellence in every garment we deliver.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We prioritize a seamless and hassle-free shopping experience, from
            easy navigation to quick checkout and prompt delivery.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist, ensuring your
            questions are answered and concerns are resolved with care and
            efficiency.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
