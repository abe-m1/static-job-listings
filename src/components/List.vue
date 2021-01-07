<template>
  <div class="hello">
    <ul class="selected" v-if="activeFilters.length > 0" id="example-1">
      <li v-for="item in activeFilters" :key="item" class="selected-filter">
        {{ item }} <a  class="close" @click="onClose(item)">X</a>
  </li>
</ul>
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
      },
      activeFilters: [],
      filterMap: {}
    
    };
  },
  components: {
    JobItem,
  },
   methods: {
    onTagSelect(tag, v) {
        if (this.filters[v]) {
          this.filters[v].push(tag)
          this.activeFilters.push(tag)
          
        }
        if (!this.filterMap[tag]) {
         this.filterMap[tag] = v;
          
        }
        // this.filters.push({ [`${v}`]: tag})
        this.filterData()
      
    },
    equals(a, b) {
    var b1 = b.sort()
    var a1 = a.sort()
console.log(b)
 return a1.every((v, i) => v === b1[i]);
},
    filterData(){
      console.log('FILTER', JSON.parse(JSON.stringify(this.filters)))
     
      
      this.jobs = json.filter(item => {
        // if (item.role.includes(this.filters.roles) &&
        //   item.level.includes(this.filters.levels) &&
        // console.log(item.languages.filter(language => language.includes(this.filters.languages)))
         if ( item.role.includes(this.filters.roles) &&
          item.level.includes(this.filters.levels) && 
          this.equals(this.filters.tools, item.tools) &&
          this.equals(this.filters.languages, item.languages)
          )
        // item.languages.some(language => language.includes(this.filters.languages))  &&
        // item.tools.some(tool => {
        //   console.log('COMP', tool, this.filters.tools)
        //   return tool.includes(this.filters.tools)
        //   }) )
          // item.tools.filter(tool => tool.includes(this.filters.tools).length > 0)
         
         {
          return item;
        }
//         var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var n = fruits.includes("Mango");
      })
    },
    onClose(item){
      this.activeFilters = this.activeFilters.filter(tag => tag != item)
       console.log('data', JSON.parse(JSON.stringify(this.filterMap)))
      // console.log('reverse', this.filterMap[item], item)

       if ( this.filterMap[item] === 'roles'){
         this.filters[this.filterMap[item]] = this.filters[this.filterMap[item]].filter(i => i != item)
          console.log('data1', JSON.parse(JSON.stringify(this.filters)))
         
       }
       if ( this.filterMap[item] === 'levels'){
         this.filters[this.filterMap[item]] = this.filters[this.filterMap[item]].filter(i => i != item)
          console.log('data1', JSON.parse(JSON.stringify(this.filters)))
         
       }
        if ( this.filterMap[item] === 'tools'){
         this.filters[this.filterMap[item]] = this.filters[this.filterMap[item]].filter(i => i != item)
          console.log('data1', JSON.parse(JSON.stringify(this.filters)))
         
       }
        if ( this.filterMap[item] === 'languages'){
         this.filters[this.filterMap[item]] = this.filters[this.filterMap[item]].filter(i => i != item)
          console.log('data1', JSON.parse(JSON.stringify(this.filters)))
         
       }
        this.filterData()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.selected {
  width: 100%;
  background-color: #fff;
}
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

.selected-filter {
  background-color: $lightGrayishCyan;
  padding: 1rem;
}

.close {
  background-color: $darkGrayishCyan;
}

</style>
