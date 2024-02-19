function handleCreateEvent(event) {
  event.preventDefault(); // Prevent default form submission

  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDescription = document.getElementById('eventDescription').value;

  const eventList = document.getElementById('events');
  const listItem = document.createElement('li');
  listItem.textContent = `${eventName} - ${eventDate} ${eventTime} - ${eventLocation} - ${eventDescription}`;
  eventList.appendChild(listItem);

  // Clear input fields (optional)
  document.getElementById('eventName').value = "";
  document.getElementById('eventDate').value = "";
  document.getElementById('eventTime').value = "";
  document.getElementById('eventLocation').value = "";
  document.getElementById('eventDescription').value = "";
}
