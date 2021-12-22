const section = {
    id: 32,
    title: "Basic Operations",
    content:
    `<html>
        <p>Queue operations may involve initializing or defining the queue, utilizing it, and then completely erasing it from the memory. Here we shall try to understand the basic operations associated with queues:</p>

        <ul style= "padding-left: 3em">
            <li><p><b>enqueue()</b> − add (store) an item to the queue.</p></li>
            <li><p><b>dequeue()</b> − remove (access) an item from the queue.</p></li>
        </ul>

        <p>Few more functions are required to make the above-mentioned queue operation efficient.</p>
        <p>These are:</p>
        <ul style= "padding-left: 3em">
            <li><p><b>peek()</b> − Gets the element at the front of the queue without removing it.</p></li>
            <li><p><b>isfull()</b> − Checks if the queue is full.</p></li>
            <li><p><b>isempty()</b> − Checks if the queue is empty.</p></li>
        </ul>
        <p>In queue, we always dequeue (or access) data, pointed by <b>front</b> pointer and while enqueing (or storing) data in the queue we take help of <b>rear</b> pointer.</p>

        <p>Let's first learn about supportive functions of a queue:</p>

        <p style="padding-top: 1em">Algorithm of peek() function:</p>
        <p>This function helps to see the data at the front of the queue. The algorithm of peek() function is as follows:</p>

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure peek
                return queue[top]
            end procedure
        </pre>

        <p style="padding-top: 1em">Algorithm of isfull() function:</p>

        <p>As we are using single dimension array to implement queue, we just check for the rear pointer to reach at MAXSIZE to determine that the queue is full. In case we maintain the queue in a circular linked-list, the algorithm will differ.</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure isfull
            if rear equals to MAXSIZE
                return true
            else
                return false
            endif            
            end procedure
        </pre>
        <p style="padding-top: 1em">Algorithm of isempty() function:</p>

        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            begin procedure isempty

                if front is less than MIN  OR front is greater than rear
                    return true
                else
                    return false
                endif
            
            end procedure
        </pre>       
        <p>If the value of <b>front</b> is less than MIN or 0, it tells that the queue is not yet initialized, hence empty.</p>
    </html>`
};
export default section;