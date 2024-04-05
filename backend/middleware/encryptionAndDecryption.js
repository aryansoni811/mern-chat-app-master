export function encryptMessage(message) {
  const algorithm = "aes-256-cbc"; // Choose a strong algorithm
  const secretKey = "123456789"; // Replace with a strong secret key
  const iv = crypto.randomBytes(16); // Generate a random initialization vector

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  let encryptedMessage = cipher.update(message, "utf8", "hex");
  encryptedMessage += cipher.final("hex");

  return {
    iv: iv.toString("hex"), // Send IV along with encrypted message
    encryptedData: encryptedMessage,
  };
}

export function decryptMessage(encryptedData) {
  const algorithm = "aes-256-cbc";
  const secretKey = "1212121212";
  const iv = Buffer.from(encryptedData.iv, "hex");

  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
  let decryptedMessage = decipher.update(
    encryptedData.encryptedData,
    "hex",
    "utf8"
  );
  decryptedMessage += decipher.final("utf8");

  return decryptedMessage;
}
