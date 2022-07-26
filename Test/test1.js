$(function () {
  console.log("insert mobile video");
  DYO.waitForElementAsync("video source").then(() => {
    $("video source").attr(
      "src",
      "https://cdn.vidyard.com/videos/Vz02DF4PYoXNusvc3P111g/hd.mp4?-iToX6dJlaXHuUHeF2o5tCeYDX7MAobsyKW-T2jRsJLlZH9gSXI8qfuzSSJ1Vf7Jcexscx0uu4wZUibVfgHKad-W8qyNuHW4dtBkjqdn"
    );
    document.getElementsByTagName("video")[0].load();
  });
});
