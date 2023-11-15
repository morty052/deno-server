import express from "../lib/express.ts";
const router = express.Router();
const userRoute = router;

userRoute.post("/", async (req, res) => {
  const body = req.body;
  const email = body.email;
  console.log("endpoint reached", email);
  res.send({
    message: `Mock sending welcome to ${email}`,
  });
});

userRoute.post("/welcome", async (req, res) => {
  console.log("welcome endpoint reached");
  const body = req.body;
  const email = body.email;
  res.send(`Mock sending welcome to ${email}`);
});

export default userRoute;
