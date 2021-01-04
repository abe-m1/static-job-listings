<template>
  <li class="item-container">
    <div>
        <img class="img" :src="job.logo" />
    </div>
   
    <div>

    <span class="original-link">{{job.company}}</span> <span>New!</span> <span>Featured</span>
    </div>
    <p>{{job.position}}</p>
    <div>
      <span>{{job.postedAt}}</span> <span>{{job.contract}}</span> <span>{{job.location}}</span> 
      <hr>
    <div>
      <span>{{job.role}}</span> <span>{{job.level}}</span>
      <span  
        :language="language"
        :key="language" v-for="language in job.languages">{{language}}</span>
       <span  
        :tool="tool"
        :key="tool" v-for="tool in job.tools">{{tool}}</span>
    </div>
    </div>
    <!-- <hr >
      <p class="short-link">{{url.short_link}}</p> 
      <button v-if="this.copied === false" @click="onClick" class="button copy-button">Copy   </button>
      <button v-else class="button copied-button">Copied!</button> -->
  </li>
</template>

<script>
export default {
  name: 'JobItem',
  props: ['job'],
  // data() {
  //   return {
  //     copied: false
  //   }
  // },
//   methods: {
//     onClick: function(){
//       this.copied = true;
//     }
// }
};
</script>

<style scoped lang="scss">
  .item-container {
    border: 1px solid black;
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;

  }

  .img {
    width: 100px;
  }
</style>