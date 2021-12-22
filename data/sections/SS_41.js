const section = {
    id: 41,
    title: "How it Works?",
    content:
    `<html>
        <p>Consider the following depicted array as an example.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/unsorted_array.jpg" 
        style= "padding-left: 3em">
        <p>For the first position in the sorted list, the whole list is scanned sequentially. The first position where 14 is stored presently, we search the whole list and find that 10 is the lowest value.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_1.jpg" 
        style= "padding-left: 3em">
        <p>So we replace 14 with 10. After one iteration 10, which happens to be the minimum value in the list, appears in the first position of the sorted list.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_2.jpg" 
        style= "padding-left: 3em">
        <p>For the second position, where 33 is residing, we start scanning the rest of the list in a linear manner.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_3.jpg" 
        style= "padding-left: 3em">
        <p>We find that 14 is the second lowest value in the list and it should appear at the second place. We swap these values.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_4.jpg" 
        style= "padding-left: 3em">
        <p>After two iterations, two least values are positioned at the beginning in a sorted manner.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort_5.jpg" 
        style= "padding-left: 3em">
        <p>The same process is applied to the rest of the items in the array.</p>
        <p>Following is a pictorial depiction of the entire sorting process:</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/selection_sort.jpg" 
        style= "padding-left: 3em">
        
    </html>`
};
export default section;