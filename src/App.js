import React, { useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import MailForm from "./MailForm";
import Description from "./Description";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";
import coffee from "./cupofcoffe.png";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Arvo", "serif", "Handlee", "cursive"],
      },
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          quiCKmailnk Generator »{" "}
          <img src={logo} alt="quiCKmailnk Generator" width={60} />
        </h1>
      </header>

      <div
        id="top"
        className="App-body"
        style={{ maxWidth: "600px", margin: "30px auto" }}
      >
        <p style={{ padding: "30px 0" }}>
          Create <strong>mailto:</strong> links and the HTML code with subject,
          body, bcc, cc and link text easily.
        </p>
        <MailForm />
        <br />
        <Description />
        <section className="myExample">
          <div className="footer-oben">
            <p>
              I hope you have a fantastic day and great success with your
              mailto-linking endeavors.
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@kayacuneyt.com?subject=A%20quick%20message!&body=I%20hope%20you%20have%20a%20fantastic%20day%20and%20great%20success%20with%20your%20mailto-linking%20endeavors."
            >
              Cüneyt Kaya
            </a>
          </div>
        </section>
        <section className="buyMeACoffee">
          <div className="buyMeACoffeeWrapper">
            <p style={{ margin: "3rem 0" }}>
              Love what I'm doing? Fuel my creativity with a cup of coffee! ☕❤️
            </p>

            <a href="https://donate.stripe.com/5kA7su9iffR96SQeUU">
              <img src={coffee} alt="cup of coffee" width={50} /> Buy me a cup
              of coffee
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
