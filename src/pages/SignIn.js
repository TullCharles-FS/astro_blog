import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase"; // Firebase config

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Sign in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign in successful!");
    } catch (error) {
      setError("Failed to sign in. Please check your credentials.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-nebula">
        Sign In
      </h1>
      <form
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSignIn}
      >
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-space font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-nebula"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-space font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-nebula"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-nebula text-white py-2 rounded-lg hover:bg-space transform hover:scale-105 transition-transform duration-300"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default SignIn;
