<template>
  <div class="hello">
    <div class="selected" v-if="activeFilters.length > 0" id="example-1">
      <li v-for="item in activeFilters" :key="item" class="selected-filter">
        <span class="filter-name">{{ item }}</span> <a  class="close" @click="onClose(item)">X</a>
  </li>
  <li class="clear" @click="reset()">clear</li>
</div>
   <ul class="results-container">
      <JobItem
        @tagSelect="onTagSelect"
        v-for="job in jobs"
        :job="job"
        :key="job.id"></JobItem>
  </ul>
  
  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Abe Menashy</a>.
  </div> -->
  </div>
</template>

<script>
import json from '../../data.json';
import JobItem from './JobItem';
export default {
  name: 'List',
  data() {
    return {
      jobs: json,
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
      this.filterData() 
    },
    equals(a, b) {
    var b1 = b.sort()
    var a1 = a.sort()
//  return a1.every((v, i) => v === b[i]);
      return a1.every(r=> b1.indexOf(r) >= 0)
  },
  reset(){
    this.filters = {
      roles: [],
      levels: [],
      languages: [],
      tools: []
    };

    this.activeFilters= [];
    this.filterData();
  },
  filterData(){
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
  width: 80%;
  border-radius: 10px;
  margin: auto;
  padding: 1rem;
  background-color: #fff;
  display: inline-block;
  display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    position: relative;
    margin-top: -6rem;

}
.clear {
  position: absolute;
  right: 4px;
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
  color: $lightGrayishCyanDeep;
}

.selected-filter {
  background-color: $lightGrayishCyan;
  display: flex;
  width: 7rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-right: 2rem;
  margin-bottom: 1rem;
}

.close {
  background-color: $desaturatedDarkCyan;
  padding: 10px 15px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  font-weight: 700;

  &:hover{
    background-color: black;
  }
}
.filter-name{
  padding: 0 .5rem;
  font-weight: 700;
}

</style>
