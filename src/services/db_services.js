export default async function fetchAllTickets() {
  try {
    const response = await fetch(`https://dbtickets.alejorondon.com/tickets`);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function createNewTicket(ticket) {
  try {
    const response = await fetch('https://dbtickets.alejorondon.com/tickets', {
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
