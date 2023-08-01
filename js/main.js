
$(document).ready(function () {
  var $myElement = $(".fixed-links"); // Store the element in a variable
  var $newLocation = $("body"); // Specify the new location

  function initializeSlider() {
    $('.why-us__slider-circles').slick({
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  }

  function destroySlider() {
    $('.why-us__slider-circles').slick('unslick');
  }

  function checkScreenWidth() {
    var windowWidth = $(window).width();
    var mobileBreakpoint = 1200; // Adjust this value as per your requirements

    if (windowWidth < mobileBreakpoint) {
      initializeSlider();


      $myElement.detach();
      $myElement.appendTo($newLocation);

    } else {
      destroySlider();
    }
  }

  // Check screen width on page load and resize
  $(window).on('load resize', function () {
    checkScreenWidth();
  });
});

$(document).on('click', function (event) {
  var $targetElement = $('.fixed-links ul'); // Specify the target element
  if (!$targetElement.is(event.target) && !$targetElement.has(event.target).length) {
    if ($(".fixed-links__toggler").hasClass("active") == true) {
      $(".fixed-links").removeClass("active");
      $(".fixed-links__toggler").removeClass("active");
    }
  }
});

$(".fixed-links__toggler").on('click', function (event) {
  setTimeout(function () {
    $(".fixed-links__toggler").addClass("active");
  }, 100);

  $(".fixed-links").addClass("active");
})


// Set the target date and time for the countdown
const targetDate = new Date($("#countDown1").attr("data-targetTime"));
const targetDate2 = new Date($("#countDown2").attr("data-targetTime"));

// Get references to the HTML elements where we'll display the countdown
const $daysElement = $('#days');
const $hoursElement = $('#hours');
const $minutesElement = $('#minutes');
const $secondsElement = $('#seconds');

const $daysElement2 = $('#days2');
const $hoursElement2 = $('#hours2');
const $minutesElement2 = $('#minutes2');
const $secondsElement2 = $('#seconds2');


// Update the countdown every second
setInterval(updateCountdown, 1000);


function updateCountdown() {
  // Calculate the remaining time in milliseconds
  const now = new Date();
  const remainingTime = targetDate - now;
  const remainingTime2 = targetDate2 - now;

  // Convert the remaining time to days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  const days2 = Math.floor(remainingTime2 / (1000 * 60 * 60 * 24));
  const hours2 = Math.floor((remainingTime2 / (1000 * 60 * 60)) % 24);
  const minutes2 = Math.floor((remainingTime2 / (1000 * 60)) % 60);
  const seconds2 = Math.floor((remainingTime2 / 1000) % 60);

  // Display the remaining time in the HTML elements

  $daysElement.html(days + "<span>Gün</span>");

  $hoursElement.html(hours + "<span>Saat</span>");

  $minutesElement.html(minutes + "<span>Dakika</span>");

  $secondsElement.html(seconds + "<span>Saniye</span>");

  $daysElement2.html(days2 + "<span>Gün</span>");

  $hoursElement2.html(hours2 + "<span>Saat</span>");

  $minutesElement2.html(minutes2 + "<span>Dakika</span>");

  $secondsElement2.html(seconds2 + "<span>Saniye</span>");
}


$(document).ready(function () {

  var stickyNavTop = $('.navbar').offset().top;

  var stickyNav = function () {
    var scrollTop = $(document).scrollTop();


    if (scrollTop > stickyNavTop) {
      $('.navbar').addClass('sticky');

      $(".page-content").not(".intro").css("margin-top", $(".navbar").outerHeight() + 100 +  "px");
      $(".intro").css("margin-top", $(".navbar").outerHeight() +  "px");
    }
    else {
      $('.navbar').removeClass('sticky');
      $(".page-content").not(".intro").css("margin-top", "100px");
      $(".intro").css("margin-top", "0");
    }
  };

  stickyNav();

  $('html').attr('style', '--page-offset: ' + $(".navbar").outerHeight() + 'px;');

  $(window).scroll(function () {
    stickyNav();
  });

  $(".slick-arrow").text(null);
});

if (window.innerWidth >= 768) {
  $(".navbar .mega-menu").mouseleave(function () {
    setTimeout(
      function () {
        $(".mega-menu").removeClass("active");
      }, 300);
  });

  $(".navbar .mega-menu").mouseenter(function () {
    $(".mega-menu").addClass("active");
  });
} else {
  $(".mega-menu").on("click", function () {
    $(".mega-menu").toggleClass("active");
  })
}

$(".toggle").click(function () {
  $(this).toggleClass("active");
  $(".navbar__collapse").toggleClass("active");
})

$('.slider').slick({
  infinite: true,
  dots: true,
  fade: true,
  cssEase: 'linear',
  speed: 200,
});

$('.team__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,

  arrows: false,
  dots: true,

  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
});



$('.news__body__news-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  arrows: true,

  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    }
  ]
});

$(".news--page .news__body__news-slider").slick("unslick");
$(".news--page .news__body-events__slider").slick("unslick");
$(".news--other .news__body__news-slider").slick("unslick");
$(".team--page .team__slider").slick("unslick");

$('.news__body-events__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.locations--branch ul').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});




$('.tag-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


$('.news-detail__gallery').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: false,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.comments__list').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: false,
  arrows: false,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});



var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

$(".top-menu__link").click(function () {
  $(".top-menu__link").toggleClass("active");
})

$("[data-type]").on("click", function () {
  if ($(this).attr("data-type") == "acordion") {
    $(this).find("div").toggleClass("active");
    $(this).toggleClass("active");
  }
})

$("[data-target]").on("click", function(){
  $($(this).attr("data-target")).removeClass("active");
  $(this).find($(this).attr("data-target")).toggleClass("active");
})