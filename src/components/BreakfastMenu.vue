<template>
<div>
    <!--Header-->
    <div class="px-10">
        <div class="flex items-center justify-between">
    <div class="flex-1 min-w-0">
        <h2 class="text-3xl font-semibold text-gray-700 sm:truncate">
        Breakfast Menu
        </h2>
        
    </div>
    <div class="mt-5 flex -0 ml-4">
        <span class="hidden sm:block">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sf-green">
            <!-- Heroicon name: solid/pencil -->
            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit
        </button>
        </span>

        <span class="sm:ml-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sf-green hover:bg-sf-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sf-green">
            <!-- Heroicon name: solid/check -->
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Publish
        </button>
        </span>
    </div>
    </div>
    </div>
    <!--Header Ends-->
    <div>
            <!-- Question Listing Item Card -->
    <div class="bg-white rounded-2xl border-solid border-opacity-20 border-sf-green border-2 duration-500 px-2  py-4 my-6">
        <div class="grid grid-cols-12 gap-3">
            <!-- Meta Column -->
            <div class="col-span-0 sm:col-span-2 text-center hidden sm:block">
                

                <!-- Answer Counts -->
                <div class="grid grid-rows-1 mx-auto mb-3 py-1">
                    <div class="inline-block items-center">
                      <img class=" w-20 h-20 rounded-full" src="https://source.unsplash.com/random/500x500" alt="picture">
                    </div>
                </div>

                
            </div>

            <!-- Summary Column -->
            <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
                <div class="mt-2 font-semibold text-lg text-sf-dark-green">
                    Only Me
                </div>
                <div class="mt-2 font-normal text-sm">

                    <p class="mt-2 text-gray-600">
                        Salad, ipsum dolor sit, amet consectetur, adipisicing elit,
                        Tempora expedita, dicta...
                    </p>
                </div>

                <!-- Size Labels -->
                <div class="grid grid-cols-2 mt-4 my-auto">
                    <!-- Categories  -->
                    <div class="col-span-12 ">
                       
                        <a href="#" class="inline-block rounded-full text-white 
                            bg-sf-green hover:bg-sf-dark-green duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            Mini - GHS 35
                        </a>
                        <a href="#" class="inline-block rounded-full text-white 
                            bg-sf-green hover:bg-sf-dark-green duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            Maxi - GHS 45
                        </a>

                        <a href="#" class="inline-block rounded-full text-green 
                            border-sf-green hover:bg-sf-dark-green duration-300 
                            text-xs font-bold  border-solid border-2
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1  text-sf-green
                            opacity-90 hover:opacity-100">
                           Edit
                        </a>

                    </div>

                   
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>