import express from "./lib/express.ts";
import cors from "npm:cors";
// import bodyParser from "https://esm.sh/body-parser";
import send from "./send.ts";
import userRoute from "./routes/userRoute.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const app = express();
const port = 3000;
const router = express.Router();
// app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", async (req, res) => {
  //   await send();
  const body = req.body;
  console.log(body);
  console.log("request received");
  res.send(JSON.stringify("Hello World!"));
});

app.post("/", async (req, res) => {
  const body = req.body;
  const { emailArray, link, template } = body;
  const { logo, name, TemplateName, email, subject, from } = template;
  console.log("request received");
  emailArray.forEach(
    async (person: {
      firstName: string;
      emails: { email: string; status: string };
    }) => {
      const emailprops = {
        subject,
        from,
        link,
        TemplateName,
        logo,
        teamName: name,
        companyEmail: email,
        firstName: person.firstName,
      };
      try {
        await wait(1000);
        await send(person.emails[0].email, emailprops);
      } catch (error) {
        console.log(error);
      }
    }
  );

  res.send(JSON.stringify("Hello World!"));
});
