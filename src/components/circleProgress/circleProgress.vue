<template>
  <div class="hemp-circle">
    <svg viewBox="0 0 100 100" width="300" height="300">
      <defs v-if="isGradient">
        <linearGradient
          :id='id'
          x1="10%"
          y1="45%"
          x2="50%"
          y2="0%">
          <stop offset="0%" :style="{'stop-color': strokeColor[0], 'stop-opacity': 1}"/>
          <stop offset="100%" :style="{'stop-color': strokeColor[1], 'stop-opacity': 1}"/>
        </linearGradient>
      </defs>
      <path
        :d="pathString"
        :stroke-linecap="strokeLinecap"
        :stroke="trailColor"
        :stroke-width="trailWidth"
        :style="pathStyle2"
        :fill-opacity="0"/>
      <path
        :d="pathString"
        :stroke-linecap="strokeLinecap"
        :stroke="isGradient ? url : strokeColor"
        :stroke-width="strokeWidth"
        fill-opacity="0"
        :style="pathStyle"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'hemp-circle',
  props: {
    strokeWidth: {
      type: Number,
      default: 1,
    },
    strokeColor: {
      type: [Array, String],
      default: '#3FC7FA',
    },
    trailWidth: {
      type: Number,
      default: 1,
    },
    trailColor: {
      type: String,
      default: '#D9D9D9',
    },
    percent: {
      type: Number,
      default: 0,
    },
    strokeLinecap: {
      type: String,
      default: 'round',
    },
    anticlockwise: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: 'hemp-circle-gradient',
    },
  },
  computed: {
    url () {
      return 'url(#' + this.id + ')'
    },
    radius () {
      return 50 - this.strokeWidth / 2
    },
    pathString () {
      return `M 50,50 m 0,-${this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
      a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
    },
    len () {
      return Math.PI * 2 * this.radius
    },
    pathStyle () {
      let style = {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${(((100.0 - this.percent + (this.percent * 1 / 4)) / 100.0) * this.len)}px`,
        'transition': 'stroke-dashoffset .6s ease-in-out 0s, stroke .6s ease-in-out'
      }
      // console.log(JSON.stringify(style))
      return style
    },
    pathStyle2 () {
      let style = {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${this.len * (1.0 / 4)}px`,
      }
      // console.log(JSON.stringify(style))
      return style
    },
    isGradient () {
      return typeof this.strokeColor !== 'string'
    },
  },
}
</script>

<style lang="scss" scoped>
  .hemp-circle {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
