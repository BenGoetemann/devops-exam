<template>
  <div class="flex flex-col justify-center items-center mt-20">
    <div v-for="quote in quotes" :key="quote.id">
      <QuoteContainer :author="quote.author" :text="quote.text" />
    </div>
  </div>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import { getDocs, collection } from "firebase/firestore";

export default {
  name: "IndexPage",
  data() {
    return {
      quotes: [],
    };
  },
  async fetch() {
    const querySnapshot = await getDocs(collection(db, "quotes"));
    try {
      querySnapshot.forEach((doc) => {
        this.quotes.push(doc.data());
      });
    } catch (e) {
      console.error(e);
    }
  },
  fetchOnServer: false,
};
</script>
