import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/sai.jpg";
import AVTR2 from "../../assets/Murari.jpg";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Sai Kadiyala",
    title: "Sr. Full Stack Developer",
    review:
      "I mentored Haravind during his Co-op. He is a very good listener, a fast learner and provides help to anyone in the team if needed, and is very committed to the responsibilities that he has.",
  },
  {
    avatar: AVTR2,
    name: "Narayana Murari",
    title: "Software Engineer 3 at Walmart",
    review:
      "I had the chance to work with Haravind on different projects during masters and Walmart Internship. His technical skills were always impressive and constantly showed professional behaviour and a high level of problem-solving skills.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <h5>{title}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
