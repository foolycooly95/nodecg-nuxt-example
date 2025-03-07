import cors from "cors";

export default function (nodecg) {
  const app = nodecg.Router();
  app.use(cors({ origin: "http://localhost:3000" }));

  const replicants = {
    scoreboard: nodecg.Replicant("scoreboard", {
      defaultValue: {
        p1name: "Player 1",
        p1score: 0,
        p2name: "Player 2",
        p2score: 0,
      },
    }),
  };

  for (const [name, replicant] of Object.entries(replicants)) {
    app.get("/" + name, (req, res) => {
      res.send(replicant.value);
    });

    app.post("/" + name, (req, res) => {
      replicant.value = req.body;
      res.sendStatus(200);
    });
  }

  nodecg.mount(app);
}
