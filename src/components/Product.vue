<script setup lang="ts">
    interface Props{
        product: {
            name: string;
            price: number;
        }
    }
    defineProps<Props>()
</script>

<template>
<div>
    <div>{{ product.name }}</div>
    <div>{{ product.price }}</div>
</div>
</template>