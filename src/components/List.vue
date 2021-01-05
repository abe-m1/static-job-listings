<template>
  <div class="hello">

   <ul class="results-container">
      <JobItem
        @tagSelect="onTagSelect"
        v-for="job in jobs"
        :job="job"
        :key="job.id"></JobItem>
  </ul>
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
  </div>
</template>

<script>
import json from '../../data.json';
import JobItem from './JobItem';
export default {
  name: 'List',
  props: {
    msg: String
  },
  data() {
    return {
      jobs: json,
      loading: false,
      error: false,
      filters: {
        roles: [],
        levels: [],
        languages: [],
        tools: []
      }
    
    };
  },
  components: {
    JobItem,
  },
   methods: {
    onTagSelect(tag, v) {
      console.log('in parent', tag, v)
        if (this.filters[v]) {
          this.filters[v].push(tag)
        }
        // this.filters.push({ [`${v}`]: tag})
        this.filterData()
      
    },
    filterData(){
      console.log('data', JSON.parse(JSON.stringify(this.filters)))
     
      
      this.jobs = this.jobs.filter(item => {
        // if (item.role.includes(this.filters.roles) &&
        //   item.level.includes(this.filters.levels) &&
        console.log(item.languages.filter(language => language.includes(this.filters.languages)))
         if ( item.role.includes(this.filters.roles) &&
          item.level.includes(this.filters.levels) && 
        item.languages.some(language => language.includes(this.filters.languages))  &&
        item.tools.some(tool => tool.includes(this.filters.tools)) )
          // item.tools.filter(tool => tool.includes(this.filters.tools).length > 0)
         
         {
          console.log('is here')
          return item;
        }
//         var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var n = fruits.includes("Mango");
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
