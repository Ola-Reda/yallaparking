//slick slider
$('.slick-slider').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

//silder
$('.slick-slider-center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    dots: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
        }
    }
    ]
});



$('.multiple-items').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    infinite: true,
    dots: true,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
        }
    },
    {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
        }
    }
    ]
});


// swiper slider
let swiper = new Swiper(".feature .mySwiper", {
    slidesPerView: 5,
    spaceBetween: 15,
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 5,
        },
    },
});


//scroll top 
let element = document.querySelector(".scroll-top");

window.onscroll = function () {
    if (this.scrollY >= 600){
        element.classList.add("show");
    } else {
        element.classList.remove("show");
    }
};

element.onclick = function() {
    window.scrollTo({
        top: 0, 
        behavior: "smooth",
    });
};
