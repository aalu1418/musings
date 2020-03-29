---
title:  "Chromebook Adventures: Docker & Arduino"
excerpt_separator: <!--more-->
---

As my courses continue, there are brief moments where debugging isn't really about a normal linux issue, but rather a Crostini container and Chrome OS issue. For instance, Docker uses containers mapped to specific ports and folders in the Linux system - however accessing it is not as simply as going to `https://localhost:8080`.
<!--more-->
For some reason that didn't work, and I need to access my docker container at the `http://penguin.linux.test:8080/` address. Not sure what happened there, but I'm glad I found another way to access the Linux container. Turns out that Docker support in Crostini was a fairly recent addition (within the last 6 months), so that is pretty convenient for coursework.

Additionally, connecting external USB devices to Crostini has been available for a bit, but I finally got around to trying it. And what do you know, you now can develop Arduino projects! I'm sure there are more reasons why open USB ports in Crostini is important, but this was a pleasant surprise.
