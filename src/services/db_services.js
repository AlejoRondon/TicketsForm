export default async function fetchAllTickets() {
  try {
    const response = await fetch(`http://localhost:3000/tickets`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function createNewTicket(ticket) {
  try {
    const response = await fetch('http://localhost:3000/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticket),
    });

    if (!response.ok) {
      throw new Error('Failed to create ticket');
    }

    console.log('Ticket created successfully');
  } catch (error) {
    console.error('Error creating ticket:', error.message);
  }
}
