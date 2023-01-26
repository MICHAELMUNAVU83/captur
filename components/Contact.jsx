import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's Work Together
      </h1>

      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 "
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3 "
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          placeholder="Message"
        />

        <p className="text-center">
          <button type="submit" className=" border px-4 py-2 mt-2  ">
            Send
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
