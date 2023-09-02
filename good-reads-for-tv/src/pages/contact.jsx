import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Perform form validation
    const validationErrors = formValidation();

    if (validationErrors.length === 0) {
      // Submit the form data to the backend URL
      alert("Form Submitted");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  //validates email
  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  const formValidation = () => {
    const isNameValid = name !== "";

    let errors = [];

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
      // alert("Name is not valid, please try again.");
    }
    if (!validateEmail(email)) {
      errors.push("Email is not valid, please try again.");
      // alert("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
      // alert("Email field is empty, please try again.");
    }

    if (errors.length > 0) {
      // Alert the errors
      errors.forEach((error) => {
        alert(error);
      });
    } 
    else {
      alert("Email Sent");
    }

    return errors;
  };


  return (
    <div className="100vh flex justify-center place-content-center">
        <form
          className="flex flex-col justify-around bg-[--white] gap-3 p-4 m-10 rounded-md w-75px"
          onSubmit={handleSubmit}
          >

            <input
              className="bg-[--white] text-black rounded-md p-1 active:bg-black"
              required
              type="email"
              placeholder="someone@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="bg-[--white] text-black rounded-lg p-1"
              required
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="bg-[--white] text-black rounded-lg p-1"
              required
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea 
              className="bg-[--white] text-black rounded-lg p-1 border-slate-500"
              rows="10"
              cols="75"
              required
              placeholder="Tell Us Your Thoughts"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
            className="bg-[--orange] text-black rounded-lg p-1 hover:underline cursor-pointer dft-btn w-fit place-self-center"
            disabled={!subject || !message}
            type="submit"
            onClick={formValidation}
            >
              Submit
            </button>
        </form>
    </div>
  )
}

export default Contact