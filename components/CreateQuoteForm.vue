<template>
  <form class="flex flex-col justify-center items-center mt-20">
    <label for="name">Author Name</label>
    <input v-model="author" class="input" type="text" name="name" id="name" />
    <label for="quote">Quote</label>
    <textarea
      v-model="quote"
      class="input"
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
  methods: {
    async writeToFirestore() {
      let uuid = uuidv4();
      const ref = doc(db, "quotes", uuid);
      const document = {
        id: uuid,
        author: this.author,
        text: this.quote,
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
  },
};
</script>

<style scoped>
.input {
  border: 1px solid black;
  margin: 10px;
  width: 60vw;
  border-radius: 5px;
}
</style>
