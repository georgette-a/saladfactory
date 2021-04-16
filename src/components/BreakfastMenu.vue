/* eslint-disable no-unused-vars */
<template>
<div>
   <Header meal="Breakfast"/>
    <div class=" overflow-y-scroll h-1/3">
    <!-- Question Listing Item Card -->
    <ul>
        <li v-for="meal in bkmenu" v-bind:key="meal.id">
        <div class="bg-white rounded-2xl border-solid border-opacity-20 border-sf-green border-2 duration-500 px-2  py-4 my-6">
            <div class="grid grid-cols-12 gap-3">
            

                <!-- Summary Column -->
                <div class="col-span-12 sm:col-start-2 sm:col-end-12 px-3 sm:px-0">
                    <div class="mt-2 font-semibold text-lg text-sf-dark-green">
                        {{meal.name}}
                    </div>
                    <div class="mt-2 font-normal text-sm">

                        <p class="mt-2 text-xs text-opacity-60 italic text-gray-600">
                            {{meal.description}}
                        </p>
                    </div>

                    <!-- Size Labels -->
                    <div class="grid grid-cols-2 mt-4 my-auto">
                        <!-- Categories  -->
                        <div class="col-span-12 ">
                        
                            <a href="#" class="inline-block rounded-full text-white 
                                bg-sf-dark-green hover:bg-sf-dark-green duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">
                                GHS {{meal.price}}
                            </a>
                            <a href="#" class="inline-block rounded-full text-white 
                                bg-sf-green hover:bg-sf-dark-green duration-300 
                                text-xs font-bold 
                                mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                opacity-90 hover:opacity-100">
                                {{meal.size}}
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
        </li>
    </ul>
    </div>
</div>
</template>
<script>
import Header from "./MenuHeader.vue";
import db from './firebaseInit'

export default {
    data () {
        return {
      bkmenu: []
        }
    },

    components:{
        Header,
    },    
    created () {
      db.collection('menus/saladMenu/breakfastMenu').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          const data = {
            'id': doc.id,
            'name': doc.data().name,
            'size': doc.data().servingSize,
            'description': (doc.data().content).toString(),
            'price': doc.data().price
          }
          this.bkmenu.push(data)
        })
      })
    }
        
            
}
</script>