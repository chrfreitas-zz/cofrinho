<script>
  export let max;
  export let current;

  const totalCircle = 629;
  const currentPercentagem = current !== 0 ? current / max : 0;
  const currentCicle =
    currentPercentagem !== 0 ? totalCircle * currentPercentagem : 0;
</script>

<style>
  @keyframes load {
    0% {
      stroke-dashoffset: 0;
    }
  }

  .progress-circle {
    position: relative;
    display: inline-block;
    padding: 0;
    text-align: center;
  }

  .progress-circle > li {
    display: inline-block;
    position: relative;
    text-align: center;
    color: #93a2ac;
  }

  .progress-circle > li:after {
    content: attr(data-percent);
    position: absolute;
    width: 100%;
    top: 3.7rem;
    left: 0;
    font-size: 2rem;
    text-align: center;
  }

  .progress-circle svg {
    width: 15rem;
    height: 15rem;
  }

  .progress-circle svg:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    transform: rotate(-90deg);
  }

  .progress-circle svg:nth-child(2) path {
    fill: none;
    stroke-width: 25;
    stroke-dasharray: 629;
    stroke: #fff;
    opacity: 0.9;
    animation: load 1.2s;
  }
</style>

<ul class="progress-circle">
  <li data-name="CSS Skill" data-percent={currentPercentagem * 100}>
    <svg viewBox="-10 -10 220 220">
      <g fill="none" stroke-width="3" transform="translate(100,100)">
        <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
        <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
        <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
        <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
        <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
        <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
      </g>
    </svg>
    <svg viewBox="-10 -10 220 220">
      <path
        d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525
        0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475
        200,100 Z"
        stroke-dashoffset={totalCircle} />
    </svg>
  </li>
</ul>

<svg width="0" height="0">
  <defs>
    <linearGradient
      id="cl1"
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="1"
      y2="1">
      <stop stop-color="#f57c00" />
      <stop offset="100%" stop-color="#d76600" />
    </linearGradient>
    <linearGradient
      id="cl2"
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="0"
      x2="0"
      y2="1">
      <stop stop-color="#d76600" />
      <stop offset="100%" stop-color="#b44c00" />
    </linearGradient>
    <linearGradient
      id="cl3"
      gradientUnits="objectBoundingBox"
      x1="1"
      y1="0"
      x2="0"
      y2="1">
      <stop stop-color="#b44c00" />
      <stop offset="100%" stop-color="#913200" />
    </linearGradient>
    <linearGradient
      id="cl4"
      gradientUnits="objectBoundingBox"
      x1="1"
      y1="1"
      x2="0"
      y2="0">
      <stop stop-color="#913200" />
      <stop offset="100%" stop-color="#c55800" />
    </linearGradient>
    <linearGradient
      id="cl5"
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="1"
      x2="0"
      y2="0">
      <stop stop-color="#c55800" />
      <stop offset="100%" stop-color="#dc6900" />
    </linearGradient>
    <linearGradient
      id="cl6"
      gradientUnits="objectBoundingBox"
      x1="0"
      y1="1"
      x2="1"
      y2="0">
      <stop stop-color="#dc6900" />
      <stop offset="100%" stop-color="#f57c00" />
    </linearGradient>
  </defs>
</svg>
