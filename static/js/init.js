import { set_page_info } from './set_page_info.js'

function add_navbar() {
  $('#navbar').html(str_navbar)

  // Visible
  if (SITE_TYPE == 0) {
    try {
      $('#solution').css('display', 'block');
      $('#contact_us').css('display', 'block');
    } catch (e) { console.log(e) }
  }

  // Site Name
  try {
    $('#about_nav').text("關於 " + SITE_NAME)
  } catch (e) { console.log(e) }


  // Set navbar
  var path = window.location.pathname;
  var page = path.split("/").pop().split(".html")[0]
  if (page === "")
    page = "index"

  var selector = "#" + page;
  $(selector).addClass('active');
}

function add_footer() {
  // str_footer
  $('#footer').html(str_footer)

  // Site Name
  try {
    $('#about_fot1').html("關於 " + SITE_NAME)
    $('#about_fot2').html("關於 " + SITE_NAME)
    $('#copyright').html("Copyright © 2023 " + COPYRIGHT)

    // Visible
    if (SITE_TYPE == 0) {
      $('#solution_fot1').css('display', 'block');
      $('#solution_fot2').css('display', 'block');
      $('#contact_us_fot1').css('display', 'block');
      $('#contact_us_fot2').css('display', 'block');
    }
  } catch (e) { console.log(e) }
}

function logout() {
  // Modify account
  var dataJSON = {};
  dataJSON.token = getLocalStorage("jwt");
  $.ajax({
    url: HOST_URL_TPLANET_DAEMON + "/accounts/verify_jwt",
    type: "POST",
    async: false,
    crossDomain: true,
    data:  dataJSON,
    success: function(returnData) {
       const obj = JSON.parse(returnData);
       // Clear local storage
       localStorage.clear();

       window.location.replace("/index.html");
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });
}

function set_navbar_animation() {
  $('.navbar').hover(function() {
    $('.navbar').removeClass('blur');
  });

  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    // scroll down
    if (scrollTop > lastScrollTop){
      $('.navbar').addClass('blur');
      lastScrollTop = scrollTop;
      return;
    }

    // scroll up
    $('.navbar').removeClass('blur');
    lastScrollTop = scrollTop;
  });
}

function navbar(email) {
  add_navbar()
  add_footer()
  set_navbar_animation()

  // home logo href
  if (SITE_HOSTERS.includes(email)) {
    document.getElementById("index_logo").href = "/index.html";

    try {
      var obj_account_status = document.getElementById("account_status");
      for (const child of obj_account_status.children) {
        child.style.display = "none";
      }

      var obj_a = document.createElement("a");
      obj_a.className = "nav-link fw-bold";
      obj_a.href="javascript:void(0)"
      obj_a.onclick= function(e){
        logout()
      }


      var obj_img = document.createElement("img");
      obj_img.className = "align-text-top";
      obj_img.src="/static/imgs/logout.svg";
      obj_img.style="height:25px";
      obj_a.innerText = "登出";

      obj_a.append(obj_img);

      obj_account_status.append(obj_a);
    } catch(e) { console.log(e) }
  }
}

// set page info
set_page_info();

// Get group
var email = getLocalStorage("email");

// navbar
navbar(email);

// footer
add_footer();
