import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const defaultContacts = [
    {
      name: "Thao",
      phone: "555-555-5555",
      email: "thao@no.com"
    },
  ];

  const [contacts, setContacts] = useState(defaultContacts);

  const addContact = (name, phone, email) => {
    setContacts(
      [
        ...contacts,
        {
          name: name,
          phone: phone,
          email: email
        }
      ]
    );
  };

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (title, contact, date, time) => {
    setAppointments(
      [
        ...appointments,
        {
          title: title,
          contact: contact,
          date: date,
          time: time
        }
      ]
    );
  };

  return (
    <div>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
