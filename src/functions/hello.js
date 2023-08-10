import { zipFunctions } from "@netlify/zip-it-and-ship-it";

async function zipMyFunctions() {
  const archives = await zipFunctions("functions", "functions-dist", {
    archiveFormat: "zip",
  });
  // 你可以在这里处理archives，如果需要的话
}

// 调用该函数
zipMyFunctions().catch((error) => {
  console.error("Error zipping functions:", error);
});

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.handler = async function (event, context, callback) {
  const firestore = admin.firestore();

  firestore
    .collection("users")
    .where("email", "==", "test@test.io")
    .limit(1)
    .get()
    .then((response) => {
      if (response.empty) {
        return Promise.reject();
      }
      const userInfo = response.docs[0].data();

      console.log(userInfo);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(userInfo),
      });
    })
    .catch((error) => {
      console.log(error);

      callback(null, {
        statusCode: 500,
        body: error,
      });
    });
};
