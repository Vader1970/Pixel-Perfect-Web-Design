// Portfolio Slider //

// Add a click event handler for the "next" button
document.querySelector("#next").onclick = function () {
  // Get all the individual portfolio items
  let lists = document.querySelectorAll(".item");
  // Move the first portfolio item to the end of the list
  document.querySelector("#slide").appendChild(lists[0]);
};

// Add a click event handler for the "prev" button
document.querySelector("#prev").onclick = function () {
  // Get all the individual portfolio items
  let lists = document.querySelectorAll(".item");
  // Move the last portfolio item to the beginning of the list
  document.querySelector("#slide").prepend(lists[lists.length - 1]);
};
