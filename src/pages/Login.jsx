import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <div className="bg-gray-100 min-h-screen relative">
      <nav className="bg-blue-500 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">
            Depression Detection App
          </a>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <section className="py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Find out if you're depressed
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Take our quick quiz and find out
            </p>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Register Now
            </a>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center flex items-center flex-col">
            <h2 className="text-3xl font-bold mb-4">What is depression?</h2>
            <p className="text-lg text-gray-700 mb-8 w-3/4 text-center flex flex-col gap-4">
              <span>
                Depression is a mental health disorder characterized by
                persistent feelings of sadness, hopelessness, and loss of
                interest or pleasure in activities that were once enjoyable. It
                can also cause physical symptoms such as fatigue, changes in
                appetite or sleep, and difficulty concentrating.
              </span>
              <span>
                Depression can vary in severity and duration, but it typically
                interferes with a person's ability to function in their daily
                life and can lead to problems in relationships, work, and
                school. It can be caused by a variety of factors, including
                genetics, chemical imbalances in the brain, life events, and
                environmental factors. Treatment for depression often involves a
                combination of medication, therapy, and lifestyle changes.
              </span>
            </p>
            <a
              href="/about"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 py-4 px-6 absolute bottom-0 w-full h-24 flex items-center">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">
            &copy; 2023 Depression Detection App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
