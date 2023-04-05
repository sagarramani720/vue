<template>
  <h1 class="main-h1">Puzzle Game</h1>
  <div>
    <form id="puzzle-app" action="/puzzle" method="post" novalidate="true">
      <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
      </div>
      <input ref="fileInput" type="file" @input="pickFile">
      <label class="border">Board size:</label>
      <input type="number" name="width" min="2" max="3" class="width" value="3" required>&nbsp; * &nbsp;
      <input type="number" name="height" min="2" max="3" class="height" value="3" required><br><br>
      <button class="start-btn" @click="$router.push('/puzzle')" type="submit" value="submit">Start</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click()
    },
    pickFile() {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    }
  }
}
</script>