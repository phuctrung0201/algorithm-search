const section = {
    id: 29,
    title: "Pop Operation",
    content:
    `<html>
        <p>Accessing the content while removing it from the stack, is known as a Pop Operation. In an array implementation of pop() operation, the data element is not actually removed, instead <b>top</b> is decremented to a lower position in the stack to point to the next value. But in linked-list implementation, pop() actually removes data element and deallocates memory space.</p>
        <p>A Pop operation may involve the following steps:</p>
        <ul style= "padding-left: 3em">
            <li><p><b>Step 1</b> − Checks if the stack is empty.</p></li>
            <li><p><b>Step 2</b> − If the stack is empty, produces an error and exit.</p></li>
            <li><p><b>Step 3</b> − If the stack is not empty, accesses the data element at which <b>top</b> is pointing.</p></li>
            <li><p><b>Step 4</b> − Decreases the value of top by 1.</p></li>
            <li><p><b>Step 5</b> − Returns success.</p></li>
        </ul>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/stack_pop_operation.jpg" 
        alt="Stack Representation"
        style= "padding-left: 3em">        
        
        <p>A simple algorithm for Pop operation can be derived as follows:</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure pop: stack

                if stack is empty
                    return null
                endif
                
                data ← stack[top]
                top ← top - 1
                return data
            
            end procedure
        </pre>        
    </html>`
};
export default section;