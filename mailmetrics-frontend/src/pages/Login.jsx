import { useState } from "react";
import { login } from "../api/authApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={submit} className="login-form">
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>
    </form>
  );
}



// import { useState } from "react";
// import { login } from "../api/authApi";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//     window.location.href = "/dashboard";
//   };

//   return (
//     <form onSubmit={submit} className="login-form">
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password"
//              onChange={(e) => setPassword(e.target.value)} />
//       <button>Login</button>
//     </form>
//   );
// }
