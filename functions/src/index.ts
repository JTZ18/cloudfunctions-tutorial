
import { FunctionParser } from "firebase-backend"

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports = new FunctionParser({ rootPath: __dirname, exports, verbose: true }).exports;
