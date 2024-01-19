import logo from "./logo.svg"

const Navbar = () => {
  const title = "GC React Blog"
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" width={50} />
      <h1>{title}</h1>
      <div className="links">
        <a href="/"> Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  )
}

export default Navbar
