import { Icon } from "astro-icon";
import { MouseEventHandler, useState } from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "error" | "loading" | "success"
  >("idle");
  const [error, setError] = useState("Something went wrong. Please try again.");

  const handleSubmit = (e: MouseEventHandler) => {
    setStatus("loading");

    fetch(
      "https://pogrgz7py5esqrilior7nxukbm0xizub.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Contact Form Data", data);
        if (!data.success) {
          setStatus("error");
          setError(data.message);
          return;
        }
        setStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
        setError("Something went wrong. Please try again later.");
      });

    console.log(name, email, message);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full border border-white p-2 text-[#1c1c1c] outline-none transition-all focus:outline focus:outline-1 focus:outline-emerald-400 "
        />
      </div>
      <div className="mb-4">
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border border-white p-2 text-[#1c1c1c] outline-none transition-all focus:outline focus:outline-1 focus:outline-emerald-400 "
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Message"
          className="w-full border border-white p-2 text-[#1c1c1c] outline-none transition-all focus:outline focus:outline-1 focus:outline-emerald-400 "
        />
      </div>
      {status === "idle" && (
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn mr-4 w-full tracking-widest text-sm text-white bg-emerald-600 outline outline-1 outline-emerald-400 outline-offset-1 px-2 py-2 inline-block transition hover:bg-emerald-500"
          >
            Send message
          </button>
        </div>
      )}
      {status === "loading" && (
        <div>
          <button
            type="button"
            className=" hover:cursor-default btn mr-4 w-full tracking-widest text-sm text-white bg-neutral-600 outline outline-1 outline-neutral-400 outline-offset-1 px-2 py-2 inline-block transition"
          >
            Sending your message...
          </button>
        </div>
      )}
      {status === "error" && (
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn mb-4 w-full tracking-widest text-sm text-white bg-emerald-600 outline outline-1 outline-emerald-400 outline-offset-1 px-2 py-2 inline-block transition hover:bg-emerald-500"
          >
            Send message
          </button>
          <div className="bg-red-500 p-4">{error}</div>
        </div>
      )}
      {status === "success" && (
        <div>
          <div className="bg-emerald-600 p-4 mb-4 tracking-widest text-sm text-center">
            Message sent successfully!
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
