function hideProductModal() {
  const productModal = document.querySelectorAll('product-modal[open]');
  productModal && productModal.forEach((modal) => modal.hide());
}

document.addEventListener('shopify:block:select', function (event) {
  hideProductModal();
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function () {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft,
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function (event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

document.addEventListener('shopify:section:load', () => {
  hideProductModal();
  const zoomOnHoverScript = document.querySelector('[id^=EnableZoomOnHover]');
  if (!zoomOnHoverScript) return;
  if (zoomOnHoverScript) {
    const newScriptTag = document.createElement('script');
    newScriptTag.src = zoomOnHoverScript.src;
    zoomOnHoverScript.parentNode.replaceChild(newScriptTag, zoomOnHoverScript);
  }
});

document.addEventListener('shopify:section:reorder', () => hideProductModal());

document.addEventListener('shopify:section:select', () => hideProductModal());

document.addEventListener('shopify:section:deselect', () => hideProductModal());

document.addEventListener('shopify:inspector:activate', () => hideProductModal());

document.addEventListener('shopify:inspector:deactivate', () => hideProductModal());


$(document).ready(function(){
  // Back to Top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

// Accordion
$(function() {
    // (Optional) Active an item if it has the class "is-active"    
    $(".accordion > .accordion-item.is-active").find(".metafield-rich_text_field").slideDown();
    
    $(".accordion > .accordion-item").click(function() {
        // Cancel the siblings
        $(this).siblings(".accordion-item").removeClass("is-active").find(".metafield-rich_text_field").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").find(".metafield-rich_text_field").slideToggle("ease-out");
    });

    // Ensure panels are hidden initially
    $(".accordion .metafield-rich_text_field").hide();
});

jQuery(document).ready(function($) {
    // Loop through each accordion item
    $('.accordion-item').each(function() {
        // Find the metafield-rich_text_field element within this accordion item
        var metafieldContent = $(this).find('.metafield-rich_text_field');

        // Find the accordion-panel element within this accordion item
        var accordionPanel = $(this).find('.accordion-panel');

        // Check if metafield content is not already moved
        if (!metafieldContent.hasClass('moved')) {
            // Move the metafield content inside this accordion panel
            metafieldContent.appendTo(accordionPanel);

            // Add a class to mark that content has been moved
            metafieldContent.addClass('moved');
        }
    });
});

jQuery(document).ready(function($) {
    // Check if the active class is present
    if ($('.header__menu-item .header__active-menu-item').length > 0) {
        // Hide the SVG element
        $('.header__menu-item .header__active-menu-item').siblings('svg').hide();
    }
});  
jQuery(document).ready(function($) {
  // Hide the search icon when the search form is clicked
  $('.search-modal__form').on('click', function() {
    $('.icon-search').css('display', 'none'); // Hide the search icon
  });

  // Show the search icon when anything other than the search form is clicked
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.search-modal__form').length) {
      $('.icon-search').css('display', 'inline-block'); // Show the search icon
    }
  });
});
