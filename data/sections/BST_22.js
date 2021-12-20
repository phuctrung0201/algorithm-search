const section = {
    id: 22,
    title: "Search Operation Algorithm",
    content:
    <html>
        <p>Whenever an element is to be searched, start searching from the root node. Then if the data is less than the key value, search for the element in the left subtree. Otherwise, search for the element in the right subtree. Follow the same algorithm for each node.</p>
        <pre style={{ display: "block", backgroundColor: "#eee", border: "1px solid #999" }}>{`
            struct node* search(int data){
                struct node *current = root;
                printf("Visiting elements: ");
                
                while(current->data != data){
                
                if(current != NULL) {
                    printf("%d ",current->data);
                        
                    //go to left tree
                    if(current->data > data){
                        current = current->leftChild;
                    }  //else go to right tree
                    else {                
                        current = current->rightChild;
                    }
                        
                    //not found
                    if(current == NULL){
                        return NULL;
                    }
                }			
                }
                
                return current;
            }
        `}</pre>
    </html>
};
export default section;