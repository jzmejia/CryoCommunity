<template>
  <v-form>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
      outlined
      rounded
      dense
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      title: "Preliminary report",
      email: "",
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>
