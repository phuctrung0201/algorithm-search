const section = {
    id: 47,
    title: "Algorithm",
    content:
    `<html>
        <p>As it is an improvisation of the existing BST algorithm, we are mentioning the steps to search the 'target' data value index, using position probing:</p>
        <ol style="padding-left: 3em">
            <li>Start searching data from middle of the list.</li>
            <li>If it is a match, return the index of the item, and exit.</li>
            <li>If it is not a match, probe position.</li>
            <li>Divide the list using probing formula and find the new midle.</li>
            <li>If data is greater than middle, search in higher sub-list.</li>
            <li>If data is smaller than middle, search in lower sub-list.</li>
            <li>Repeat until match.</li>
        </ol>
    </html>`
};
export default section;