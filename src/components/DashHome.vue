<template>
<div>
    <div class="mx-auto pl-8 pt-8 ">
        <div class="text-3xl text-gray-900 pt-8 font-medium">
            Welcome Astrid,
        </div>
        <div class="text-sm text-gray-900 text-opacity-50">These are some updates from the factory for this week!</div>
    </div>
    <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-10 pt-16">
        <div class="p-8 bg-sf-light-green items-center text-center bg-opacity-10 rounded">
            <div class="text-xl font-semibold text-gray-900">Total Sales</div>
            <div class="text-sm text-gray-900 text-opacity-50 ">This week, you have made</div>
            <div class="text-4xl font-semibold text-sf-dark-green pt-2">{{weeklyrevenue}}</div>
        </div>
        <div class="p-8 bg-sf-light-green items-center text-center bg-opacity-10 rounded">
            <div class="text-xl font-semibold text-gray-900">Scheduled Deliveries</div>
            <div class="text-sm text-gray-900 text-opacity-50 ">This week you, have scheduled</div>
            <div class="text-4xl font-semibold text-sf-dark-green pt-2">{{deliveryCount}} Deliveries</div>
        </div>
        <div class="p-8 bg-sf-light-green items-center text-center bg-opacity-10 rounded">
            <div class="text-xl font-semibold text-gray-900">Completed Deliveries</div>
            <div class="text-sm text-gray-900 text-opacity-50 ">This week you, have completed</div>
            <div class="text-4xl font-semibold text-sf-dark-green pt-2">{{compdeliveries}} Deliveries</div>
        </div>
    </div>
    <div class="px-10 mx-auto pt-16">
        <div class="pb-8 text-3xl font-medium">Upcoming Orders</div>
        <Orders/>
    </div>
</div>
</template>
<script>
import Orders from './OrderList.vue';
export default {
    props:{
        weeklyrevenue: String,
        deliveryCount: String,
        compdeliveries: String

    },
    data () {
            return {

    }
    },

    components: {
        Orders
        }
}
</script>