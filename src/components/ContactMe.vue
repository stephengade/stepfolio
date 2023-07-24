<template>
    <div class="h-full relative mt-[4rem] md:mt-[8rem] section" id="contact">
        <h2 class="text-white hero-title md:pr-[50%] text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
            <span class="md:title">Ready to work together</span>?
        </h2>

        <div class="flex flex-col md:flex-row gap-4 md:gap-[20%] mt-10">
            <div class="w-2/2 md:w-1/2">
                <p class="text-myWhite font-jos text-base">
                    I am actively seeking new opportunities and am available for remote, freelance or contract work.
                </p>

                <p class="text-myWhite mt-5 font-jos text-base">
                    If you're interested in discussing potential projects or learning more about my skills and experience,
                    please feel free to contact me. I look forward to connecting with you and exploring how I can contribute
                    to your organization's success remotely.
                </p>
            </div>

            <div class="">
                <ul v-for="item in footer_data" :key="item.link">
                    <li class="text-myWhite hover:text-blue-500 font-jos text-base mb-2 list-disc list-inside">
                        <a :href="item.link" target="_blank">{{ item.text }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <img class="hidden h-[500px] rotate-peep md:block absolute z-10 right-0 -top-40 md:-mr-[5rem] xl:-mr-[10rem]" src="../assets/peeping.png" alt="" />
    </div>
</template>
    
<script>
import { footerData } from '@/data/footerData';

export default {
    name: "ContactMe",
    data() {
  return {
    footer_data: footerData
     }
    }
   
}

</script>
  
<style>
.rotate-peep {
  transform: rotate(-60deg);
}
</style>
    
    