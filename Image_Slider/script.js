let lists = document.querySelectorAll('.item');

document.getElementById('next').onclick = function () {
  let firstItem = document.getElementById('slide').firstElementChild;
  document.getElementById('slide').appendChild(firstItem);
  lists = document.querySelectorAll('.item'); // Update the lists variable
};

document.getElementById('prev').onclick = function () {
  let lastItem = document.getElementById('slide').lastElementChild;
  document.getElementById('slide').prepend(lastItem);
  lists = document.querySelectorAll('.item'); // Update the lists variable
};
