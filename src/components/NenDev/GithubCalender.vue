<template>
  <div class="grid place-content-center">
    <div class="calendar-controls grid place-content-center">
      <button @click="loadPreviousMonth">Previous Month</button>
      <button @click="loadCurrentMonth">Current Month</button>
    </div>
    <div class="calendar">
      <div class="calendar-header">
        <span>{{ monthNames[currentMonth] }} {{ currentYear }}</span>
      </div>
      <div class="calendar-grid">
        <div v-for="day in daysInMonth" :key="day.date" class="calendar-day"
             :style="getDayStyle(day.date)">
          <div class="day-number">{{ day.number }}</div>
          <div v-if="groupedEvents[day.date]" class="contribution-count">
            {{ groupedEvents[day.date].length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const groupedEvents = ref<any>({});
const daysInMonth = ref<Array<{ date: string; number: number }>>([]);
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = ref<number>(new Date().getMonth());
const currentYear = ref<number>(new Date().getFullYear());

// Load events for the current month or previous month
const loadEvents = async (month: number, year: number) => {
  try {
    const response = await fetch(`https://api.github.com/users/nekagit/events?per_page=100`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Transform events into a calendar-friendly format
    const events = data.map((event: any) => ({
      type: event.type,
      date: new Date(event.created_at).toISOString().split('T')[0]
    }));

    const grouped = events.reduce((acc: any, event: any) => {
      if (!acc[event.date]) {
        acc[event.date] = [];
      }
      acc[event.date].push(event.type);
      return acc;
    }, {});

    groupedEvents.value = grouped;

    // Generate days for the specified month and year
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({
        date: date.toISOString().split('T')[0],
        number: date.getDate()
      });
      date.setDate(date.getDate() + 1);
    }
    daysInMonth.value = days;
  } catch (err) {
    console.error('Error fetching GitHub events:', err);
  }
};

// Load current month's events
onMounted(() => {
  loadEvents(currentMonth.value, currentYear.value);
});

// Switch to the previous month
const loadPreviousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value -= 1;
  } else {
    currentMonth.value -= 1;
  }
  loadEvents(currentMonth.value, currentYear.value);
};

// Switch to the current month
const loadCurrentMonth = () => {
  const now = new Date();
  currentMonth.value = now.getMonth();
  currentYear.value = now.getFullYear();
  loadEvents(currentMonth.value, currentYear.value);
};

// Get style for the day based on the number of contributions
const getDayStyle = (date: string) => {
  const count = (groupedEvents.value[date] || []).length;
  let backgroundColor = '#fff'; // Default color

  if (count > 10) {
    backgroundColor = '#ffcccc'; // Red for more than 10 contributions
  } else if (count > 0) {
    backgroundColor = '#c6f6c6'; // Green for up to 10 contributions
  }

  return { backgroundColor };
};
</script>

<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.calendar-header {
  grid-column: span 7;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-day {
  padding: 5px;
  border: 1px solid #ddd;
  position: relative;
  text-align: center;
}

.day-number {
  font-weight: bold;
}

.contribution-count {
  font-size: 0.75rem;
}

.calendar-controls {
  text-align: center;
  margin-bottom: 10px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
