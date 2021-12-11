import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      thumbnail: {
        url: "https://www.youtube.com/embed/f6ruy5ObLPY",
        type: "video",
      },
      title: "Visualization of Dijkstra's Algorithm",
      description:
        "The Intelligent learning system in Graph Theory is an Intelligent tutoring system. This system is built on the website. It meets requirements of an Intelligent system for learning of algorithms. It is useful for students to understand how the algorithm runs. It can interact to the learner step-by-step based on the visualizations of algorithms in learning tutors.",
    },
    {
      id: 2,
      thumbnail: {
        url: "https://www.youtube.com/embed/f6ruy5ObLPY",
        type: "video",
      },
      title: "Visualization of Dijkstra's Algorithm",
      description:
        "The Intelligent learning system in Graph Theory is an Intelligent tutoring system. This system is built on the website. It meets requirements of an Intelligent system for learning of algorithms. It is useful for students to understand how the algorithm runs. It can interact to the learner step-by-step based on the visualizations of algorithms in learning tutors.",
    },
    {
      id: 3,
      thumbnail: {
        url: "https://www.youtube.com/embed/f6ruy5ObLPY",
        type: "video",
      },
      title: "Visualization of Dijkstra's Algorithm",
      description:
        "The Intelligent learning system in Graph Theory is an Intelligent tutoring system. This system is built on the website. It meets requirements of an Intelligent system for learning of algorithms. It is useful for students to understand how the algorithm runs. It can interact to the learner step-by-step based on the visualizations of algorithms in learning tutors.",
    },
    {
      id: 4,
      thumbnail: {
        url: "https://www.youtube.com/embed/f6ruy5ObLPY",
        type: "video",
      },
      title: "Visualization of Dijkstra's Algorithm",
      description:
        "The Intelligent learning system in Graph Theory is an Intelligent tutoring system. This system is built on the website. It meets requirements of an Intelligent system for learning of algorithms. It is useful for students to understand how the algorithm runs. It can interact to the learner step-by-step based on the visualizations of algorithms in learning tutors.",
    },
  ],
};

const newSlice = createSlice({
  name: "new",
  initialState,
});

export default newSlice.reducer;
