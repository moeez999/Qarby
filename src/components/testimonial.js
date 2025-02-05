import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    firstName: "Alex",
    lastName: "Smith",
    icon: "../images/1.png",
    review:
      "Qarby car has completely transformed the way we manage customer inquiries. The real-time chat feature ensures that no question goes unanswered, and the user-friendly design makes it easy for our team to navigate. We've seen a significant increase in customer satisfaction since implementing it!",
    role: "Customer Service Manager, DriveWay Motors",
    rating: "5.0",
  },
  {
    firstName: "Alex",
    lastName: "Smith",
    review:
      "Qarby car has completely transformed the way we manage customer inquiries. The real-time chat feature ensures that no question goes unanswered, and the user-friendly design makes it easy for our team to navigate. We've seen a significant increase in customer satisfaction since implementing it!",
    icon: "../images/2.png",
    role: "Customer Service Manager, DriveWay Motors",

    rating: "5.0",
  },
  {
    firstName: "Alex",
    lastName: "Smith",
    review:
      "Qarby car has completely transformed the way we manage customer inquiries. The real-time chat feature ensures that no question goes unanswered, and the user-friendly design makes it easy for our team to navigate. We've seen a significant increase in customer satisfaction since implementing it!",
    icon: "../images/1.png",
    role: "Customer Service Manager, DriveWay Motors",
    rating: "5.0",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Testimonial</h2>

      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="main-card">
              <img src="../images/largeCard.png" alt="" />
              <div className="card-content">
                <div className="testimonial-icon">
                  <img src={testimonial.icon} alt="" />
                  <div className="name">
                    <p className="testimonial-name">{testimonial.firstName}</p>
                    <p className="testimonial-name">{testimonial.lastName}</p>
                  </div>
                </div>
                <div className="text-card">
                  <p className="testimonial-review">{testimonial.review}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <p href={testimonial.link} className="testimonial-link">
                {testimonial.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
