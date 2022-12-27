<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div class="carousel-item active float-left w-full">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="block w-full" alt="Wild Landscape" />
      </div>
      <div class="carousel-item float-left w-full">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="block w-full" alt="Camera" />
      </div>
      <div class="carousel-item float-left w-full">
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="block w-full" alt="Exotic Fruits" />
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <main>
    <div class="PRODUCT-CATEGORIES grid grid-rows-2 grid-cols-2 gap-5 p-5 lg:p-12">
      <div class="relative">
        <img class="w-full"
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="">
        <h3 class="h3 absolute top-5 left-5 text-gray-300">Clothing</h3>
      </div>
      <div class="relative">
        <img class="w-full"
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="">
        <h3 class="h3 absolute top-5 left-5 text-gray-300">Gadjets</h3>
      </div>
      <div class="relative">
        <img class="w-full"
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="">
        <h3 class="h3 absolute top-5 left-5 text-gray-300">Accessories</h3>
      </div>
      <div class="relative">
        <img class="w-full"
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="">
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
  </main>
</template>
