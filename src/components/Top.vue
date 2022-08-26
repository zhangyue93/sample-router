<template>
  <div>
	<v-banner
	icon="mdi-send"
	class="font-weight-black text-h5 cyan--text text--darken-1"
	>簡単メモ帳</v-banner>  
	<p></p>
    <v-form @submit.prevent="login">
      <label for="name" class="font-weight-black">お名前</label>
      <div>
		<v-col
		cols="4">
			<v-text-field
				:counter="20"
				:rules="[v => !!v || 'Item is required']"
				label="name"
				id="name"
				v-model="nameForm.name"
			></v-text-field>
		</v-col>
      </div>
      <span v-if="error.inValid">お名前を入力してください</span>
      <div>
        <v-btn type="submit">利用する</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameForm: {
        name: ""
      },
      error: {
        inValid: false
      }
    };
  },
  methods: {
    login() {
      if (this.nameForm.name === "") {
        this.error.inValid = true;
        return;
      } else {
        this.error.inValid = false;
      }
      this.$store.dispatch("login", this.nameForm.name);
      this.$router.push("/memo");
    }
  }
};
</script>
