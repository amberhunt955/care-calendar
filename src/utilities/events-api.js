import sendRequest from "./send-request";

const BASE_URL = "/api/events";

export function createEvent(eventData) {
  return sendRequest(BASE_URL, "POST", eventData);
}

export function getAllEvents() {
  return sendRequest(BASE_URL);
}

export function populateContact(eventId) {
  console.log("HELLO FROM UTILITIES");
  console.log(eventId);
  return sendRequest(`${BASE_URL}/${eventId}`, "PUT")
}
