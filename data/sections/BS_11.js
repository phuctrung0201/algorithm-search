const section = {
    id: 11,
    title: "Pseudocode",
    content:
    `<html>
        <p>We observe in algorithm that Bubble Sort compares each pair of array element unless the whole array is completely sorted in an ascending order. This may cause a few complexity issues like what if the array needs no more swapping as all the elements are already ascending.</p>
        <p>To ease-out the issue, we use one flag variable swapped which will help us see if any swap has happened or not. If no swap has occurred, i.e. the array requires no more processing to be sorted, it will come out of the loop.</p>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
        procedure bubbleSort( list : array of items )

            loop = list.count;
            
            for i = 0 to loop-1 do:
            swapped = false
                
            for j = 0 to loop-1 do:
            
                /* compare the adjacent elements */   
                if list[j] > list[j+1] then
                    /* swap them */
                    swap( list[j], list[j+1] )		 
                    swapped = true
                end if
                
            end for
            
            /*if no number was swapped that means 
            array is sorted now, break the loop.*/
            
            if(not swapped) then
                break
            end if
            
            end for
            
        end procedure return list
        </pre>
    </html>`
};
export default section;