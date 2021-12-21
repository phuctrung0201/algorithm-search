const section = {
  id: 1,
  title: "Concept",
  content:
  
  `<html> 
  <body>
    <p>
      QuickSort is a <strong>Divide and Conquer</strong> algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
    </p> 
    
    <ol style= "padding-left: 3em">
      <li>Always pick first element as pivot.</li>
      <li>Always pick last element as pivot (implemented below).</li>
      <li>Pick a random element as pivot.</li>
      <li>Pick median as pivot.</li>      
    </ol>
    <p>
      The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
    </p>
    <p>
      Following animated representation explains how to find the pivot value in an array.
    </p>
    <img
    src="https://www.tutorialspoint.com/data_structures_algorithms/images/quick_sort_partition_animation.gif"
    alt="Quick Sort Partition Animation"
    style= "padding-left: 3em"
    />
    <p>
      The pivot value divides the list into two parts. And recursively, we find the pivot for each sub-lists until all lists contains only one element.
    </p>
  </body>
  </html>`
  
};
export default section;
