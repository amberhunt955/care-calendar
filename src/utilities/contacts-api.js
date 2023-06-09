import sendRequest from "./send-request";

const BASE_URL = "/api/contacts";

export function createContact(contactData) {
  return sendRequest(BASE_URL, "POST", contactData);
}

export function getAllContacts() {
  return sendRequest(`${BASE_URL}/my-contact-list`);
}

export function findContactById(contactId) {
  return sendRequest(`${BASE_URL}/form/${contactId}`);
}

export function updateContact(id, editedObject) {
  console.log("HELLO FROM CONTACT-API UPDATE FUNCTION");
  return sendRequest(`${BASE_URL}/my-contact-list/${id}/edit`, "PUT", editedObject);
}

export function deleteContact(id) {
  return sendRequest(`${BASE_URL}/my-contact-list/${id}`, "DELETE");
}