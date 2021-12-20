const section = {
    id: 23,
    title: "Insert Operation Algorithm",
    content:
    <html>
        <p>Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.</p>
        <pre style={{ display: "block", backgroundColor: "#eee", border: "1px solid #999" }}>{`
            void insert(int data) {
                struct node *tempNode = (struct node*) malloc(sizeof(struct node));
                struct node *current;
                struct node *parent;
            
                tempNode->data = data;
                tempNode->leftChild = NULL;
                tempNode->rightChild = NULL;
            
                //if tree is empty
                if(root == NULL) {
                root = tempNode;
                } else {
                current = root;
                parent = NULL;
            
                while(1) {                
                    parent = current;
                        
                    //go to left of the tree
                    if(data < parent->data) {
                        current = current->leftChild;                
                        //insert to the left
                            
                        if(current == NULL) {
                            parent->leftChild = tempNode;
                            return;
                        }
                    }  //go to right of the tree
                    else {
                        current = current->rightChild;
                        
                        //insert to the right
                        if(current == NULL) {
                            parent->rightChild = tempNode;
                            return;
                        }
                    }
                }            
                }
            }  
        `}</pre>
    </html>
};
export default section;