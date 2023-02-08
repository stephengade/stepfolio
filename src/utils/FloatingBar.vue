<template>
    <nav role="navigation" className="bg-myWhite fixed left-[50%] -translate-x-[50%] bottom-4 py-4 px-3 rounded-[200px] w-[350px]">
        <ul class="flex justify-center flex-row gap-8">
            <li :className="[currentHash === item.link || isCurrentHome ? 'font-jos py-1 px-3 rounded-[200px] text-myWhite bg-myDark cursor-pointer hover:opacity-60' : 'font-jos text-myDark cursor-pointer hover:opacity-60']" v-for="item in navLinks"
                :key="item.id">
                <router-link :to="item.link">{{ item.text }}</router-link> 
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'FloatingBar',
    data() {
        return {
            navLinks: [
                { id: 1, link: "/", text: "Home" },
                { id: 2, link: "#contact", text: "Contact" },
                { id: 3, link: "#projects", text: "Projects" },
                { id: 4, link: "/", text: "Resume" },
            ],
            currentUrl: this.$router.currentRoute.path,
            currentHash: this.$router.currentRoute.hash,
            isCurrentHome: this.$router.currentRoute.path === '/' || this.$router.currentRoute.hash === '#home'
        
        }
    },
    watch: {
        $route(to) {
            this.currentUrl = to.path;
            this.currentHash = to.hash;
            this.isCurrentHome = to.hash
        }
    }
}
</script>
