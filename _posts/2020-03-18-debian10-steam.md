---
title:  "Chromebook Adventures: Debian 10 & Steam"
---

While classes are canceled, I decided to update my Crostini container to Debian 10. On a previous attempt, I was using the Chrome OS 80 Beta - which had many different issues - and had to reload my container after a powerwash downgrade to Chrome OS 79 Stable. I guess that's what I get for using Beta. This time I was on Chrome OS 80 Stable, and the only way to upgrade was to redo Crostini. And everything seems to be working smoothly - after I discovered that the `git-all` package is not the same as the `git` package in the Debian repository and using `git-all` removes some critical `cros-*` packages.

In another COVID-19 related topic, I installed Steam and tested it with the Jackbox Party Pack games on the Debian 10 system. Everything seems to be working great, and Linux support for audio output has been around for a bit but it required some quick terminal and crosh commands [link](https://chromium.googlesource.com/chromiumos/docs/+/master/containers_and_vms.md). Now, the trick is to be able to stream/video+audio share to other people.
