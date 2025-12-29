"use client";

import { useState } from "react";

import { Header } from "@/components/Header/Header";
import { InfoArea } from "@/components/InfoArea/InfoArea";
import { Objective } from "@/components/Objectives/Objectives";
import { CTA } from "@/components/CTA/CTA";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Modal } from "@/components/Modal/Modal";
import { Footer } from "@/components/Footer/Footer";
import { ProjectList } from "@/components/ProjectList/ProjectList";

export default function Home() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <div>
      <Header
        onOpenProjects={() => setOpenProjects(true)}
        onOpenContact={() => setOpenContact(true)}
      />

      <InfoArea />
      <Objective />

      {/* CTA FORTE */}
      <CTA onOpen={() => setOpenContact(true)} />

      <Modal
        isOpen={openProjects}
        onClose={() => setOpenProjects(false)}
        title="Meus Projetos"
      >
        <ProjectList />
      </Modal>

      {/* MODAL CONTATO / FORMULÁRIO */}
      <Modal
        isOpen={openContact}
        onClose={() => setOpenContact(false)}
        title="Solicitar orçamento"
      >
        <ContactForm />
      </Modal>

      <Footer />
    </div>
  );
}
