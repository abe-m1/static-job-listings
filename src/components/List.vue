<template>
  <div class="container">
    <div class="selected" v-if="activeFilters.length > 0" id="example-1">
      <li v-for="item in activeFilters" :key="item" class="selected-filter">
        <span class="filter-name">{{ item }}</span>
        <a class="close" @click="onClose(item)">X</a>
      </li>
      <li class="clear" @click="reset()">clear</li>
    </div>
    <ul class="results-container">
      <JobItem
        @tagSelect="onTagSelect"
        v-for="job in jobs"
        :job="job"
        :key="job.id"
      ></JobItem>
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
        tools: [],
      },
      activeFilters: [],
      filterMap: {},
    };
  },
  components: {
    JobItem,
  },
  methods: {
    onTagSelect(tag, v) {
      //check if tag already in array
      if (this.filters[v] && !this.filters[v].includes(tag)) {
        // if not push into array
        this.filters[v].push(tag);
        this.activeFilters.push(tag);
      }
      // create map to use in onClose function
      if (!this.filterMap[tag]) {
        this.filterMap[tag] = v;
      }
      this.filterData();
    },
    equals(a, b) {
      return a.every((r) => b.indexOf(r) >= 0);
    },
    reset() {
      this.filters = {
        roles: [],
        levels: [],
        languages: [],
        tools: [],
      };

      this.activeFilters = [];
      this.filterData();
    },
    filterData() {
      this.jobs = json.filter((item) => {
        if (
          item.role.includes(this.filters.roles) &&
          item.level.includes(this.filters.levels) &&
          this.equals(this.filters.tools, item.tools) &&
          this.equals(this.filters.languages, item.languages)
        ) {
          return item;
        }
      });
    },
    onClose(item) {
      this.activeFilters = this.activeFilters.filter((tag) => tag != item);

      if (this.filterMap[item] === 'roles') {
        this.filters[this.filterMap[item]] = this.filters[
          this.filterMap[item]
        ].filter((i) => i != item);
      }
      if (this.filterMap[item] === 'levels') {
        this.filters[this.filterMap[item]] = this.filters[
          this.filterMap[item]
        ].filter((i) => i != item);
      }
      if (this.filterMap[item] === 'tools') {
        this.filters[this.filterMap[item]] = this.filters[
          this.filterMap[item]
        ].filter((i) => i != item);
      }
      if (this.filterMap[item] === 'languages') {
        this.filters[this.filterMap[item]] = this.filters[
          this.filterMap[item]
        ].filter((i) => i != item);
      }
      this.filterData();
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  margin: auto;
}
.selected {
  width: 84%;
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
  top: 40%;
  color: $desaturatedDarkCyan;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
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

  &:hover {
    background-color: black;
  }
}

.filter-name {
  padding: 0 0.5rem;
  font-weight: 700;
}
</style>
