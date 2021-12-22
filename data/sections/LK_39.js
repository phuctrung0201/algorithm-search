const section = {
    id: 39,
    title: "Reverse Operation",
    content:
    `<html>
        <p>This operation is a thorough one. We need to make the last node to be pointed by the head node and reverse the whole linked list.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_reverse_0.jpg"
            style ="padding-left: 3em">
        <p>First, we traverse to the end of the list. It should be pointing to NULL. Now, we shall make it point to its previous node:</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_reverse_1.jpg"
            style ="padding-left: 3em">
        <p>We have to make sure that the last node is not the last node. So we'll have some temp node, which looks like the head node pointing to the last node. Now, we shall make all left side nodes point to their previous nodes one by one.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_reverse_2.jpg"
            style ="padding-left: 3em">
        <p>Except the node (first node) pointed by the head node, all nodes should point to their predecessor, making them their new successor. The first node will point to NULL.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_reverse_3.jpg"
            style ="padding-left: 3em">
        <p>We'll make the head node point to the new first node by using the temp node.</p>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/linked_list_reverse_4.jpg"
            style ="padding-left: 3em">
    </html>`
};
export default section;