<template>
<div>
    <Header meal="Salad"/>
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
<script>
import Header from "./MenuHeader.vue";
export default {
    components:{
        Header,
    }
    
}
</script>