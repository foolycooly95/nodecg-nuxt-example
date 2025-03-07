<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const formData = ref({});

    const getData = async () => {
      try {
        const response = await fetch("http://localhost:9090/scoreboard", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        formData.value = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch data!");
      }
    };

    onMounted(() => {
      getData();
    });

    const submitForm = async () => {
      try {
        if (!formData.value || Object.keys(formData.value).length === 0) {
          alert("Form data is invalid or empty!");
          return;
        }

        const response = await fetch("http://localhost:9090/scoreboard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData.value),
        });

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to submit data!");
      }
    };

    return {
      formData,
      submitForm,
    };
  },
};
</script>

<template>
  <div>
    <h1>Update Game Info</h1>
    <form @submit.prevent="submitForm">
      <div class="player">
        <div>
          <label for="p1name"><b>Player 1</b><br />Name:</label>
          <input type="text" id="p1name" v-model="formData.p1name" required />
        </div>
        <div>
          <label for="p2score"><br />Score:</label>
          <input
            type="number"
            id="p1score"
            v-model="formData.p1score"
            required
          />
        </div>
      </div>
      <div class="player">
        <div>
          <label for="p2name"><b>Player 2</b><br />Name:</label>
          <input type="text" id="p2name" v-model="formData.p2name" required />
        </div>
        <div>
          <label for="p2score"><br />Score:</label>
          <input
            type="number"
            id="p2score"
            v-model="formData.p2score"
            required
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.player {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}

h1,
label {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

div {
  margin-right: 1rem;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  margin-right: 0.5rem;
}

input,
button {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

#p1score,
#p2score {
  max-width: 3rem;
}
</style>
