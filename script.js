var navMenuAnchorTags = document.querySelectorAll('.nav-menu a')

for (var i = 0; i < navMenuAnchorTags.length - 1; i++) {

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

// document.addEventListener("DOMContentLoaded", function () {
//     var navMenu = document.querySelector('.nav-menu');

//     navMenu.addEventListener("click", function (event) {
//         if (event.target.tagName === "A") {
//             event.preventDefault();

//             var targetId;
//             if (event.target.textContent.trim().toLowerCase() === "home") {
//                 targetId = "hero";
//             } else {
//                 targetId = event.target.textContent.trim().toLowerCase();
//             }

//             var targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 var interval = setInterval(function () {
//                     var targetSectionCoordinates = targetSection.getBoundingClientRect();

//                     if (targetSectionCoordinates.top <= 0 && targetSectionCoordinates.bottom > 0) {
//                         clearInterval(interval);
//                         return;
//                     }

//                     window.scrollBy(0, 50);
//                 }, 20);
//             }
//         }
//     });
// });
