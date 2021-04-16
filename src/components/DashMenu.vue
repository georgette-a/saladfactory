<template>
    <div class="grid grid-cols-6">
        <div class="grid grid-col col-span-1 pt-10">
        <div class="fixed flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div class="fixed flex flex-col left-0 w-40 bg-white h-full border-none">
                <div class="overflow-x-hidden pt-8 flex-grow">
                    <ul class="flex flex-col py-4 space-y-1">
                        <li class="px-5">
                            <div class="flex flex-row items-center h-8">
                                <div class="text-base font-semibold  text-gray-700">Menus</div>
                            </div>
                        </li>
                        <li>
                            <router-link to="/dashmenu/breakfastmenu"  class="relative flex flex-row items-center h-11 text-sm focus:outline-none hover:bg-green-50 text-sf-light-green font-semibold hover:text-sf-green border-l-4 border-transparent hover:border-sf-green pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-3 h-3" fill="currentColor" stroke="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4444 0H0V7.77778C0 9.49667 1.39222 10.8889 3.11111 10.8889H7.77778C9.49667 10.8889 10.8889 9.49667 10.8889 7.77778V5.44444H12.4444C12.857 5.44444 13.2527 5.28056 13.5444 4.98883C13.8361 4.69711 14 4.30145 14 3.88889V1.55556C14 0.692222 13.3078 0 12.4444 0ZM12.4444 3.88889H10.8889V1.55556H12.4444V3.88889ZM0 12.4444H12.4444V14H0V12.4444Z"/></svg>
                                </span>
                                <span class="ml-2 text-sm truncate">Breakfast</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dashmenu/saladmenu" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-50 text-sf-light-green font-semibold hover:text-sf-green border-l-4 border-transparent hover:border-sf-green pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-3 h-3" fill="currentColor" stroke="none" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2763 0.23551C13.1402 -0.0683085 12.7513 -0.0804612 12.5885 0.206344C11.835 1.51641 10.486 2.33308 8.94507 2.33308H7.00062C4.42423 2.33308 2.33396 4.42335 2.33396 6.99974C2.33396 7.16987 2.3534 7.33272 2.37042 7.498C3.92111 6.38724 6.15965 5.44418 9.33396 5.44418C9.54785 5.44418 9.72285 5.61918 9.72285 5.83307C9.72285 6.04696 9.54785 6.22196 9.33396 6.22196C3.22354 6.22196 0.632568 9.96744 0.0589566 11.3747C-0.10146 11.7709 0.0881233 12.223 0.484304 12.3858C0.882915 12.5511 1.335 12.3591 1.50028 11.9654C1.53673 11.8779 2.00826 10.8011 3.24785 9.76327C4.03535 10.8303 5.53257 11.8487 7.49889 11.6397C11.3149 11.3626 14.0006 7.94036 14.0006 3.75009C14.0006 2.52995 13.7381 1.26606 13.2763 0.23551Z"/>
                                    </svg> 
                                </span>
                                <span class="ml-2 text-sm truncate">Salad</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dashmenu/dessertmenu" class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-50 text-sf-light-green font-semibold hover:text-sf-green border-l-4 border-transparent hover:border-sf-green pr-6">
                                <span class="inline-flex justify-center items-center ml-4">
                                    <svg class="w-3 h-3" fill="currentColor" stroke="none" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0C7.46297 0 7.90698 0.183915 8.23435 0.511285C8.56172 0.838655 8.74564 1.28266 8.74564 1.74564C8.74564 2.20861 8.56172 2.65262 8.23435 2.97999C7.90698 3.30736 7.46297 3.49127 7 3.49127C6.53703 3.49127 6.09302 3.30736 5.76565 2.97999C5.43828 2.65262 5.25436 2.20861 5.25436 1.74564C5.25436 1.28266 5.43828 0.838655 5.76565 0.511285C6.09302 0.183915 6.53703 0 7 0ZM9.70224 2.44389C11.1895 2.44389 12.586 3.8404 12.586 5.23691C14.4713 5.23691 14.4713 8.02993 12.586 8.02993H1.41397C-0.471322 8.02993 -0.471322 5.23691 1.41397 5.23691C1.41397 3.8404 2.81047 2.44389 4.29776 2.44389C4.60499 3.65187 5.70125 4.53865 7 4.53865C8.29875 4.53865 9.39501 3.65187 9.70224 2.44389ZM2.11222 9.42643H4.20698L4.90524 14.3142H3.50873L2.11222 9.42643ZM5.60349 9.42643H8.39651L7.69825 14.3142H6.30175L5.60349 9.42643ZM9.79302 9.42643H11.8878L10.4913 14.3142H9.09476L9.79302 9.42643Z"/>
                                    </svg>
                                </span>
                                <span class="ml-2 text-sm truncate">Dessert</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
           
           
            </div></div>
            <div class="grid grid-col col-span-5 py-8 mx-auto">
                <router-view></router-view>
            </div>
    </div>
</template>

<script>

export default {
  
}
</script>