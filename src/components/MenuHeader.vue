<template>
     <!--Header-->
    <div class="px-10">
        <div class="flex items-center justify-between">
    <div class="flex-1 min-w-0">
        <h2 class="text-3xl font-semibold text-gray-700 sm:truncate">
        {{meal}} Menu
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
</template>
<script>
export default {
   props: {
    meal: String
  }
}
</script>