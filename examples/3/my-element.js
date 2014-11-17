Polymer("my-element", {
  greeting: "Click me!",
  clickHandler: function() {
    return this.greeting = "Hello, " + prompt("What is your name?") + "!";
  }
});
