<template>
  <li class="item-container" v-bind:class="{ 'feature-selected': job.featured }">
    <div>
        <img class="img" :src="job.logo" alt="job.company"/>
    </div>
   
    <div class=company-info>

    <span class="company">{{job.company}}</span> <span v-if="job.new" class="new">New!</span> <span v-if="job.featured" class="featured">Featured</span>
    
    <p class="position">{{job.position}}</p>
    
      <span>{{job.postedAt}}</span> <span>&bull;</span> <span>{{job.contract}}</span> <span>&bull;</span> <span>{{job.location}}</span> 
      <hr class="horizontal-rule">
    </div>
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
    },
  },
};
</script>

<style scoped lang="scss">
  .item-container {
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    background-color: #fff;
     text-align: left;
    border-radius: 4px;
     box-shadow: 0px 3px 15px  hsla(180, 29%, 50%, .3);
     padding: 1rem;

    @include respond(tab-port) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .feature-selected {
    border-left: 4px solid $desaturatedDarkCyan;
  }

  .img {
    margin-top: -2rem;
    width: 50px;
    margin-bottom: .6rem;

    @include respond(tab-port) {
      margin-top: 0;
      width: 90px;
    }
  }

  .company-info {
    @include respond(tab-port) {
      margin-right: auto;
      margin-left: 4rem;
    }
  }

  .company {
    font-weight: 700;
    color: $desaturatedDarkCyan;
  }

  .new {
    background-color: $desaturatedDarkCyan;
    padding: .2rem .6rem;
    border-radius: 12px;
    text-transform: uppercase;
    font-size: .8rem;
    color: hsl(180, 31%, 95%);
    font-weight: 700;
  }

   .featured {
    background-color: black;
    color: white;
    padding: .2rem .6rem;
    border-radius: 12px;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 700;
  }

  .horizontal-rule {
    margin-top: 1rem;
    @include respond(tab-port) {
      display: none;
    }
  }

  .tag {
    margin-left: 1rem;
    padding: 5px 10px;
    background-color: $lightGrayishCyan;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-weight: 700;
    color: $desaturatedDarkCyan;

    &:hover{
      background-color: $desaturatedDarkCyan;
      color: $lightGrayishCyan;
    }
  }
  
  .position {
    font-weight: 700;
    color: black;
  }
  .filter-items {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
</style>