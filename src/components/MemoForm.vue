<template>
  <div>
    
	<v-banner
	icon="mdi-account large "
	class="font-weight-black text-h6 cyan--text text--darken-3"
	>ようこそ、{{ name }}さん</v-banner>  
	<p></p>
	
    <v-form @submit.prevent="postMemo">
      <label for="memo" class="font-weight-black">メモ</label>
      <div>
        <v-textarea 
		
		outlined
		label="メモを入力してください"
		id="memo" cols="30" rows="10" v-model="memo.text"></v-textarea>
      </div>
      <span v-if="error.inValid" class="red--text">メモを入力してください</span>
	  <p></p>
      <div>
        <v-btn type="submit">メモする</v-btn>
      </div>
    </v-form>
	<p></p>
    <MemoList :items="this.memoList" @delete="deleteMemo"/>
	<p></p>
    <RouterLink to="/">トップに戻る</RouterLink>
  </div>
</template>

<script>
import MemoList from "./MemoList";

export default {
  components: {
    MemoList
  },
  computed: {
    name() {
      return this.$store.getters["name"];
    }
  },
  data() {
    return {
      memo: {
        id: null,
        text: ""
      },
      error: {
        inValid: false
      },
      memoList: {
        memos: []
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.memoList.memos = JSON.parse(localStorage.getItem(this.name)) || [];
    });
  },
  methods: {
    postMemo() {
      if (this.memo.text === "") {
        this.error.inValid = true;
        return;
      } else {
        this.error.inValid = false;
      }
      const text = this.memo.text;
      const memosLength = this.memoList.memos.length;
      this.memoList.memos.push({
        id: memosLength === 0 ? 0 : this.memoList.memos[memosLength - 1].id + 1,
        text: text
      });
      this.memo.text = "";
    },
    deleteMemo(memoId) {
      const afterMemos = this.memoList.memos.filter(memo => {
        return memo.id !== memoId;
      });
      this.memoList.memos = afterMemos;
    }
  },
  watch: {
    memoList: {
      handler(newVal) {
        localStorage.setItem(this.name, JSON.stringify(newVal.memos));
      },
      deep: true
    }
  }
};
</script>