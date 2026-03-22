export default {
  data() {
    return {
      packs: []
    }
  },
  mounted() {
    fetch('data/packs.json')
      .then(res => res.json())
      .then(data => this.packs = data)
  },
  template: `
    <div>
      <h1>Packs</h1>
      <div v-for="pack in packs" :key="pack.name"
           :style="{background: pack.color, padding: '10px', margin: '10px 0'}">
        {{ pack.name }} ({{ pack.levels.length }} levels)
      </div>
    </div>
  `
}
