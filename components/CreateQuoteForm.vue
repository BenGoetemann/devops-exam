<template>
  <form class="flex flex-col justify-center w-full items-center mt-20">
    <label for="name">Author Name</label>
    <input
      class="w-full rounded-md p-3 hover:shadow-lg mb-3"
      v-model="author"
      type="text"
      name="name"
      id="name"
    />
    <label for="quote">Quote</label>
    <textarea
      v-model="quote"
      class="w-full rounded-md p-3 mb-10 hover:shadow-lg"
      name="quote"
      id="quote"
      cols="30"
      rows="10"
    ></textarea>
    <Button @clickEvent="writeToFirestore()" text="Add Quote" />
    <NuxtLink :to="{ path: '/' }">Zurück</NuxtLink>
  </form>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      author: "",
      quote: "",
    };
  },
  mounted() {
    console.log(Date.now());
  },
  methods: {
    async writeToFirestore() {
      let uuid = uuidv4();
      const ref = doc(db, "quotes", uuid);
      const document = {
        id: uuid,
        author: this.author,
        text: this.quote,
        date: this.createDate()
      };
      try {
        await setDoc(ref, document);
        alert("Success!");
        this.$router.push("/");
        this.author = "";
        this.quote = "";
      } catch (e) {
        alert("Error!");
        console.error(e);
      }
    },
    createDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const today = new Date();

      return today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
    },
  },
};
</script>

<style scoped>
</style>
