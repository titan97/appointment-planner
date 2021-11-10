import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = ({ contacts, addContact }) => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const found = contacts.find((contact) => contact.name === name);
    if (found !== undefined) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    };
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name already exists" : ""}
        </h2> 
        <ContactForm 
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts}
        />
      </section>
    </div>
  );
};

