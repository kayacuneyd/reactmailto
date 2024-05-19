function Description() {
  return (
    <>
      <section>
        <h2>Overview</h2>
        <p>
          The Mailto Link Generator is a tool that simplifies the creation of
          email links with predefined recipients, subjects, body content, and
          more. This generator is particularly useful for developers and content
          creators who need to include consistent and user-friendly email links
          in their websites or applications.
        </p>
      </section>

      <section>
        <h2>Benefits</h2>
        <ul>
          <li>
            <strong>Time-Saving:</strong> Quickly create complex mailto links
            without manually encoding each component, saving time and reducing
            errors.
          </li>
          <li>
            <strong>User-Friendly:</strong> Pre-populated email drafts enhance
            the user experience by making it easier for users to contact you
            with the necessary information already filled in.
          </li>
          <li>
            <strong>Consistency:</strong> Ensures uniformity in email links
            across your website or application, maintaining a professional
            appearance.
          </li>
          <li>
            <strong>Error Reduction:</strong> Minimizes the risk of syntax
            errors and incorrect URL encoding, ensuring the links work
            seamlessly across different email clients.
          </li>
          <li>
            <strong>Accessibility:</strong> Facilitates communication for users
            by providing an easy and direct way to reach out, improving overall
            engagement and support.
          </li>
        </ul>
      </section>

      <section>
        <h2>Who Uses It?</h2>
        <ul>
          <li>
            <strong>Web Developers and Designers</strong>: To easily create
            mailto links for users to send emails directly from the website.
          </li>
          <li>
            <strong>Content Managers and Marketers</strong>: To facilitate user
            feedback and improve engagement through pre-filled email templates.
          </li>
          <li>
            <strong>Customer Support Teams</strong>: To allow customers to
            quickly contact support with pre-defined subjects and body content.
          </li>
          <li>
            <strong>Educators and Consultants</strong>: To streamline
            communication with students or clients by providing standard email
            templates.
          </li>
        </ul>
      </section>

      <section>
        <h2>Usage</h2>
        <ol>
          <li>
            Open your browser and navigate to{" "}
            <code>https://quickmailnk.netlify.app/</code>.
          </li>
          <li>
            Fill in the fields for the email recipient (To), CC, BCC, subject,
            and body.
          </li>
          <li>
            Click the "Generate Mailto Link" button to create the mailto link
            and corresponding HTML code.
          </li>
          <li>
            Use the "Copy" buttons to copy the generated mailto link or HTML
            code to your clipboard.
          </li>
        </ol>
      </section>

      <section>
        <h2>Example</h2>
        <ol>
          <li>
            Enter the following details:
            <ul>
              <li>
                <strong>To:</strong> example@example.com
              </li>
              <li>
                <strong>Cc:</strong> cc@example.com
              </li>
              <li>
                <strong>Bcc:</strong> bcc@example.com
              </li>
              <li>
                <strong>Subject:</strong> Hello World
              </li>
              <li>
                <strong>Body:</strong> This is a test email.
              </li>
            </ul>
          </li>
          <li>Click "Generate Mailto Link".</li>
          <li>
            The generated mailto link will be:
            <pre>
              <code>
                mailto:example@example.com?cc=cc@example.com&bcc=bcc@example.com&subject=Hello%20World&body=This%20is%20a%20test%20email.
              </code>
            </pre>
          </li>
          <li>
            The corresponding HTML code will be:
            <pre>
              <code>
                &lt;a
                href=&quot;mailto:example@example.com?cc=cc@example.com&bcc=bcc@example.com&subject=Hello%20World&body=This%20is%20a%20test%20email.&quot;&gt;Email
                me&lt;/a&gt;
              </code>
            </pre>
          </li>
        </ol>
        <p>Click to see my example:</p>
      </section>
    </>
  );
}

export default Description;
