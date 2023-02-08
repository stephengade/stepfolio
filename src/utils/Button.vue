<template>
 <button className="bg-myDark rounded-[200px] py-2 px-3 text-myWhite font-jos border-solid border-[2px] border-myWhite hover:border-red-600">
    {{text}}
 </button>
</template>

<script>

export default {
    name: 'primaryButton',
    props: {
        text: String
    },
}
</script>