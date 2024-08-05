import { create } from "zustand";

const useStore = create((set) => ({
  //theme
  theme: "night",
  setTheme: (theme) => set({ theme }),

  //InputStats
  activeTab: "lifts",
  setActiveTab: (value) => set({ activeTab: value }),

  activeNav: false,
  setActiveNav: (value) => set({ activeNav: value }),

  userData: [
    { month: 'Jan', weight: 0 },
    { month: 'Feb', weight: 0 },
    { month: 'Mar', weight: 0 },
    { month: 'Apr', weight: 0 },
    { month: 'May', weight: 0 },
    { month: 'Jun', weight: 0 },
    { month: 'Jul', weight: 0 },
    { month: 'Aug', weight: 0 },
    { month: 'Sep', weight: 0 },
    { month: 'Oct', weight: 0 },
    { month: 'Nov', weight: 0 },
    { month: 'Dec', weight: 0 },
  ],
  setUserData: (weightProvided, index) => set((state) => ({
    userData: state.userData.map((month, i) =>
      i === index ? { ...month, weight: weightProvided } : month
    )
  })),



  exercisesData: [],
  setExercisesData: (exercisesData) => set({ exercisesData }),

  exerciseSelected: 'Select an exercise',
  setExerciseSelected: (exerciseSelected) => set({ exerciseSelected }),

  showCalendar: false,
  setShowCalendar: (showCalendar) => set({ showCalendar }),

  calendarValue: "Input your lifts",
  setCalendarValue: (calendarValue) => set({ calendarValue }),

  calendarError: false,
  setCalendarError: (calendarError) => set({ calendarError }),

  showExercises: false,
  setShowExercises: (showExercises) => set({ showExercises }),

  showMultipleExercises: false,
  setShowMultipleExercises: (showMultipleExercises) => set({ showMultipleExercises }),

  showCharts: false,
  setShowCharts: (showCharts) => set({ showCharts }),

  chartType: null,
  setChartType: (value) => set({ chartType: value }),

  numberOfExercises: 2,
  setNumberOfExercises: (numberOfExercises) => set({ numberOfExercises }),

  toggleCalendar: () => set(state => ({ showCalendar: !state.showCalendar })),
  toggleExercises: () => set(state => ({ showExercises: !state.showExercises })),
  toggleCharts: () => set(state => ({ showCharts: !state.showCharts })),
  toggleMultipleExercises: () => {
    set(state => ({
      showMultipleExercises: !state.showMultipleExercises,
      exercisesData: []
    }));
  },

  calendarSubmit: () => {
    set(state => {
      let lifts = state.userData.filter(data => data.weight > 0).length;

      if (lifts >= 3) {
        sessionStorage.setItem("userDataStrength", JSON.stringify(state.userData));
        return {
          calendarValue: "Lifts Updated",
          calendarError: false,
          showCalendar: !state.showCalendar
        };
      } else {
        return { calendarError: true };
      }
    });
  }

}));

export { useStore };
