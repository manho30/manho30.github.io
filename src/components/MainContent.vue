<template>
  <div class="relative text-gray-600 antialised">
    <div class="absolute w-full min-h-screen">
      <div class="absolute z-0 w-full px-12 pt-20 bg-start bg-cover h-1/2"
           style="background-image: url(https://images.unsplash.com/photo-1605379399642-870262d3d051);">
      </div>
    </div>
    <div class="relative z-10 flex items-center justify-center h-auto min-h-screen">
      <div class="relative max-w-lg md:max-w-xl lg:max-w-4xl">
        <div
            class="absolute inset-0 z-10 transform rounded-lg shadow-lg bg-gradient-to-r from-primary to-secondary -skew-y-2 sm:skew-y-0 sm:-rotate-2">
        </div>
        <div
            class="relative z-20 flex items-center justify-between p-4 bg-white rounded-lg shadow-lg md:p-6 lg:p-12 md:max-w-xl lg:max-w-4xl ">
          <div class="flex flex-col justify-between py-6 space-y-6 md:pr-10">
            <div>
              <h2 class="text-md md:text-lg">Hello, my name is</h2>
              <h1 class="text-3xl font-bold text-gray-800 md:text-4xl">Man Ho</h1>
              <p class="mt-1 text-gray-400">UI/UX Desginer, Software Developer, Photographer</p>
            </div>
            <p class="text-md md:text-xl"></p>
          </div>
          <img src="https://i.imgur.com/l9138GP.png" alt="Memoji"
               class="w-40 h-40 rounded-full md:w-60 md:h-60 md:flex-shrink-0">
        </div>
      </div>
    </div>

    <!-- work section -->
    <section id="work" class="px-8 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl text-gray-800">Work</h1>
          <p class="pt-2 text-xl">Projects I have worked on</p>
        </div>
        <div class="grid mt-16 grid-cols-2 lg:grid-cols-3 gap-14">
          <!-- work-1 -->
          <div class="bg-white rounded-lg shadow-md lg:col-span-2">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800">Project 1</h3>
              <p class="pt-3">My Covid API</p>
              <p class="mt-2 text-gray-400 font-xs">Turn Malaysia Covid-19 pandemic data wrapper into RESTful API. Powered by CITF and Ministry of Health Malaysia.</p>
              <a href="https://github.com/manho30/covidapi"
                 class="inline-block px-6 py-2 mt-4 text-sm text-white transition duration-300 bg-indigo-400 rounded-md shadow-md hover:bg-indigo-500 hover:shadow-xl">Github</a>
            </div>
          </div>
          <!-- work-2 -->
          <div class="bg-white rounded-lg shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800">Project 2</h3>
              <p class="pt-3">抖音视频API</p>
              <p class="mt-2 text-gray-400 font-xs">抖音小视频解析API。可获取无水印链接</p>
              <a href="https://github.com/manho30/douyinapi"
                 class="inline-block px-6 py-2 mt-4 text-sm text-white transition duration-500 bg-indigo-400 rounded-md shadow-md hover:bg-indigo-500 hover:shadow-xl">Github</a>
            </div>
          </div>
          <!-- work-3 -->
          <div class="bg-white rounded-lg shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800">Project 3</h3>
              <p class="pt-3">Youtube Video Downloader</p>
              <p class="mt-2 text-gray-400 font-xs">A static HTML web app allow you downloading video from YouTube</p>
              <a href="https://youtubedl.manho30.me"
                 class="inline-block px-6 py-2 mt-4 text-sm text-white transition duration-500 bg-indigo-400 rounded-md shadow-md hover:bg-indigo-500 hover:shadow-xl">Github</a>
            </div>
          </div>
          <!-- work-4 -->
          <div class="bg-white rounded-lg shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800">Project 4</h3>
              <p class="pt-3">微信推送天气</p>
              <p class="mt-2 text-gray-400 font-xs">模仿抖音上的给女朋友发送天气的小程序，基于Python编写。</p>
              <a href="https://github.com/manho30/wechat-push-weather"
                 class="inline-block px-6 py-2 mt-4 text-sm text-white transition duration-500 bg-indigo-400 rounded-md shadow-md hover:bg-indigo-500 hover:shadow-xl">Github</a>
            </div>
          </div>
          <!-- work-3 -->
          <div class="bg-white rounded-lg shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-800">Project 5</h3>
              <p class="pt-3">坤音键盘</p>
              <p class="mt-2 text-gray-400 font-xs">鸡你实在是太美</p>
              <a href="https://github.com/manho30/kunboard"
                 class="inline-block px-6 py-2 mt-4 text-sm text-white transition duration-500 bg-indigo-400 rounded-md shadow-md hover:bg-indigo-500 hover:shadow-xl">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
}
</script>