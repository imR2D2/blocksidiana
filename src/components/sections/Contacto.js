import React, { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0AMensaje: ${mensaje}`;
    const url = `mailto:ahzbsc@gmail.com?subject=Contacto&body=${body}`;
    window.open(url, "_blank");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mt-20">
          Contact 
        </h2>
        <p className="mt-4 text-lg text-gray-500">
        If you have any questions or suggestions, send us a message!
        </p>
        <form className="mt-9" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-gray-200"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-gray-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md bg-gray-200"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border-2 rounded-full shadow-sm text-base font-medium  border-gray-700 dark:border-white hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black dark:text-white transition dark: duration-300"
              >
                Send Email!
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto