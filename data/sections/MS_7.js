const section = {
    id: 7,
    title: "Algorithm",
    content:
    <html>
        <p>Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too.</p>
        <ol style={{ paddingLeft: "3em" }}>
        <li>if it is only one element in the list it is already sorted, return.</li>
        <li>divide the list recursively into two halves until it can no more be divided.</li>
        <li>merge the smaller lists into new list in sorted order.</li>
      </ol>
    </html>
};
export default section;