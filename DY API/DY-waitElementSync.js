async function handleElSync() {
  var targetEl = await DYO.waitForElementAsync(
    selector,
    minElements,
    interval,
    maximumRetries
  );
  //后续操作
}
