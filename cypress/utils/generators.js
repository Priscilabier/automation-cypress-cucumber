export const generateValidEmail = () => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    return `test.${randomString}${timestamp}@gmail.com`;
}; 