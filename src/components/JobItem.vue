<template>
  <li class="item-container">
    <div>
        <img class="img" :src="job.logo" />
    </div>
   
    <div>

    <span class="company">{{job.company}}</span> <span class="new">New!</span> <span class="featured">Featured</span>
    </div>
    <p class="position">{{job.position}}</p>
    <div>
      <span>{{job.postedAt}}</span> <span>&bull;</span> <span>{{job.contract}}</span> <span>&bull;</span> <span>{{job.location}}</span> 
      <hr>
    <div class="filter-items">
      <span class="tag" @click="onTagSelect(job.role, 'roles')">{{job.role}}</span>
       <span class="tag" @click="onTagSelect(job.level, 'levels')">{{job.level}}</span>
      <span
        class="tag"  
        @click="onTagSelect(language, 'languages')"
        :language="language"
        :key="language" v-for="language in job.languages">{{language}}</span>
       <span
        class="tag" 
        @click="onTagSelect(tool, 'tools')" 
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
   methods: {
    onTagSelect(tag, v) {
      console.log('tag', tag, v)
      this.$emit("tagSelect", tag, v);
      // this.$emit("videoSelect", video);
      
    },
  },
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
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    background-color: #fff;
    border-left: 4px solid $desaturatedDarkCyan;
     text-align: left;
    border-radius: 4px;
     box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
     padding: 1rem;

  }

  .img {
    margin-top: -2rem;
    width: 50px;
  }

  .company {
    font-weight: 700;
  }

  .tag {
    margin-left: 1rem;
    padding: 5px;
    background-color: $lightGrayishCyan;
    border-radius: 3px;
    margin-bottom: 1rem;
  }
  .new {
    background-color: cyan;
    padding: .1rem .6rem;
    border-radius: 12px;
    text-transform: uppercase;
    font-size: .8rem;
  }

   .featured {
    background-color: grey;
    color: white;
    padding: .1rem .6rem;
    border-radius: 12px;
    text-transform: uppercase;
    font-size: .8rem;
  }
  .position {
    font-weight: 700;
    color: grey;
  }
  .filter-items {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>