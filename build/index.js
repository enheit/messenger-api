import { user } from './user.js';
async function fetchNumber() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(1)
            reject(new Error('Happened'));
        }, 3000);
    });
}
const number = await fetchNumber();
console.log('Number is', number);
console.log('User name is', user.name);
