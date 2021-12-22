const section = {
    id: 28,
    title: "Push Operation",
    content:
    `<html>
        <p>The process of putting a new data element onto stack is known as a Push Operation. Push operation involves a series of steps:</p>
        <ul style="padding-left: 3em>
            <li><p><b>Step 1</b> − Checks if the stack is full.</p></li>
            <li><p><b>Step 2</b> − If the stack is full, produces an error and exit.</p></li>
            <li><p><b>Step 3</b> − If the stack is not full, increments <b>top</b> to point next empty space.</p></li>
            <li><p><b>Step 4</b> − Adds data element to the stack location, where top is pointing.</p></li>
            <li><p><b>Step 5</b> − Returns success.</p></li>
        </ul>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/stack_push_operation.jpg" 
        alt="Stack Representation"
        style= "padding-left: 3em">
        
        <p>If the linked list is used to implement the stack, then in step 3, we need to allocate space dynamically.</p>

        <p>A simple algorithm for Push operation can be derived as follows:</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure push: stack, data
                if stack is full
                    return null
                endif
                
                top ← top + 1
                stack[top] ← data        
            end procedure
        </pre>        
    </html>`
};
export default section;