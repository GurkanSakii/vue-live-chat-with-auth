<template>
  <nav>
    <div class="container">
      <NavbarTo />
      <ChatWindow />
      <NewChatForm />
    </div>
  </nav>
</template>

<script>
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { watch } from "vue";
import getUser from "@/composables/getUser";
import NavbarTo from "../components/NavbarTo.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    NavbarTo,
    NewChatForm,
    ChatWindow
  },

  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
