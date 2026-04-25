# firefox

- [firefox](#firefox)
  - [extensions](#extensions)
  - [about:config](#aboutconfig)
  - [user.js](#userjs)

## extensions

- ublock origin

## about:config

- Do the security hardening.
- browser.newtabpage.activity-stream.feeds.section.topstories: false
- Disable WebRTC
  1. ```media.peerconnection.enabled```: false
- Disable Geolocation
  1. ```geo.enabled```: false
- Sites can’t spy on copy/paste
  1. ```dom.event.clipboardevents.enabled```: false
- Disable Firefox Pocket and Snippet.
  1. ```extensions.pocket.enabled```: false
  2. ```browser.newtabpage.activity-stream.feeds.snippets```: false
- Turn Firefox Sync off.
  1. ```identity.fxaccounts.enabled```: false
  2. ```services.sync.engine.*```: false

## user.js

To apply user.js created, place it in ```~/.mozilla/firefox/<your-profile>.default-release/user.js```
