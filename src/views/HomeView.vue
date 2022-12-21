<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>

    <main>
      <div class="PRODUCT-CATEGORIES grid grid-rows-2 grid-cols-2 gap-5 p-5 lg:p-12">
        <div class="relative">
          <img class="w-full" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
          <h3 class="h3 absolute top-5 left-5 text-gray-300">Clothing</h3>
        </div>
        <div class="relative">
          <img class="w-full" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
          <h3 class="h3 absolute top-5 left-5 text-gray-300">Gadjets</h3>
        </div>
        <div class="relative">
          <img class="w-full" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
          <h3 class="h3 absolute top-5 left-5 text-gray-300">Accessories</h3>
        </div>
        <div class="relative">
          <img class="w-full" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="">
          <h3 class="h3 absolute top-5 left-5 text-gray-300">Electronics</h3>
        </div>
      </div>

      <h2 class="text-center text-gray-800">Product Showcase</h2>
      <p class="text-center text-sm text-gray-800 my-3">Up to 50% off!</p>

      <div class="PRODUCT-SHOWCASE flex w- whitespace-nowrap overflow-auto scrollbar-hide" v-dragscroll="true">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
        <img class="w-96 h-60 inline-block" alt="gallery"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">    
      </div>
      
      <h2 class="text-center text-gray-800 mt-10">Freshly Added</h2>
      <p class="text-center text-sm text-gray-800 my-3">All new arrival products and trends here!</p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5"> 
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

      <div class="flex flex-col lg:flex-row justify-center gap-x-16 p-16 bg-gray-500 [&>div>p]:text-sm [&>div>p>a]:text-sm [&>div.collapse>*]:mt-3 [&>div>p]:text-gray-200 [&>div>p>a]:text-gray-200 mt-12 space-y-5">
        <div>
          <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#newsLetter" role="button" aria-expanded="false" aria-controls="newsLetter">NEWSLETTER</a>
          <hr class="mt-2">
        </div>
        <div class="collapse" id="newsLetter">
          <h4 class="text-center text-gray-800">Newsletter:::</h4>
          <p>Get the Latest PrimaX News and Giveaways</p>
          <form class="flex items-center rounded-3xl h-10 border-2 border-solid border-gray-400" action="">
            <svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            <input class="w-9/12 bg-transparent rounded-3xl focus:outline-none" type="text" placeholder="Enter Your Email Address">
            <button class="h-5/6 w-3/12 bg-gray-900 text-gray-300 rounded-3xl m-1" type="submit">Subscribe</button>
          </form>
          <p>SERVICE HOURS: Monday-Friday 9AM to 8PM</p>
          <p>CUSTOMER SERVICE: +234 818 999 7890（First Choice）    +234 809 666 0999</p>
          <p>Whatsapp: +234 978 999 5432  +234 705 999 8765</p>
        </div>
        <div>
          <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#about" role="button" aria-expanded="false" aria-controls="about">PRIMAX</a>
          <hr class="mt-2">
        </div>
        <div class="collapse" id="about">
          <h4 class="text-center text-gray-800">About PrimaX:::</h4>
          <p><a href="">About Us</a></p>
          <p><a href="">Where to Buy</a></p>
          <p><a href="">Special Offer</a></p>
        </div>
        <div>
          <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#terms" role="button" aria-expanded="false" aria-controls="terms">TERMS</a>
          <hr class="mt-2">
        </div>
        <div class="collapse" id="terms">
          <h4 class="text-center text-gray-800">Terms:::</h4>
          <p><a href="">Warranty</a></p>
          <p><a href="">Order & Shipping</a></p>
          <p><a href="">Replacement & Refund</a></p>
          <p><a href="">Terms & Conditions</a></p>
          <p><a href="">Privacy Policy</a></p>
        </div>
        <div>
          <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#help" role="button" aria-expanded="false" aria-controls="help">GET HELP</a>
          <hr class="mt-2">
        </div>
        <div class="collapse" id="help">
          <h4 class="text-center text-gray-800">Get Help:::</h4>
          <p><a href="">Visit Orihime Care</a></p>
          <p><a href="">Track Your Order</a></p>
          <p><a href="">Contact Us</a></p>
        </div>
      </div>
    </main>
</template>
