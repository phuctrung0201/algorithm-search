const section = {
    id: 6,
    title: "Concept",
    content:
    <html>
        <p>Merge sort is a sorting technique based on divide and conquer technique.
        With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.</p>
        <p>Merge sort first divides the array into equal halves and then combines them in a sorted manner.</p>
        <p>To understand merge sort, we take an unsorted array as the following:</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/unsorted_array.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>We know that merge sort first divides the whole array iteratively into equal halves unless the atomic values are achieved. We see here that an array of 8 items is divided into two arrays of size 4.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort_divide_1.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>This does not change the sequence of appearance of items in the original. Now we divide these two arrays into halves.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort_divide_2.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>We further divide these arrays and we achieve atomic value which can no more be divided.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort_divide_3.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>Now, we combine them in exactly the same manner as they were broken down. Please note the color codes given to these lists.</p>
        <p>We first compare the element for each list and then combine them into another list in a sorted manner. We see that 14 and 33 are in sorted positions. We compare 27 and 10 and in the target list of 2 values we put 10 first, followed by 27. We change the order of 19 and 35 whereas 42 and 44 are placed sequentially.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort_combine_1.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>In the next iteration of the combining phase, we compare lists of two data values, and merge them into a list of found data values placing all in a sorted order.</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort_combine_2.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>After the final merging, the list should look like this</p>
        <img
        src="https://www.tutorialspoint.com/data_structures_algorithms/images/merge_sort.jpg"
        style={{ paddingLeft: "3em" }}
        />

        <p>Now we should learn some programming aspects of merge sorting.</p>

    </html>
};
export default section;