class TicketManager {
  #baseProfit;

  constructor() {
    this.events = [];
    this.#baseProfit = 0.15;
  }
  getEvents = () => {
    console.log(this.events);
    return;
  };
  createEvent = (name, place, price, capacity, date) => {
    const event = {
      id: this.events.length + 1,
      name,
      place,
      price: price + this.#baseProfit,
      capacity: capacity ?? 50,
      date: date ?? this.#formatDate(),
      participants: [],
    };
    this.events.push(event);
  };
  addParticipant = (eventId, participantId) => {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);

    if (eventIndex === -1) {
      console.log("Este evento no existe");
      return;
    }

    const participantExists =
      this.events[eventIndex].participants.includes(participantId);

    if (participantExists) {
      console.log("El usuario ya se ha registrado en este evento!");
      return;
    }

    this.events[eventIndex].participants.push(participantId);
  };

  rescheduleEvent = (eventId, newPlace, newDate) => {
    const event = this.events.find((event) => event.id === eventId);

    if (!event) {
      console.log("Este evento no esta disponible");
      return;
    }

    const newEvent = {
      ...event,
      id: this.events.length + 1,
      place: newPlace,
      date: newDate,
      participants: [],
    };

    this.events.push(newEvent);
    return;
  };

  #formatDate = () => {
    const date = new Date();

    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };
}

const ticketManager = new TicketManager();

ticketManager.createEvent("Rock in Punta", "Punta del Este", "U$D" + " " + 12, 18000, "08/04/2023");
ticketManager.createEvent("Cine sobre ruedas", "Montevideo", "U$D" + " " + 3);
ticketManager.addParticipant(1, 1);
ticketManager.rescheduleEvent(1, "Punta Ballena", "12/08/2023");
ticketManager.getEvents();