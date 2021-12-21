const section = {
    id: 9,
    title: "Concept",
    content:
    `<html>
        <p>Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.</p>
        
        <p>We take an unsorted array for our example. Bubble sort takes Ο(n2) time so we're keeping it short and precise.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_0.jpg"
        style= "padding-left: 3em"
        />  
        <p>Bubble sort starts with very first two elements, comparing them to check which one is greater.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_1.jpg"
        style= "padding-left: 3em"
        />  
        <p>In this case, value 33 is greater than 14, so it is already in sorted locations. Next, we compare 33 with 27.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_2.jpg"
        style= "padding-left: 3em"
        />  
        <p>We find that 27 is smaller than 33 and these two values must be swapped.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_3.jpg"
        style= "padding-left: 3em"
        />  
        <p>The new array should look like this</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_4.jpg"
        style= "padding-left: 3em"
        />  
        <p>Next we compare 33 and 35. We find that both are in already sorted positions.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_5.jpg"
        style= "padding-left: 3em"
        />  
        <p>Then we move to the next two values, 35 and 10.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_6.jpg"
        style= "padding-left: 3em"
        />  
        <p>We know then that 10 is smaller 35. Hence they are not sorted.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_7.jpg"
        style= "padding-left: 3em"
        />  
        <p>We swap these values. We find that we have reached the end of the array. After one iteration, the array should look like this</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_8.jpg"
        style= "padding-left: 3em"
        />  
        <p>To be precise, we are now showing how an array should look like after each iteration. After the second iteration, it should look like this</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_9.jpg"
        style= "padding-left: 3em"
        />  
        <p>Notice that after each iteration, at least one value moves at the end.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_10.jpg"
        style= "padding-left: 3em"
        />  
        <p>And when there's no swap required, bubble sorts learns that an array is completely sorted.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_11.jpg"
        style= "padding-left: 3em"
        />
    </html>`
};
export default section;