const section = {
    id: 46,
    title: "Position Probing in Interpolation Search",
    content:
    `<html>
        <p>Interpolation search finds a particular item by computing the probe position. Initially, the probe position is the position of the middle most item of the collection.</p>
        <img scr="https://www.tutorialspoint.com/data_structures_algorithms/images/interpolation_step_one.jpg"
            style = "padding-left: 3em">
        <img scr="https://www.tutorialspoint.com/data_structures_algorithms/images/interpolation_step_two.jpg"
            style = "padding-left: 3em">
        <p style="padding-top: 1em">If a match occurs, then the index of the item is returned. To split the list into two parts, we use the following method:</p>
        
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo])

            where:
                A    = list
                Lo   = Lowest index of the list
                Hi   = Highest index of the list
                A[n] = Value stored at index n in the list
        </pre>
        <p style="padding-top: 1em">If the middle item is greater than the item, then the probe position is again calculated in the sub-array to the right of the middle item. Otherwise, the item is searched in the subarray to the left of the middle item. This process continues on the sub-array as well until the size of subarray reduces to zero.</p>
        <p style="padding-top: 1em">Runtime complexity of interpolation search algorithm is Ο(log (log n)) as compared to Ο(log n) of BST in favorable situations.</p>
    </html>`
};
export default section;