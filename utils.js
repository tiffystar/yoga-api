// categories.items.forEach(function (element) {
//   console.log(element);
//   db.collection("categories")
//     .insertOne({ element })
//     .catch((error) => console.error(error));
// });

// const baseUrlRouter = require("./routes/baseURL.js");
// const posesRouter = require("./routes/poses.js");
// const categoriesRouter = require("./routes/categories.js");

// app.use(baseUrlRouter);

//   const poseId = req.params.id;
// try {
//   const data = await db
//     .collection("poses")
//     .findOne({ "element.id": poseId })
//     .toArray();

//   console.log(poseId, data);
//   res.json(data).end();
// } catch (error) {
//   res.json(error).end();
// }

// app.use(posesRouter);
// app.use(categoriesRouter);

// const requestLogger = (request, response, next) => {
//   console.log("Method:", request.method);
//   console.log("Path:  ", request.path);
//   console.log("Body:  ", request.body);
//   console.log("---");
//   next();
// };
// app.use(requestLogger);

// const unknownEndpoint = (request, response) => {
//   response.status(404).send;
// };

// app.use(unknownEndpoint);
