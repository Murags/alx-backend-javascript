export default function handleResponseFromAPI(promise) {
  promise
    /* eslint-disable */
    .then((data) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error = new Error()) => {
    /* eslint-enable */
      console.log('Got a response from the API');
      return error;
    });
}
