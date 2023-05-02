import sendRequest from "./send-request";

const BASE_URL = "/api/contacts";

export function createContact(contactData) {
  return sendRequest(BASE_URL, "POST", contactData);
}

export function getAllContacts() {
  return sendRequest(`${BASE_URL}/my-contact-list`);
}

export function deleteContact(id) {
    console.log('HELLO FROM CONTACT-API');
    return sendRequest(`${BASE_URL}/my-contact-list/${id}`, "DELETE");
  }

// export function getById(id) {
//     return sendRequest(`${BASE_URL}/my-contact-list/${id}`);
//   }
