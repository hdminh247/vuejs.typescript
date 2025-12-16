<script setup lang="ts">
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    import { useAuthStore } from '../stores/auth';
    const authStore = useAuthStore();

    const data: Record<string, string> = reactive({
        username: '',
        password: '',
        errorMessages: ''
    });

    const handleSubmit = async () => {
        if(data.username && data.password) {
            const error = await authStore.login(data.username, data.password);

            if(!error) {
                router.push('/home');
                return;
            }

            data.errorMessages = error

        }
        
    }
</script>

<template>
    <div class="flex flex-col h-[100vh] w-[100vw] justify-center items-center">
        <h1>Login</h1>

        <form @submit.prevent="handleSubmit">
            <div>
                <input type="text" placeholder="Username" v-model="data.username" />
            </div>
           
            <div>
                <input type="password" placeholder="Password" v-model="data.password" />
            </div>

            <div v-if="data.errorMessages" class="text-[#ff0000]">
                Error: {{ data.errorMessages }}
            </div>

            <div>
                <button type="submit" class="border border-black py-2 px-4 cursor-pointer">Login</button>
            </div>
           
           
        </form>
    </div>
</template>