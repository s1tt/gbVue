<template>
  <article>
    <h2>{{ product.name }}</h2>
    <p>{{ formattedPrice }}</p>
    <p v-if="product.avalible">Available</p>
    <p v-else>Out of stock</p>
  </article>
</template>

<script>
export default {
  name: 'ProductDetails',
  data() {
    return {
      product: {
        name: 'ProductName',
        price: 99.99,
        avalible: true,
      },
    };
  },
  computed: {
    formattedPrice: function () {
      return `$${this.product.price}`;
    },
  },
};
</script>
