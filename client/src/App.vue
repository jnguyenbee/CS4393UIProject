<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
//import Home from './pages/Home';
import NavBar from './components/NavigationBar';
export default {
  name: 'app',
  components: {
    NavBar: NavBar,
  },
};
</script>
