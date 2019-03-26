# How to install and run

Run the application by running following commands. (If you don't have yarn and node on your computer please install them first).

```bash
git clone git@github.com:Tomastomaslol/tomas-robot-challenge.git
cd tomas-nygren-robot
yarn install
yarn start
```

This should start an application on http://localhost:1234/.

To run the application please go to the browser console where you can find following commands:

```javascript
robotCommands.place({ x: 0, y: 0, facing: "SOUTH" });
robotCommands.move();
robotCommands.left();
robotCommands.right();
```

To run the tests please run following command:

```bash
yarn test
```

