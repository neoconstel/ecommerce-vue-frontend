<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onMounted } from 'vue';

onMounted(() => {

  (function tailwindCollapseController(breakpoint) {
    /**
     * This function hooks an eventlistner that ensures that at the initial
     * page load and at every screen resize, a given collapsable component
     * is made to either be in its collapsible state or in a normal state
     * with the collapse switches hidden. This allows for perfect responsiveness
     * of the collapsible component. A perfect example is an accordion which
     * is only an accordion at small screen size, but spreads out uncollapsible
     * at large screen size. That is also the initial use-case for which this
     * function was designed.
     * 
     * @breakpoint (int): screensize in pixels for a collapse
     */

    const collapseSwitchesInContactsSection = 
          document.querySelectorAll(".contacts [data-bs-toggle='collapse']")

    const collapseElementsInContactSection = 
          document.querySelectorAll(".contacts .collapse")

    function screenWidthBelow() {
      return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
    }

    function updateCollapseState() {
      collapseSwitchesInContactsSection.forEach((toggler) => {
        if (screenWidthBelow()) {
          toggler.setAttribute('data-bs-toggle', 'collapse')
          toggler.classList.remove("hidden")
        }
        else {
          toggler.setAttribute('data-bs-toggle', '')
          toggler.classList.add("hidden")
        }
      })

      collapseElementsInContactSection.forEach((toggled) => {
        if (screenWidthBelow())
          toggled.classList.add('collapse')
        else
          toggled.classList.remove('collapse')
      })
    }

    updateCollapseState()

    window.addEventListener('resize', () => {
      // console.log(`window resized. new width: ${window.innerWidth}`)
      updateCollapseState()
    })

  })(1024) //collapsible at this breakpoint

})
</script>

<template>
  <header>
    <div class="HEADER-STRIP h-12 bg-pink-500">scrolling text/notice</div>
    <nav
  class="NAV-BAR relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
      <a class="text-xl text-white pr-2 font-semibold" href="#">PrimaX</a>
      <!-- Left links -->
      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item p-2">
          <RouterLink class="nav-link text-white" to="/">Home</RouterLink>
        </li>
        <li class="nav-item p-2">
          <RouterLink class="nav-link text-white" to="/about">About</RouterLink>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="flex items-center relative">
      <!-- Icon -->
      <a class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4" href="#">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="shopping-cart"
          class="w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
          ></path>
        </svg>
      </a>
      <div class="dropdown relative">
        <a
          class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
          <span
            class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
            >1</span
          >
        </a>
        <ul
          class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Another action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Something else here</a
            >
          </li>
        </ul>
      </div>
      <div class="dropdown relative">
        <a
          class="dropdown-toggle flex items-center hidden-arrow"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            class="rounded-full"
            style="height: 25px; width: 25px"
            alt=""
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Another action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Something else here</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
    </nav>
    <div class="HEADER-STRIP h-12 bg-pink-500">latest stuffs sorta</div>
  </header>

  <RouterView />

  <footer>
      <section class="contacts">
        <div
          class="flex flex-col lg:flex-row justify-center gap-x-16 lg:gap-x-8 p-16 bg-gray-500 [&>div>p]:text-sm [&>div>p>a]:text-sm [&>div.collapse>*]:mt-3 [&>div>p]:text-gray-200 [&>div>p>a]:text-gray-200 mt-12 space-y-5 lg:[&>div>p]:mb-3">
          <div>
            <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out"
              data-bs-toggle="collapse" href="#newsLetter" role="button" aria-expanded="false"
              aria-controls="newsLetter">NEWSLETTER</a>
            <hr class="mt-2">
          </div>
          <div class="collapse" id="newsLetter">
            <h4 class="text-center text-gray-800">Newsletter:::</h4>
            <p>Get the Latest PrimaX News and Giveaways</p>
            <form class="flex items-center rounded-3xl h-10 border-2 border-solid border-gray-400" action="">
              <svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
              <input class="w-9/12 bg-transparent rounded-3xl focus:outline-none" type="text"
                placeholder="Enter Your Email Address">
              <button class="h-5/6 w-3/12 bg-gray-900 text-gray-300 rounded-3xl m-1" type="submit">Subscribe</button>
            </form>
            <p>SERVICE HOURS: Monday-Friday 9AM to 8PM</p>
            <p>CUSTOMER SERVICE: +234 818 999 7890（First Choice） +234 809 666 0999</p>
            <p>Whatsapp: +234 978 999 5432 +234 705 999 8765</p>
          </div>
          <div>
            <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out"
              data-bs-toggle="collapse" href="#about" role="button" aria-expanded="false" aria-controls="about">PRIMAX</a>
            <hr class="mt-2">
          </div>
          <div class="collapse" id="about">
            <h4 class="text-center text-gray-800">About PrimaX:::</h4>
            <p><a href="">About Us</a></p>
            <p><a href="">Where to Buy</a></p>
            <p><a href="">Special Offer</a></p>
          </div>
          <div>
            <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out"
              data-bs-toggle="collapse" href="#terms" role="button" aria-expanded="false" aria-controls="terms">TERMS</a>
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
            <a class="text-gray-100 inline-block w-full h-full transition duration-150 ease-in-out"
              data-bs-toggle="collapse" href="#help" role="button" aria-expanded="false" aria-controls="help">GET HELP</a>
            <hr class="mt-2">
          </div>
          <div class="collapse" id="help">
            <h4 class="text-center text-gray-800">Get Help:::</h4>
            <p><a href="">Visit Orihime Care</a></p>
            <p><a href="">Track Your Order</a></p>
            <p><a href="">Contact Us</a></p>
          </div>
        </div>
      </section>
      <section class="copyright">
        <div class="[&>*]:text-center bg-gray-900 p-6 text-gray-500">
          <h2 class="">PrimaX</h2>
          <p class="mb-3"><small>smart accessories</small></p>
          <p>© 2022 primaX. Copyright © 2021 primaX Technology Ltd</p>
        </div>
      </section>
  </footer>
</template>
