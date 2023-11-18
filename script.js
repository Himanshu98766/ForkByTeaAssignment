var navMenuAnchorTags = document.querySelectorAll('.nav-menu a')

for (var i = 0; i < navMenuAnchorTags.length; i++) {

   navMenuAnchorTags[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (this.textContent.trim().toLowerCase() === "home") {
         targetId = "hero";
      } else {
         targetId = this.textContent.trim().toLowerCase();
      }
      // console.log(targetId);
      var targetSection = document.getElementById(targetId);
      var interval = setInterval(function () {
         var targetSectionCoordinates = targetSection.getBoundingClientRect();
         console.log(targetSectionCoordinates);

         if (targetSectionCoordinates.top <= 0) {
            clearInterval(interval);
            return;
         }
         window.scrollBy(0, 50);
      }, 20);
   })
}