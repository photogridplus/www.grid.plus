(function (argument) {
  if (document.querySelector('.download_btn')) {
    document.querySelector('.download_btn').addEventListener('click', function () {
      ga('send', 'event', 'app store', 'click', 'Google Play');
    });
  }
})();