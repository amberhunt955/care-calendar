import sendRequest from "./send-request";

const BASE_URL = '/api/events';

export function createEvent(eventData) {
    return sendRequest(BASE_URL, 'POST', eventData)
}