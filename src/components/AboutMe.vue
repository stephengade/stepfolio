<template>
    <div class="h-full mt-[8rem] relative section" id="about">
        <h2 class="text-white hero-title text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
            <span class="md:title"> Who is Stephen? </span>
        </h2>

        <!-- about -->

        <div class="inner flex flex-col w-full  md:flex-row md:justify-between items-center  my-[2rem]">
            <div class="about_content w-2/2 md:w-1/2">
                <p class="text-myWhite font-jos text-base">
                    Stephen Gbolagade is a 4years+ experienced frontend engineer with a passion for creating impactful
                    digital experiences. With a strong background in content creation, digital marketing, and a proficiency
                    in low-code tools, Stephen enjoys building custom web applications and other digital solutions that
                    solve complex problems for clients in various industries.
                </p>

                <p class="text-myWhite font-jos my-5 text-base">
                    He has worked with several brands, including <a href="https://intodoors.com" target="_blank"
                        class="underline">Intodoors Inc</a>., <a href="https://agconsultingmedia.com/" target="_blank"
                        class="underline">AG Consulting Media Inc.</a>, Chess Hero, <a href="https://incover.ng"
                        target="_blank" class="underline">Incover</a>, <a href="https://healthfeedplus.com/" target="_blank"
                        class="underline">HealthFeedPlus</a>, Aeroseeds, <a href="https://openwaver.com" class="underline"
                        target="_blank">Openwaver</a> and many other brands where he honed his skills in frontend
                    engineering, project management, and no/low-code services.
                </p>

                <p class="text-myWhite font-jos my-5 text-base">
                    Besides product and software engineering, Stephen writes content about business and startups on his blog
                    <a class="underline" target="_blank" href="https://gbolamedia.com">GbolaMedia</a>. Talking about everything Android at <a class="underline" target="_blank" href="https://androidsy.com">Androidsy.com</a>, and writing
                    technical articles at <a href="https://dev.to/stephangade" target="_blank" class="underline">Dev.to
                        community</a>
                </p>


                <p class="text-myWhite font-jos my-5 text-base">
                    He owns a digital agency called <a href="https://gbolabyte.com" class="underline"
                        target="_blank">Gbolabyte web solutions</a> previously "Olgade digital agency" which he founded in
                    2018, and registered with the Nigeria's Corporate Affairs Commission (CAC) in 2019.
                </p>

                <p class="text-myWhite font-jos text-base">
                    Currently, Stephen is a frontend engineer at <a href="https://homesilo.africa" class="underline"
                        target="_blank">Homesilo</a>, where he brings a blend of technical expertise and product vision to
                    the team. He is known for his collaborative approach, working closely with designers, developers, and
                    getting user feedback to bring ideas to life.
                </p>

            </div>

            <div class="image w-2/2 md:w-1/2 hidden md:block">
                <img src="../assets/stephengade-face.jpg" alt="Stephen Gbolagade - Frontend engineer in Nigeria"
                    class="grayscale-100 cursor-pointer zoom-image hover:grayscale-0 w-[500px] -top-[40px] right-0 h-[500px] rounded-full absolute" />
            </div>

        </div>

        <!-- brands -->
        <div class="mt-24">

            <Brands />

        </div>


    </div>
</template>


    
<script>
import Brands from "@/components/MyBrands.vue"

export default {
    name: "AboutPage",
    components: {
        Brands
    }
}
</script>
    
    
    