# main index
events.on "player.PlayerChatEvent", (listener, event) ->
  event.setMessage(String(event.getMessage()).green())