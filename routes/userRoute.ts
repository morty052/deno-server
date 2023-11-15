import express from "../lib/express.ts";
const router = express.Router();
const userRoute = router;

userRoute.post("/", async (req, res) => {
  console.log("endpoint reached");
  const body = req.body;
  const email = body.email;
  res.send(`Mock sending to ${email}`);
});

userRoute.post("/welcome", async (req, res) => {
  console.log("welcome endpoint reached");
  const body = req.body;
  const email = body.email;
  res.send(`Mock sending welcome to ${email}`);
});

export default userRoute;
