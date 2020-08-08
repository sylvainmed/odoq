function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
  var g = document.querySelector(grid),
    gc = document.querySelectorAll(gridCell),
    gcLength = gc.length, // Total number of cells in the masonry
    gHeight = 0, // Initial height of our masonry
    i; // Loop counter
  // Calculate the net height of all the cells in the masonry
  for (i = 0; i < gcLength; ++i) {
    gHeight += gc[i].offsetHeight + parseInt(gridGutter);
  }
  /*
   * Calculate and set the masonry height based on the columns
   * provided for big, medium, and small screen devices.
   */
  if (window.screen.width >= 1024) {
    g.style.height = gHeight / dGridCol + gHeight / (gcLength + 1) + "px";
  } else if (window.screen.width < 1024 && window.screen.width >= 768) {
    g.style.height = gHeight / tGridCol + gHeight / (gcLength + 1) + "px";
  } else {
    g.style.height = gHeight / mGridCol + gHeight / (gcLength + 1) + "px";
  }
}

