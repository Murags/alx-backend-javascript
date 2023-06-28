export default function handleResponseFromAPI(promise) {
  return promise
    .then((data = { status: 200, body: 'success' }) => data)
    .catch((error = new Error()) => error)
    .finally(console.log('Got a response from the API'));
}
