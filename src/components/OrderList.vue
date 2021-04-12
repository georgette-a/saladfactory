<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-sf-green sm:rounded-lg">
        <table class="min-w-full divide-y divide-sf-green">
          <thead class="bg-sf-green">
            <tr>
              <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                Meal
              </th>
              <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                Order Date
              </th>
              <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                Delivery Date
              </th>
              <th scope="col" class="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-sf-green">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-center">
            

                  <div class="ml-4">
                    <div class="text-base  font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div class="text-sm text-gray-900 text-opacity-50">
                      0500000000
                    </div>
                  </div>
    
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <div class="text-base text-gray-900">Garden Salad</div>
                <div class="text-sm text-gray-900 text-opacity-50">Maxi</div>
                
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-center text-base text-gray-500">
                05-05-2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-base  text-gray-500">
                06-05-2021
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                <span class="px-4 inline-flex text-base leading-8 font-semibold rounded-full bg-green-100 text-green-800">
                  Confirmed
                </span>
              </td>
            </tr>

            <!-- More items... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


</template>