import { useState } from "react";

function Home() {

  const [show, setShow] = useState(false);

  return (
    <section style={{ padding: "40px" }}>

      {/* Inline CSS */}
      <h1 style={{ color: "blue" }}>
        Swetha Jayaprakash
      </h1>

      <h2>Frontend Developer</h2>

      <p>I create modern websites using React.</p>

      {show && <p>I love coding and UI design.</p>}

      <button onClick={() => setShow(!show)}>
        {show ? "Show Less" : "Show More"}
      </button>

    </section>
  );
}

export default Home;