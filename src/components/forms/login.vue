<template>
    <div class="bg-white Form__wrapper Form__wrapper--small">
        <h2 class="pt-10 text-3xl font-bold text-center text-blue-500 ">Login</h2>
        <input type="password" placeholder="password" v-model="password">
        <button class="block mx-auto button" @click="submit">Submit</button>
        <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        password: '',
        error: null
    }),

    methods: {
        async submit() {
            try {
                const res = await fetch(`${process.env.VUE_APP_API_URL}/login`, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  redirect: 'follow',
                  referrerPolicy: 'no-referrer',
                  body: JSON.stringify({ password: this.password })
                });
                const response = await res.json();
                if (res.status !== 200) {
                    this.error = await response.error;
                    return;
                } else {
                    document.cookie = `sessionID=${response.accessToken};`
                }
                this.$emit('close');
            } catch (error) {
                this.error = error;
            }
        }
    }
};
</script>

<style>
 .Form__wrapper--small {
     height: auto;
 }
</style>
