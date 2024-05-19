import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function MailForm() {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [linkText, setLinkText] = useState("");
  const [mailtoLink, setMailtoLink] = useState("");
  const [htmlCode, setHtmlCode] = useState("");

  const generateMailtoLink = () => {
    const base = `mailto:${to}`;
    const params = [];
    if (cc) params.push(`cc=${cc}`);
    if (bcc) params.push(`bcc=${bcc}`);
    if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
    if (body) params.push(`body=${encodeURIComponent(body)}`);

    const mailto = params.length ? `${base}?${params.join("&")}` : base;
    setMailtoLink(mailto);
    setHtmlCode(`<a href="${mailto}">${linkText || "Email me"}</a>`);
  };

  const copyToClipboard = (id) => {
    const copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");
  };

  return (
    <Form className="mail-form">
      <Row className="mb-3">
        <Form.Group controlId="formTo">
          <Form.Label>To</Form.Label>
          <Form.Control
            type="email"
            placeholder="receiver@email.com"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formCc">
          <Form.Label>Cc</Form.Label>
          <Form.Control
            type="email"
            placeholder="thirdpartyreceiver@email.com"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formBcc">
          <Form.Label>Bcc</Form.Label>
          <Form.Control
            type="email"
            placeholder="thirdpartyknowing@email.com"
            value={bcc}
            onChange={(e) => setBcc(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Body of your message"
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="formLinkText">
          <Form.Label>Link Text</Form.Label>
          <Form.Control
            type="text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Button className="app-button" type="button" onClick={generateMailtoLink}>
        Generate Mailto Link
      </Button>
      <Row className="mb-3 mt-3">
        <Form.Group controlId="mailto-link">
          <Form.Label>Mailto Link</Form.Label>
          <Form.Control as="textarea" rows={2} value={mailtoLink} readOnly />
        </Form.Group>
        <Button
          type="button"
          className="mt-2"
          onClick={() => copyToClipboard("mailto-link")}
        >
          Copy Mailto Link
        </Button>
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="html-code">
          <Form.Label>HTML Code</Form.Label>
          <Form.Control as="textarea" rows={2} value={htmlCode} readOnly />
        </Form.Group>
        <Button
          type="button"
          className="mt-2"
          onClick={() => copyToClipboard("html-code")}
        >
          Copy HTML Code
        </Button>
      </Row>
    </Form>
  );
}

export default MailForm;
