<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">{{friend.name}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 34566 70",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "3244 54221 46",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>