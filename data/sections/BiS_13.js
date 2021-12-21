const section = {
    id: 13,
    title: "How It Works?",
    content:
    `<html>
        <p>For a binary search to work, it is mandatory for the target array to be sorted. We shall learn the process of binary search with a pictorial example. The following is our sorted array and let us assume that we need to search the location of value 31 using binary search.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_0.jpg"
        style= "padding-left: 3em"
        />
        <p>First, we shall determine half of the array by using this formula</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            mid = low + (high - low) / 2
        </pre>
        <p>Here it is, 0 + (9 - 0 ) / 2 = 4 (integer value of 4.5). So, 4 is the mid of the array.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_1.jpg"
        style= "padding-left: 3em"
        />

        <p>Now we compare the value stored at location 4, with the value being searched, i.e. 31. We find that the value at location 4 is 27, which is not a match. As the value is greater than 27 and we have a sorted array, so we also know that the target value must be in the upper portion of the array.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_2.jpg"
        style= "padding-left: 3em"
        />

        <p>We change our low to mid + 1 and find the new mid value again.</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            low = mid + 1
            mid = low + (high - low) / 2
        </pre>

        <p>Our new mid is 7 now. We compare the value stored at location 7 with our target value 31.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_3.jpg"
        style= "padding-left: 3em"
        />

        <p>The value stored at location 7 is not a match, rather it is more than what we are looking for. So, the value must be in the lower part from this location.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_4.jpg"
        style= "padding-left: 3em"
        />

        <p>Hence, we calculate the mid again. This time it is 5.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_5.jpg"
        style= "padding-left: 3em"
        />

        <p>We compare the value stored at location 5 with our target value. We find that it is a match.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/binary_search_6.jpg"
        style= "padding-left: 3em"
        />

        <p>We conclude that the target value 31 is stored at location 5.</p>
        <p>Binary search halves the searchable items and thus reduces the count of comparisons to be made to very less numbers.</p>

    </html>`
};
export default section;