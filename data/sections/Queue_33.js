const section = {
    id: 33,
    title: "Enqueue Operation",
    content:
    `<html>
        <p>Queues maintain two data pointers, front and rear. Therefore, its operations are comparatively difficult to implement than that of stacks.</p>
        <p>The following steps should be taken to enqueue (insert) data into a queue:</p>
        <ul style= "padding-left: 3em">
            <li><p><b>Step 1</b> − Check if the queue is full.</p></li>   
            <li><p><b>Step 2</b> − If the queue is full, produce overflow error and exit.</p></li>  
            <li><p><b>Step 3</b> − If the queue is not full, increment <b>rear</b> pointer to point the next empty space.</p></li>   
            <li><p><b>Step 4</b> − Add data element to the queue location, where the rear is pointing.</p></li>   
            <li><p><b>Step 5</b> − return success.</p></li>
        </ul>
        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/queue_enqueue_diagram.jpg"        
        style= "padding-left: 3em">
        
        <p>Sometimes, we also check to see if a queue is initialized or not, to handle any unforeseen situations.</p>

        <p>A simple algorithm for enqueue operation can be derived as follows:</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            procedure enqueue(data)    
                if queue is full
                    return overflow
                endif
                
                rear ← rear + 1
                queue[rear] ← data
                return true            
            end procedure
        </pre>        
    </html>`
};
export default section;