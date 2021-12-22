const section = {
    id: 37,
    title: "Insertion Operation",
    content:
    `<html>
        <p>Adding a new node in linked list is a more than one step activity. We shall learn this with diagrams here. First, create a node using the same structure and find the location where it has to be inserted.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_insertion_0.jpg"        
            style ="padding-left: 3em"> 

        <p>Imagine that we are inserting a node B (NewNode), between A (LeftNode) and C (RightNode). Then point B.next to C</p>       
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            NewNode.next −> RightNode;
        </pre>
        <p>It should look like this:</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_insertion_1.jpg"        
            style ="padding-left: 3em"> 
        <p>Now, the next node at the left should point to the new node.</p>     

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            LeftNode.next −> NewNode;
        </pre>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_insertion_2.jpg"        
            style ="padding-left: 3em">
        <p>This will put the new node in the middle of the two. The new list should look like this:</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_insertion_3.jpg"        
        style ="padding-left: 3em">
        <p>Similar steps should be taken if the node is being inserted at the beginning of the list. While inserting it at the end, the second last node of the list should point to the new node and the new node will point to NULL.</p>
    </html>`
};
export default section;