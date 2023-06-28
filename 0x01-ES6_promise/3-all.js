import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo_data, user_data]) => {
      console.log(`${photo_data.body} ${user_data.firstName} ${user_data.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
