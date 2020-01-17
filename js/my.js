$(function() {
      $("#c-btn1_inner").click(function()/*ボタンがクリックされた時*/{
        if (!/*論理否定演算子、「じゃない時」という意味*/$("#c-btn1_inner").hasClass("js-menu--show"))/*cssのみのクラス*/{
          $("#c-btn1_inner").addClass("js-menu--show");
          $("#c-btn1_menu").fadeIn();
        } else {
          $("#c-btn1_inner").removeClass("js-menu--show")
          $("#c-btn1_menu").fadeOut();
        }
      })
    });