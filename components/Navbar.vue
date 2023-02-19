<template>
  <nav class="bg-transparent header border-b-transparent xl:h-20 sticky top-0 z-50 transition-all ease-in-out">
        <div class="container xl:w-10/12 2xl:w-9/12 mx-auto xl:px-3">
            <div class="xl:grid xl:grid-cols-7 w-full place-items-center xl:place-items-start">
                <div class="xl:col-span-2 grid grid-cols-8">
                    <div class="xl:hidden col-span-2"></div>
                     <NuxtLink to="/"  class="router-link-active router-link-exact-active text-center xl:text-left my-3 xl:my-0 xl:py-5 block col-span-4 xl:col-span-3
                     text-primary-700 dark:text-white" >
                        <img src="~/assets/images/logo.png" alt="logo">
                     </NuxtLink>
                </div>
                <div class="xl:col-span-3 xl:text-center navbar-link hidden xl:block">
                    <ul class="xl:flex xl:gap-5 xl:place-content-center">
                        <li class="relative">
                           <NuxtLink :to="{name:'integration'}" class="block text-sm xl:text-normal p-3.5 xl:px-2 xl:py-7"><span>Integration</span></NuxtLink>
                        </li>
                        <li class="relative">
                            <NuxtLink :to="{name:'about'}" class="block text-sm xl:text-normal p-3.5 xl:px-2 xl:py-7"><span>About</span></NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="xl:col-span-2 navbar-shortcut hidden ml-auto xl:flex">
                    <ul class="xl:flex xl:gap-7 xl:place-content-end">
                        <li>
                            <a href="https://dashboard.kiriminaja.com/v3/mbr20/register" class="block text-sm xl:text-normal p-3.5 xl:px-0 xl:py-7">
                                <span>Masuk</span>
                            </a>
                        </li>
                        <li class="xl:py-4 pt-2 pb-5 px-3 xl:px-0">
                            <a href="https://dashboard.kiriminaja.com/v3/mbr20/register" class="block text-white py-3 pl-5 pr-14 rounded-full relative bg-primary-700 hover:bg-primary-600">
                                <span>Daftar Gratis</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 right-5 -translate-y-1/2" width="24" height="24" view-box="0 0 24 24" stroke-width="2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <line x1="13" y1="18" x2="19" y2="12"></line>
                                    <line x1="13" y1="6" x2="19" y2="12"></line>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
