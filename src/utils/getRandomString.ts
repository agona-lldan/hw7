export default function getRandomString(arr: string[]) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 20;
  let uniqueString = "";

  do {
    for (let i = 0; i < length; i++) {
      uniqueString += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
  } while (arr.includes(uniqueString));

  return uniqueString;
}
