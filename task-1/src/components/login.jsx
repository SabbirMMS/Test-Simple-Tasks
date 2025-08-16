import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-xl font-bold text-yellow-600 text-center">
        Login with credentials
      </h1>

      <section className="bg-gray-300 p-10 rounded-2xl w-1/2 ">
        <form
          className="flex flex-col gap-2"
          onSubmit={() => alert("Successfully Submitted")}
        >
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="email here"></input>
          <label htmlFor="password">Email</label>
          <input
            id="password"
            type="password"
            placeholder="password here"
          ></input>
          <input
            type="submit"
            className="p-3 bg-green-800  text-white mt-10"
          ></input>
        </form>
      </section>
    </div>
  );
};

export default Login;
