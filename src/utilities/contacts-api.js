import sendRequest from "./send-request";

const BASE_URL = '/api/contacts';

export function createContact(contactData) {
    return sendRequest(BASE_URL, 'POST', contactData)
}