## inxanebot
This repository contains the source code for the inxanebot, made for my school's class's discord server.
## Setup
To setup the bot, you need to create a `.env` file in the project's root directory, and write one line to it, which looks like this:
    BOT_TOKEN="<your bot's token here>"
Naturally, my bot token is not on the public repository, because it'd allow you to impersonate my bot. Hence it's included in the .gitignore.

You should also edit some of the values in the `config.json` file, as it is configured for my server.
## Running the bot
Once set up, simply run `node index.js`. This will start the bot up.
Alternatively, to allow remote updating and restarting the bot with `+restart`, run the `runforever.bat` script.
## runforever.bat
The purpose of this batch script is to run the bot again when it restarts, and before it starts up again, update it from the repo remotely. This allows me to make changes even when I'm away from the computer (I host this on a laptop quite far away from my home, so this really helps).
