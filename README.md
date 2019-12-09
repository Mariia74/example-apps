# Narratory example apps

Example skills for the [Narratory tool](https://narratory.io/). Contributions welcome from everyone, just send a PR!

# Contents

Skill                 | Description                                 | Concepts showcased
----------------------|---------------------------------------------|------------------------------------------------------
Flightbooker          | Allowing you to book flights                | Slot-filling, see [Narratory docs on slot-filling](https://narratory.io/docs/slot-filling)

# Running apps
1. Clone the repository, `git clone https://github.com/narratory/example-apps`.
2. Go into the folder of the app you want to test, for example `cd flightbooker`.
3. Run `npm install` to install dependencies.
4. Add your Google credentials and Narratory key to the `src/agent.ts` file (see [Narratory docs on setup](https://narratory.io/docs/setup))
5. Create your agent and start an interactive chat-prompt in the terminal with `npm run start`

# Documentation
For more info, see [the Narratory docs](https://narratory.io/docs/first-agent).
