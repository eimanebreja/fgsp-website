<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<!-- <script>
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var objectSelect = $("#scroll-hide");
        var objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
            $(".sidebar").addClass("change");
        } else {
            $(".sidebar").removeClass("change");
        }
    });
});
</script> -->
<script>
$(".portfolio-slider")
    .on("initialized.owl.carousel changed.owl.carousel", function(e) {
        if (!e.namespace) {
            return;
        }
        $("#counter").text(
            e.relatedTarget.relative(e.item.index) + 1 + " - " + e.item.count
        );
    })
    .owlCarousel({
        loop: true,
        margin: 10,
        slideSpeed: 300,
        paginationSpeed: 100,
        autoplay: false,
        items: 1,
        // smartSpeed: 1000,
        // animateIn: 'fadeIn', // add this
        // animateOut: 'fadeOut', // and this
        responsiveClass: true,
        dots: false,
        nav: true,
        center: true,
        mouseDrag: false,
        navText: ["<img src='<?php bloginfo('template_url');?>/assets/images/ic_arrow_left.svg'>",
            "<img src='<?php bloginfo('template_url');?>/assets/images/ic_arrow_right.svg'>"
        ],
    });
</script>
<?php wp_footer();?>
</body>

</html>