import { createUser, uploadPhoto } from './utilis';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((data) => {
      createUser()
        .then((userdata) => {
          console.log(`${data.body} ${userdata.firstName} ${userdata.lastName}`);
        })
        .catch((error = new Error('Signup system offline')) => console.log(error));
    })
    .catch((error = new Error('Signup system offline')) => console.log(error));
}
