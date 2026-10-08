import { type ChangeEvent, type FormEvent, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import dashboardImage from "./assets/images/illustration-dashboard.png";
import logo from "./assets/images/logo.svg";
import Button from "./components/Button";
import Input from "./components/Input";
import Text from "./components/Text";
import { pageStyles } from "./styles/page.styles";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const styles = pageStyles({ formLayout: "inline" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailInput = event.currentTarget.elements.namedItem("email");

    if (!(emailInput instanceof HTMLInputElement)) return;

    if (!emailInput.validity.valid) {
      setSubscribed(false);
      setEmailError("Please provide a valid email address");
      emailInput.focus();
      return;
    }

    setEmailError("");
    setSubscribed(true);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.currentTarget.validity.valid) setEmailError("");
    if (subscribed) setSubscribed(false);
  }

  return (
    <main className={styles.root()}>
      <header className={styles.header()}>
        <img className={styles.logo()} src={logo} alt="Ping" />
      </header>

      <section className={styles.content()} aria-labelledby="launch-title">
        <Text as="h1" variant="title" id="launch-title">
          We are launching{" "}
          <strong className="font-bold text-ping-ink">soon!</strong>
        </Text>
        <Text className={styles.subtitle()}>Subscribe and get notified</Text>

        <form className={styles.form()} onSubmit={handleSubmit} noValidate>
          <Input
            id="email"
            name="email"
            type="email"
            label="Your email address"
            placeholder="Your email address..."
            autoComplete="email"
            required
            error={emailError}
            onChange={handleEmailChange}
          />
          <Button type="submit" className="max-[600px]:w-full">
            Notify Me
          </Button>
        </form>

        {subscribed && (
          <Text className={styles.confirmation()} role="status">
            Thanks! We will notify you when we launch.
          </Text>
        )}

        <img
          className={styles.illustration()}
          src={dashboardImage}
          alt="Preview of the Ping analytics dashboard"
        />
      </section>

      <footer className={styles.footer()}>
        <nav className={styles.socialLinks()} aria-label="Social media">
          <a
            className={styles.socialLink()}
            href="https://www.facebook.com/"
            aria-label="Facebook"
          >
            <FaFacebookF aria-hidden="true" focusable="false" size={14} />
          </a>
          <a
            className={styles.socialLink()}
            href="https://twitter.com/"
            aria-label="Twitter"
          >
            <FaTwitter aria-hidden="true" focusable="false" size={14} />
          </a>
          <a
            className={styles.socialLink()}
            href="https://www.instagram.com/"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" focusable="false" size={14} />
          </a>
        </nav>
        <Text variant="caption">© Copyright Ping. All rights reserved.</Text>
      </footer>
    </main>
  );
}

export default App;
