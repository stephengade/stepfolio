<template>
  <div>
    <iframe title="PDF" width="100%" height="700px" :src="`/pdfjs-3.4.120-dist/web/viewer.html?file=${documentUrl}&zoom=30`"></iframe>
  </div>
</template>

<script>
export default {
  name: "MyResume",
  data() {
    return {
      documentUrl: "/01_Stephengade_Frontend.pdf"
    }
  }
}
</script>
