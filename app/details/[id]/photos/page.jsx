import React from "react";

const page = () => {
  return (
    <div className="flex justify-center h-[100vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8801686801985!2d104.92821021523006!3d11.562108991318867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951cd74cf8fcb%3A0x4c82e2b45f66cf2d!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1690403889004!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map of Phnom Penh"
      ></iframe>
    </div>
  );
};

export default page;
