const section = {
    id: 21,
    title: "Node",
    content:
    `<html>
        <p>Define a node having some data, references to its left and right child nodes.</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            struct node {
                int data;   
                struct node *leftChild;
                struct node *rightChild;
            };
        </pre>
    </html>`
};
export default section;