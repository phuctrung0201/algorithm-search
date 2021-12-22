const section = {
    id: 38,
    title: "Deletion Operation",
    content:
    `<html>
        <p>Deletion is also a more than one step process. We shall learn with pictorial representation. First, locate the target node to be removed, by using searching algorithms.
        </p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_deletion_0.jpg"
            style ="padding-left: 3em">
        <p>The left (previous) node of the target node now should point to the next node of the target node:</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            LeftNode.next −> TargetNode.next;            
        </pre>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_deletion_1.jpg"
        style ="padding-left: 3em">
        <p>This will remove the link that was pointing to the target node. Now, using the following code, we will remove what the target node is pointing at.</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            TargetNode.next −> NULL;
        </pre>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_deletion_2.jpg"
        style ="padding-left: 3em">
        <p>We need to use the deleted node. We can keep that in memory otherwise we can simply deallocate memory and wipe off the target node completely.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_deletion_3.jpg"
        style ="padding-left: 3em">
    </html>`
};
export default section;