<template>
  <div>
    <h1>Image Minifier</h1>
    <span>Please input your file here:</span>
    <input type="file" ref="file" v-on:change="handleFileUpload()" />
    <button v-on:click="onSubmit()">Submit</button>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import get from 'lodash/get'
import postFileForMinification from '../client'

export default {
  name: 'ImageMinifier',
  methods: {
    handleFileUpload: function() {
      this.file = get(this, ['$refs', 'file', 'files', '0'])
    },
    onSubmit: function() {
      const formData = new FormData()
      formData.append('file', this.file)

      postFileForMinification(formData)
    }
  },
  data: () => ({
    file: ''
  })

}
</script>
