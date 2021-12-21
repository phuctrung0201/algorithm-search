const section = {
  id: 4,
  title: "Quick Sort Algorithm",
  content:
  <html>
      <p>Using pivot algorithm recursively, we end up with smaller possible partitions. Each partition is then processed for quick sort. We define recursive algorithm for quicksort as follows:</p>
      <ol style={{ paddingLeft: "3em" }}>
        <li>Make the right-most index value pivot</li>
        <li>partition the array using pivot value</li>
        <li>quicksort left partition recursively</li>
        <li>quicksort right partition recursively</li>
      </ol>
  </html>
  };
export default section;
