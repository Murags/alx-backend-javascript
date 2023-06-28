import { createUser, uploadPhoto } from './utilis';

export default async function handleProfileSignup() {
  try {
        const data = await uploadPhoto();
        createUser()
            .then((userdata) => {
                console.log(`${data.body} ${userdata.firstName} ${userdata.lastName}`);
            })
            .catch((error = new Error('Signup system offline')) => console.log(error));
    } catch (error_1) {
        return console.log(error_1);
    }
}
