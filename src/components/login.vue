<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-24 w-auto" src="../assets/logo.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-normal text-gray-900">
        Sign in to the <span class="font-medium" id="half-highlight">Salad Factory</span> 
      </h2>
      <p class="mt-2 text-center text-sm text-gray-400">
        Enter your
        <strong class="font-medium text-sf-green">
          administrator credentials
        </strong>
        in the form below.
      </p>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-600 rounded-t-md focus:outline-none focus:ring-sf-green focus:border-sf-green focus:z-10 sm:text-sm" placeholder="Email address">
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-600 rounded-b-md focus:outline-none focus:ring-sf-green focus:border-sf-green focus:z-10 sm:text-sm" placeholder="Password">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-sf-green focus:ring-sf-green border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-500">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-sf-green hover:text-green-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
</template>
<script>
export default {
    name:'Login'
}
</script>
<style scoped>
#half-highlight {
    
    background-image: linear-gradient(to right, transparent 50%, #6FCF97 50%);
    background-origin: 0;
    background-size: 200% 30%;
    background-repeat: repeat-x;
    background-position: -100% 80%;
    transition: background-position 0.5s;
  }
</style>