const section = {
    id: 34,
    title: "Dequeue Operation",
    content:
    `<html>
        <p>Accessing data from the queue is a process of two tasks − access the data where front is pointing and remove the data after access. The following steps are taken to perform dequeue operation:</p>
        <ul style= "padding-left: 3em">
            <li><p><b>Step 1</b> − Check if the queue is empty.</p></li>   
            <li><p><b>Step 2</b> − If the queue is empty, produce underflow error and exit.</p></li>   
            <li><p><b>Step 3</b> − If the queue is not empty, access the data where <b>front</b> is pointing.</p></li>   
            <li><p><b>Step 4</b> − Increment <b>front</b> pointer to point to the next available data element.</p></li>  
            <li><p><b>Step 5</b> − Return success.</p></li>
        </ul>

        <img src="https://www.tutorialspoint.com/data_structures_algorithms/images/queue_dequeue_diagram.jpg" 
        style= "padding-left: 3em">        
        
        <p>A simple algorithm for dequeue operation can be derived as follows:</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            procedure dequeue    
            if queue is empty
                return underflow
            end if
        
            data = queue[front]
            front ← front + 1
            return true     
            end procedure
        </pre>        
    </html>`
};
export default section;