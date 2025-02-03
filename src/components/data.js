const workoutPlan = [
    {
      day: "Monday",
      title: "Chest & Triceps",
      exercises: [
        { title: "Push-Ups", duration: "4 sets × 12-15 reps", videoUrl: "https://www.youtube.com/embed/yQEx9OC2C3E" },
        { title: "Incline Push-Ups", duration: "3 sets × 12 reps", videoUrl: "https://www.youtube.com/embed/DORUKQ3zLIo" },
        { title: "Diamond Push-Ups", duration: "3 sets × 10-12 reps", videoUrl: "https://www.youtube.com/embed/PPTj-MW2tcs" },
        { title: "Tricep Dips", duration: "4 sets × 12 reps", videoUrl: "https://www.youtube.com/embed/jlVIALohg2I" },
        { title: "Plank to Push-Up", duration: "3 sets × 10 reps", videoUrl: "https://www.youtube.com/embed/mHzGyMLN144" },
      ],
    },
    {
      day: "Tuesday",
      title: "Back & Biceps",
      exercises: [
        { title: "Inverted Rows", duration: "4 sets × 8-12 reps", videoUrl: "https://www.youtube.com/embed/x7zlGd-bIU0" },
        { title: "Superman Hold", duration: "3 sets × 30 seconds", videoUrl: "https://www.youtube.com/embed/yzIv_RUf81s" },
        { title: "Pull-Up Bar Rows", duration: "3 sets × 8-10 reps", videoUrl: "https://www.youtube.com/embed/kNxM3BaOU0g" },
        { title: "Bodyweight Bicep Curls", duration: "4 sets × 12 reps", videoUrl: "https://www.youtube.com/embed/7VC7smYfY0I" },
        { title: "Chin-Ups", duration: "3 sets × 6-10 reps", videoUrl: "https://www.youtube.com/embed/Oi3bW9nQmGI" },
      ],
    },
    {
      day: "Wednesday",
      title: "Shoulders & Abs",
      exercises: [
        { title: "Pike Push-Ups", duration: "4 sets × 10-12 reps", videoUrl: "https://www.youtube.com/embed/jz_Vr4JbUjc" },
        { title: "Handstand Push-Ups", duration: "3 sets × 6-8 reps", videoUrl: "https://www.youtube.com/embed/gSjHRuRQ4hk" },
        { title: "Lateral Raises", duration: "3 sets × 15 reps", videoUrl: "https://www.youtube.com/embed/Kl3LEzQ5Zqs" },
        { title: "Plank", duration: "4 sets × 30-60 seconds", videoUrl: "https://www.youtube.com/embed/v25dawSzRTM" },
        { title: "Leg Raises", duration: "4 sets × 15 reps", videoUrl: "https://www.youtube.com/embed/7RgOFbvb6XI" },
        { title: "Bicycle Crunches", duration: "3 sets × 20 reps", videoUrl: "https://www.youtube.com/embed/CakPX7X-mSw" },
      ],
    },
    {
      day: "Thursday",
      title: "Legs & Glutes",
      exercises: [
        { title: "Bodyweight Squats", duration: "4 sets × 15-20 reps", videoUrl: "https://www.youtube.com/embed/I7Nk1RMtcLs" },
        { title: "Lunges", duration: "4 sets × 12 reps per leg", videoUrl: "https://www.youtube.com/embed/YASKcL_kO3M" },
        { title: "Bulgarian Split Squats", duration: "3 sets × 10-12 reps per leg", videoUrl: "https://www.youtube.com/embed/uODWo4YqbT8" },
        { title: "Glute Bridges", duration: "4 sets × 15-20 reps", videoUrl: "https://www.youtube.com/embed/ktSiNvWzYWY" },
        { title: "Wall Sit", duration: "3 sets × 30-60 seconds", videoUrl: "https://www.youtube.com/embed/MucpYF4DKc4" },
      ],
    },
    {
      day: "Friday",
      title: "Full-Body Circuit",
      exercises: [
        { title: "Burpees", duration: "4 sets × 10 reps", videoUrl: "https://www.youtube.com/embed/zlYA1SENYG4" },
        { title: "Jumping Jacks", duration: "4 sets × 30 seconds", videoUrl: "https://www.youtube.com/embed/yg3KQQn3QWg" },
        { title: "Mountain Climbers", duration: "4 sets × 30 seconds", videoUrl: "https://www.youtube.com/embed/dqjZ6BGhY9s" },
        { title: "High Knees", duration: "3 sets × 30 seconds", videoUrl: "https://www.youtube.com/embed/0X0Q8wKLEfo" },
        { title: "Plank to Push-Up", duration: "3 sets × 10 reps", videoUrl: "https://www.youtube.com/embed/56vUOad6Irs" },
        { title: "Squat Jumps", duration: "4 sets × 12 reps", videoUrl: "https://www.youtube.com/embed/nVNrHBwMBGg" },
      ],
    },
    {
      day: "Saturday",
      title: "Arms & Abs",
      exercises: [
        { title: "Push-Ups", duration: "4 sets × 12-15 reps", videoUrl: "https://www.youtube.com/embed/yQEx9OC2C3E" },
        { title: "Diamond Push-Ups", duration: "4 sets × 12 reps", videoUrl: "https://www.youtube.com/embed/PPTj-MW2tcs" },
        { title: "Tricep Dips", duration: "3 sets × 15 reps", videoUrl: "https://www.youtube.com/embed/jlVIALohg2I" },
        { title: "Bicep Curls", duration: "3 sets × 15 reps", videoUrl: "https://www.youtube.com/embed/7VC7smYfY0I" },
        { title: "Russian Twists", duration: "4 sets × 20 reps", videoUrl: "https://www.youtube.com/embed/BA-uP_-bVE8" },
        { title: "Planks with Arm Reach", duration: "3 sets × 30 seconds each side", videoUrl: "https://www.youtube.com/embed/b_QDoi9V4oA" },
      ],
    },
    {
      day: "Sunday",
      title: "Rest or Active Recovery",
      exercises: [
        { title: "Stretching", duration: "Focus on flexibility and muscle relaxation.", videoUrl: "https://www.youtube.com/embed/pWJWBDaVq5o" },
        { title: "Walk or Light Jog", duration: "30-minute easy pace" },
      ],
    },
  ];
  
  export default workoutPlan;
  