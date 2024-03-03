import { useState, useEffect } from 'react';
import fetchAllTickets, { createNewTicket } from './services/db_services.js';
import TicketForm from './components/TicketForm/TicketForm';
import TicketCard from './components/TicketCard/TicketCard';
import 'normalize.css';
import './App.css';

function App() {
  const [tickets, SetTickets] = useState();
  const [was_db_updated, SetWasDbUpdated] = useState(true);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let new_unique_id = 'id' + Math.random().toString(16).slice(2);
    let new_ticket = { id: new_unique_id, ...values };
    console.log(new_ticket);
    createNewTicket(new_ticket);
    setTimeout(() => {
      SetWasDbUpdated(true);
    }, 500);
    setSubmitting(false);
    resetForm();
  };

  useEffect(() => {
    if (!was_db_updated) return;
    console.log('Fetching updated info from bd!');
    (async () => {
      try {
        const data = await fetchAllTickets();
        SetTickets(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
    SetWasDbUpdated(false);
  }, [was_db_updated]);

  return (
    <>
      <TicketForm onSubmit={handleSubmit}></TicketForm>
      <div>
        {tickets
          ? tickets.map((e) => {
              return <TicketCard {...e} key={e.id}></TicketCard>;
            })
          : ''}
      </div>
    </>
  );
}
export default App;
