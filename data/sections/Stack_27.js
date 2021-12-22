const section = {
    id: 27,
    title: "Basic Operations",
    content:
    `<html>
        <p>Stack operations may involve initializing the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations:</p>

        <ul style= "padding-left: 3em">
            <li><p><b>push()</b> − Pushing (storing) an element on the stack.</p></li>
            <li><p><b>pop()</b> − Removing (accessing) an element from the stack.</p></li>
        </ul>
        <p>When data is PUSHed onto stack.</p>
        <p>To use a stack efficiently, we need to check the status of stack as well. For the same purpose, the following functionality is added to stacks:</p>
        <ul style= "padding-left: 3em">
            <li><p><b>peek()</b> − get the top data element of the stack, without removing it.</p></li>
            <li><p><b>isFull()</b> − check if stack is full.</p></li>
            <li><p><b>isEmpty()</b> − check if stack is empty.</p></li>
        </ul>
        <p>At all times, we maintain a pointer to the last PUSHed data on the stack. As this pointer always represents the top of the stack, hence named <b>top</b>. The <b>top</b> pointer provides top value of the stack without actually removing it.</p>
        
        <p>First we should learn about procedures to support stack functions</p>

        <p style="padding-top: 1em">Algorithm of peek() function:</p>

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure peek
                return stack[top]
            end procedure
        </pre>

        <p style="padding-top: 1em">Algorithm of isfull() function:</p>

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure isfull
                if top equals to MAXSIZE
                    return true
                else
                    return false
                endif            
            end procedure
        </pre>

        <p style="padding-top: 1em">Algorithm of isempty() function:</p>

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure isempty
                if top less than 1
                    return true
                else
                    return false
                endif                
            end procedure
        </pre>       

    </html>`
};
export default section;