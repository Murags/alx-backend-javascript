export default function handleResponseFromAPI(promise) {
  promise
    .then((data = { status: 200, body: 'success' }) => {
      return data;
    })
    .catch((error = new Error()) => {
      return error;
    })
    .finally(console.log('Got a response from the API')
    )};
