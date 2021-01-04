<template>
  <div class="hello">

   <ul class="results-container">
      <JobItem
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
      error: false
    };
  },
  components: {
    JobItem,
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
