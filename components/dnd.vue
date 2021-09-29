<template>
  <div>
    <div
      class="w-full h-24 flex flex-row items-center justify-center overflow-y-scroll bg-gray-100 border border-gray-300"
      @dragover.prevent="dragover"
      @dragleave.prevent="dragleave"
      @drop.prevent="drop"
    >
      <input
        type="file"
        multiple
        name="fields[assetsFieldHandle][]"
        id="assetsFieldHandle"
        class="w-px h-px opacity-0 overflow-hidden absolute"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="assetsFieldHandle" class="flex flex-row items-center justify-center w-full h-full cursor-pointer">
        <span class="mdi mdi-file"></span>
      </label>
    </div>
    <div>
      <ul class="mt-4" v-if="this.filelist.length">
        <li
          class="text-sm p-1 flex flex-row justify-between items-center h-10 hover:bg-green-500 cursor-pointer"
          v-for="(file, index) in filelist"
          v-bind:key="index"
          @click="clickFile(file)"
        >
          <div class="whitespace-nowrap overflow-hidden overflow-ellipsis mr-5">{{ file.name }}</div>
          <button
            class="bg-gray-400 hover:bg-red-400 px-2 rounded-sm h-8 whitespace-nowrap"
            type="button"
            @click="remove(filelist.indexOf(file))"
            title="Remove file"
          >
            <span class="mdi mdi-delete text-white text-xl"></span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: [],
    }
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files]
      console.log(this.filelist)
    },
    remove(i) {
      this.filelist.splice(i, 1)
    },
    dragover(event) {
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100')
        event.currentTarget.classList.add('bg-green-300')
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },
    drop(event) {
      const fileURL = event.dataTransfer.getData('URL')
      console.warn('⬇️ Drop event:', event.dataTransfer.dropEffect)
      if (fileURL) {
        // IMAGE DROPPED IS FROM A URL -- PARSE IT USING FETCH
        console.warn({ fileURL })
        fetch(fileURL)
          .then((response) => response.blob())
          .then((blob) => console.log(blob))
      }
      this.$refs.file.files = event.dataTransfer.files
      this.onChange() // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add('bg-gray-100')
      event.currentTarget.classList.remove('bg-green-300')
    },
    clickFile(file) {
      console.log('File clicked', file)
    },
  },
}
</script>

<style></style>
