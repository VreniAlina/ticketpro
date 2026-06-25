export default function LoginPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Login</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>
        Sign in to access the dashboard
      </p>

      <form style={{ display: "grid", gap: 16 }}>
        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 8,
            }}
          />
        </div>

        <div>
          <label htmlFor="password" style={{ display: "block", marginBottom: 6 }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid #d1d5db",
              borderRadius: 8,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: 12,
            border: "none",
            borderRadius: 8,
            background: "#111827",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </form>
    </section>
  );
}