const section = {
  id: 2,
  title: "Quick Sort Pivot Algorithm",
  content:
  <html>
    <head>
    </head>
    <body>
      <p>Based on our understanding of partitioning in quick sort, we will now try to write an algorithm for it, which is as follows:</p>
      <ol style={{ paddingLeft: "3em" }}>
        <li>Choose the highest index value has pivot</li>
        <li>Take two variables to point left and right of the list excluding pivot</li>
        <li>left points to the low index</li>
        <li>right points to the high</li>
        <li>while value at left is less than pivot move right</li>
        <li>while value at right is greater than pivot move left</li>
        <li>if both step 5 and step 6 does not match swap left and right</li>
        <li>if left ≥ right, the point where they met is new pivot</li>
      </ol>
    </body>
  </html>
    
};
export default section;
