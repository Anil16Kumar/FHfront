import React, { useState } from "react";

const AgentLogin = () => {
  const [agentCode, setAgentCode] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // login logic
    // the AgentCode and password actions 

    alert("Login successful!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1>Admin Login</h1>
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="agentCode" style={{ fontWeight: "bold", marginBottom: "5px" }}>
            Admin Code:
          </label>
          <input
            type="text"
            id="agentCode"
            value={agentCode}
            onChange={(e) => setAgentCode(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>

        
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ fontWeight: "bold", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default AgentLogin;