<script>
import { defineComponent } from "vue";
import { useReplicant } from "nodecg-vue-composable";

export default defineComponent({
  setup() {
    const scoreboard = useReplicant("scoreboard");
    return { scoreboard };
  },
});
</script>

<template>
  <div class="container">
    <div class="player-name">{{ scoreboard.data.p1name }}</div>
    <div class="game-info">
      <div class="score">
        {{ scoreboard.data.p1score }}
      </div>
      <div class="vs">vs</div>
      <div class="score">
        {{ scoreboard.data.p2score }}
      </div>
    </div>
    <div class="player-name">{{ scoreboard.data.p2name }}</div>
  </div>
</template>

<style scoped>
.container {
  background-color: black;
  display: flex;
  width: 1260px;
  justify-content: space-between;
  align-items: center;
  margin: 38px auto;
  padding: 16px;
  height: 64px;
  font-size: 2rem;
  vertical-align: top;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.player-name {
  color: white;
}

.game-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.score {
  background-color: white;
  color: black;
  padding: 8px;
  border-radius: 4px;
}

.vs {
  color: white;
}
</style>
