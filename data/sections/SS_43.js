const section = {
    id: 43,
    title: "Pseudocode",
    content:
    `<html>
        <pre style="background-color: #eee; border: 1px solid #999; display: block">
            procedure selection sort 
                list  : array of items
                n     : size of list            
                for i = 1 to n - 1
                /* set current element as minimum*/
                    min = i                
                    /* check the element to be minimum */            
                    for j = i+1 to n 
                        if list[j] < list[min] then
                            min = j;
                        end if
                    end for
            
                    /* swap the minimum element with the current element*/
                    if indexMin != i  then
                        swap list[min] and list[i]
                    end if
                end for            
            end procedure
        </pre>
    </html>`
};
export default section;