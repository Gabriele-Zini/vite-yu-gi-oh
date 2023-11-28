import { reactive } from "vue";

export const store = reactive({
  characters: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?",
  loading: false,
});


