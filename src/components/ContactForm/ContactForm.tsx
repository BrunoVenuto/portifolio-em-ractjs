"use client";

import styles from "./ContactForm.module.css";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const project = data.get("project");
    const message = data.get("message");

    const text = `
Olá, tudo bem?

Gostaria de solicitar um orçamento.

Nome: ${name}
Email: ${email}
Projeto: ${project}
Mensagem: ${message}
    `;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/5531995453632?text=${encodedText}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Seu nome" required />
      <input name="email" type="email" placeholder="Seu email" required />

      <select name="project" required>
        <option value="">Tipo de projeto</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Site institucional">Site institucional</option>
        <option value="Outro">Outro</option>
      </select>

      <textarea
        name="message"
        placeholder="Me conte sobre seu projeto"
        required
      />

      <button type="submit">Enviar no WhatsApp</button>
    </form>
  );
}
