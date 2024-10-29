"use strict";

// DOM elements
const profileImage = document.querySelector(".profile-image");
const quoteText = document.querySelector(".quote-text");
const profileName = document.querySelector(".profile-name");
const jobTitle = document.querySelector(".profile-job");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

// DATA
const testiData = [
  {
    name: "Tanya Sinclair",
    jobTitle: "UX Engineer",
    quote:
      "I've been interested in coding for a while but never taken the jump,until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    imgUrl: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    jobTitle: "Junior Front-End Developer",
    quote:
      "If you want to lay the best foundation possible I'd recommed taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    imgUrl: "./images/image-john.jpg",
  },
];

// Functions
const switchTestimonial = function (curIndex) {
  curIndex = curIndex ? 0 : 1;
  const data = testiData[curIndex];
  profileImage.setAttribute("src", data.imgUrl);

  // Contents
  quoteText.textContent = data.quote;
  profileName.textContent = data.name;
  jobTitle.textContent = data.jobTitle;
};

// Controller Events
nextBtn.addEventListener("click", () => switchTestimonial(0));
prevBtn.addEventListener("click", () => switchTestimonial(1));
