$(function () {
  DYO.waitForElementAsync("video source").then(() => {
    $("video source").attr(
      "src",
      "https://cdn.vidyard.com/videos/9EennfG2oPHtl17qSo9ldQ/hd.mp4?gNJQSH3hHhQwTCDIoc_wUJkfPzYBAWkELF2M4qH8zKMZGATGeo-3lYnfS7ellgra3sj4aSb2obPE6SjuXXB0h3LFibBwLyquY0HgroJz"
    );
    document.getElementsByTagName("video")[0].load();
  });
});
