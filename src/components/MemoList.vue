<template>
  <div>
    <div v-for="item in items.memos" :key="item.id">
		
		<v-toolbar flat>
			<v-toolbar-title>メモ</v-toolbar-title>
			<v-spacer></v-spacer>
		</v-toolbar>
		<v-banner
		single-line
		:sticky="sticky">{{ item.text }}
			<v-btn @click="emitDelete(item.id)"
			small
			>
					<v-icon
						color="red"
						small
						>mdi-delete</v-icon>
					</v-btn>
		
		
		</v-banner>
		
		
		
		
    </div>
  </div>
</template>

<style>
div {
  white-space: pre;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Object,
      required: false
    }
  },
  methods: {
    emitDelete(memoId) {
      this.$emit("delete", memoId);
    }
  }
};
</script>