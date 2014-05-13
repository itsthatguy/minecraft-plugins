events.on("player.PlayerChatEvent", function(listener, event) {
  return event.setMessage(String(event.getMessage()).green());
});
